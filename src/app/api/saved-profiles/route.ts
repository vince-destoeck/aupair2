import { NextRequest, NextResponse } from 'next/server';
import { D1Database } from '@cloudflare/workers-types';
import { verifyAuth } from '@/lib/auth';

interface Env {
  DB: D1Database;
}

// Get saved profiles for the current user
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

    let profiles;
    
    if (userType === 'family') {
      // Get saved au pair profiles
      const query = `
        SELECT 
          u.id as user_id,
          u.name,
          u.email,
          p.id as profile_id,
          p.nationality,
          p.languages,
          p.experience,
          p.skills,
          p.availability_start,
          p.availability_end,
          p.preferences,
          p.photos,
          s.id as saved_id,
          s.created_at as saved_at
        FROM saved_profiles s
        JOIN users u ON s.saved_profile_id = u.id
        JOIN au_pair_profiles p ON u.id = p.user_id
        WHERE s.user_id = ?
        ORDER BY s.created_at DESC
      `;

      profiles = await env.DB.prepare(query)
        .bind(userId)
        .all();
    } else if (userType === 'au_pair') {
      // Get saved family profiles
      const query = `
        SELECT 
          u.id as user_id,
          u.name,
          u.email,
          p.id as profile_id,
          p.location,
          p.family_members,
          p.accommodation_details,
          p.childcare_needs,
          p.schedule_requirements,
          p.preferences,
          p.photos,
          s.id as saved_id,
          s.created_at as saved_at
        FROM saved_profiles s
        JOIN users u ON s.saved_profile_id = u.id
        JOIN family_profiles p ON u.id = p.user_id
        WHERE s.user_id = ?
        ORDER BY s.created_at DESC
      `;

      profiles = await env.DB.prepare(query)
        .bind(userId)
        .all();
    } else {
      return NextResponse.json(
        { error: 'Invalid user type' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      saved_profiles: profiles.results
    });
  } catch (error) {
    console.error('Get saved profiles error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Save a profile
export async function POST(request: NextRequest, { env }: { env: Env }) {
  try {
    // Verify authentication
    const authResult = await verifyAuth(request);
    if (!authResult.success) {
      return NextResponse.json(
        { error: authResult.error },
        { status: 401 }
      );
    }

    const { userId } = authResult;
    const { profile_id } = await request.json();

    // Validate input
    if (!profile_id) {
      return NextResponse.json(
        { error: 'Profile ID is required' },
        { status: 400 }
      );
    }

    // Check if profile exists
    const profile = await env.DB.prepare(
      'SELECT id FROM users WHERE id = ?'
    )
      .bind(profile_id)
      .first();

    if (!profile) {
      return NextResponse.json(
        { error: 'Profile not found' },
        { status: 404 }
      );
    }

    // Check if already saved
    const existingSave = await env.DB.prepare(
      'SELECT id FROM saved_profiles WHERE user_id = ? AND saved_profile_id = ?'
    )
      .bind(userId, profile_id)
      .first();

    if (existingSave) {
      return NextResponse.json(
        { error: 'Profile already saved' },
        { status: 409 }
      );
    }

    // Save profile
    const saveId = crypto.randomUUID();
    await env.DB.prepare(`
      INSERT INTO saved_profiles (
        id,
        user_id,
        saved_profile_id,
        created_at
      ) VALUES (?, ?, ?, CURRENT_TIMESTAMP)
    `)
      .bind(
        saveId,
        userId,
        profile_id
      )
      .run();

    return NextResponse.json({
      message: 'Profile saved successfully',
      save_id: saveId
    });
  } catch (error) {
    console.error('Save profile error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Delete a saved profile
export async function DELETE(request: NextRequest, { env }: { env: Env }) {
  try {
    // Verify authentication
    const authResult = await verifyAuth(request);
    if (!authResult.success) {
      return NextResponse.json(
        { error: authResult.error },
        { status: 401 }
      );
    }

    const { userId } = authResult;
    const { searchParams } = new URL(request.url);
    
    // Get the profile ID to unsave
    const profileId = searchParams.get('profile_id');
    if (!profileId) {
      return NextResponse.json(
        { error: 'Profile ID is required' },
        { status: 400 }
      );
    }

    // Delete saved profile
    await env.DB.prepare(`
      DELETE FROM saved_profiles
      WHERE user_id = ? AND saved_profile_id = ?
    `)
      .bind(userId, profileId)
      .run();

    return NextResponse.json({
      message: 'Profile unsaved successfully'
    });
  } catch (error) {
    console.error('Unsave profile error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
