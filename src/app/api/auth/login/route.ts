import { NextRequest, NextResponse } from 'next/server';
import { D1Database } from '@cloudflare/workers-types';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

interface Env {
  DB: D1Database;
}

export async function POST(request: NextRequest, { env }: { env: Env }) {
  try {
    const { email, password } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Find user by email
    const user = await env.DB.prepare(
      'SELECT * FROM users WHERE email = ?'
    )
      .bind(email)
      .first();

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email, userType: user.user_type },
      process.env.JWT_SECRET || 'default_secret',
      { expiresIn: '7d' }
    );

    return NextResponse.json({
      message: 'Login successful',
      userId: user.id,
      userType: user.user_type,
      token
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
