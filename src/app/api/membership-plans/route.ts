import { NextRequest, NextResponse } from 'next/server';
import { D1Database } from '@cloudflare/workers-types';

interface Env {
  DB: D1Database;
}

export async function GET(request: NextRequest, { env }: { env: Env }) {
  try {
    // Get membership plans
    const plans = await env.DB.prepare(
      'SELECT * FROM membership_plans ORDER BY price ASC'
    ).all();

    return NextResponse.json({
      plans: plans.results
    });
  } catch (error) {
    console.error('Get membership plans error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
