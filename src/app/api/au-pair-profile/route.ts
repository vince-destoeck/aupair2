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

    // Get au pair profile data
    const auPairProfile = await env.DB.prepare(
      'SELECT * FROM au_pair_profiles WHERE user_id = ?'
    )
      .bind(userId)
      .first();

    if (!auPairProfile) {
      return NextResponse.json(
        { error: 'Au pair profile not found' },
        { status: 404 }
      );
    }

    // Get user data
    const user = await env.DB.prepare(
      'SELECT id, email, name, user_type, created_at, updated_at FROM users WHERE id = ?'
    )
      .bind(userId)
      .first();

    return NextResponse.json({
      user,
      profile: auPairProfile
    });
  } catch (error) {
    console.error('Get au pair profile error:', error);
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
    
    // Only au pair users can update au pair profiles
    if (userType !== 'au_pair') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 403 }
      );
    }

    const {
      nationality,
      languages,
      experience,
      skills,
      availability_start,
      availability_end,
      preferences,
      photos
    } = await request.json();

    // Check if profile exists
    const existingProfile = await env.DB.prepare(
      'SELECT id FROM au_pair_profiles WHERE user_id = ?'
    )
      .bind(userId)
      .first();

    if (existingProfile) {
      // Update existing profile
      await env.DB.prepare(`
        UPDATE au_pair_profiles
        SET nationality = ?,
            languages = ?,
            experience = ?,
            skills = ?,
            availability_start = ?,
            availability_end = ?,
            preferences = ?,
            photos = ?,
            updated_at = CURRENT_TIMESTAMP
        WHERE user_id = ?
      `)
        .bind(
          nationality,
          JSON.stringify(languages),
          experience,
          JSON.stringify(skills),
          availability_start,
          availability_end,
          JSON.stringify(preferences),
          JSON.stringify(photos),
          userId
        )
        .run();
    } else {
      // Create new profile
      await env.DB.prepare(`
        INSERT INTO au_pair_profiles (
          id,
          user_id,
          nationality,
          languages,
          experience,
          skills,
          availability_start,
          availability_end,
          preferences,
          photos,
          verified,
          created_at,
          updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
      `)
        .bind(
          crypto.randomUUID(),
          userId,
          nationality,
          JSON.stringify(languages),
          experience,
          JSON.stringify(skills),
          availability_start,
          availability_end,
          JSON.stringify(preferences),
          JSON.stringify(photos),
          false
        )
        .run();
    }

    return NextResponse.json({
      message: 'Au pair profile updated successfully'
    });
  } catch (error) {
    console.error('Update au pair profile error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
