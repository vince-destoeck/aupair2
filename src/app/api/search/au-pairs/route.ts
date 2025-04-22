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
    const nationality = searchParams.get('nationality');
    const language = searchParams.get('language');
    const experience = searchParams.get('experience');
    const ageRange = searchParams.get('age_range');
    const availability = searchParams.get('availability');
    const skill = searchParams.get('skill');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = (page - 1) * limit;

    // Build query conditions
    let conditions = [];
    let params = [];

    if (nationality) {
      conditions.push("p.nationality LIKE ?");
      params.push(`%${nationality}%`);
    }

    if (language) {
      conditions.push("p.languages LIKE ?");
      params.push(`%${language}%`);
    }

    if (experience) {
      // Parse experience range (e.g., "1-2", "3+")
      if (experience.includes('-')) {
        const [min, max] = experience.split('-').map(Number);
        conditions.push("LENGTH(p.experience) BETWEEN ? AND ?");
        params.push(min, max);
      } else if (experience.includes('+')) {
        const min = parseInt(experience);
        conditions.push("LENGTH(p.experience) >= ?");
        params.push(min);
      }
    }

    if (skill) {
      conditions.push("p.skills LIKE ?");
      params.push(`%${skill}%`);
    }

    // Build the WHERE clause
    const whereClause = conditions.length > 0 
      ? `WHERE ${conditions.join(' AND ')}` 
      : '';

    // Get total count for pagination
    const countQuery = `
      SELECT COUNT(*) as total
      FROM au_pair_profiles p
      JOIN users u ON p.user_id = u.id
      ${whereClause}
    `;
    
    const countResult = await env.DB.prepare(countQuery)
      .bind(...params)
      .first();
    
    const total = countResult?.total || 0;

    // Get au pair profiles with pagination
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
        p.verified,
        p.created_at,
        p.updated_at
      FROM au_pair_profiles p
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
    console.error('Search au pairs error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
