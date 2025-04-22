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
    const { searchParams } = new URL(request.url);
    
    // Parse search parameters
    const location = searchParams.get('location');
    const childrenAges = searchParams.get('children_ages');
    const accommodationType = searchParams.get('accommodation_type');
    const duration = searchParams.get('duration');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = (page - 1) * limit;

    // Build query conditions
    let conditions = [];
    let params = [];

    if (location) {
      conditions.push("p.location LIKE ?");
      params.push(`%${location}%`);
    }

    if (childrenAges) {
      conditions.push("p.family_members LIKE ?");
      params.push(`%${childrenAges}%`);
    }

    if (accommodationType) {
      conditions.push("p.accommodation_details LIKE ?");
      params.push(`%${accommodationType}%`);
    }

    // Build the WHERE clause
    const whereClause = conditions.length > 0 
      ? `WHERE ${conditions.join(' AND ')}` 
      : '';

    // Get total count for pagination
    const countQuery = `
      SELECT COUNT(*) as total
      FROM family_profiles p
      JOIN users u ON p.user_id = u.id
      ${whereClause}
    `;
    
    const countResult = await env.DB.prepare(countQuery)
      .bind(...params)
      .first();
    
    const total = countResult?.total || 0;

    // Get family profiles with pagination
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
        p.verified,
        p.created_at,
        p.updated_at
      FROM family_profiles p
      JOIN users u ON p.user_id = u.id
      ${whereClause}
      ORDER BY p.created_at DESC
      LIMIT ? OFFSET ?
    `;

    const profiles = await env.DB.prepare(query)
      .bind(...params, limit, offset)
      .all();

    return NextResponse.json({
      profiles: profiles.results,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Search families error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
