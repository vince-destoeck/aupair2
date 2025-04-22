import { NextRequest, NextResponse } from 'next/server';
import { D1Database } from '@cloudflare/workers-types';
import { verifyAuth } from '@/lib/auth';

interface Env {
  DB: D1Database;
}

export async function GET(request: NextRequest, { env }: { env: Env }) {
  try {
    // Verify authentication
    const authResult = await verifyAuth(request);
    if (!authResult.success) {
      return NextResponse.json(
        { error: authResult.error },
        { status: 401 }
      );
    }

    const { userId, userType } = authResult;

    // Get family profile data
    const familyProfile = await env.DB.prepare(
      'SELECT * FROM family_profiles WHERE user_id = ?'
    )
      .bind(userId)
      .first();

    if (!familyProfile) {
      return NextResponse.json(
        { error: 'Family profile not found' },
        { status: 404 }
      );
    }

    // Get user data
    const user = await env.DB.prepare(
      'SELECT id, email, name, user_type, created_at, updated_at FROM users WHERE id = ?'
    )
      .bind(userId)
      .first();

    // Get membership data
    const membership = await env.DB.prepare(
      'SELECT * FROM memberships WHERE user_id = ? ORDER BY end_date DESC LIMIT 1'
    )
      .bind(userId)
      .first();

    return NextResponse.json({
      user,
      profile: familyProfile,
      membership: membership || null
    });
  } catch (error) {
    console.error('Get family profile error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest, { env }: { env: Env }) {
  try {
    // Verify authentication
    const authResult = await verifyAuth(request);
    if (!authResult.success) {
      return NextResponse.json(
        { error: authResult.error },
        { status: 401 }
      );
    }

    const { userId, userType } = authResult;
    
    // Only family users can update family profiles
    if (userType !== 'family') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 403 }
      );
    }

    const {
      location,
      family_members,
      accommodation_details,
      childcare_needs,
      schedule_requirements,
      preferences,
      photos
    } = await request.json();

    // Check if profile exists
    const existingProfile = await env.DB.prepare(
      'SELECT id FROM family_profiles WHERE user_id = ?'
    )
      .bind(userId)
      .first();

    if (existingProfile) {
      // Update existing profile
      await env.DB.prepare(`
        UPDATE family_profiles
        SET location = ?,
            family_members = ?,
            accommodation_details = ?,
            childcare_needs = ?,
            schedule_requirements = ?,
            preferences = ?,
            photos = ?,
            updated_at = CURRENT_TIMESTAMP
        WHERE user_id = ?
      `)
        .bind(
          location,
          JSON.stringify(family_members),
          accommodation_details,
          childcare_needs,
          schedule_requirements,
          JSON.stringify(preferences),
          JSON.stringify(photos),
          userId
        )
        .run();
    } else {
      // Create new profile
      await env.DB.prepare(`
        INSERT INTO family_profiles (
          id,
          user_id,
          location,
          family_members,
          accommodation_details,
          childcare_needs,
          schedule_requirements,
          preferences,
          photos,
          verified,
          created_at,
          updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
      `)
        .bind(
          crypto.randomUUID(),
          userId,
          location,
          JSON.stringify(family_members),
          accommodation_details,
          childcare_needs,
          schedule_requirements,
          JSON.stringify(preferences),
          JSON.stringify(photos),
          false
        )
        .run();
    }

    return NextResponse.json({
      message: 'Family profile updated successfully'
    });
  } catch (error) {
    console.error('Update family profile error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
