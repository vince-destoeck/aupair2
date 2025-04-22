import { NextRequest, NextResponse } from 'next/server';
import { D1Database } from '@cloudflare/workers-types';
import { v4 as uuidv4 } from 'uuid';
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

    // Check if user exists
    const existingUser = await env.DB.prepare(
      'SELECT * FROM users WHERE email = ?'
    )
      .bind(email)
      .first();

    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      );
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Generate user ID
    const userId = uuidv4();

    // Insert user into database
    await env.DB.prepare(
      'INSERT INTO users (id, email, password_hash, name, user_type, created_at, updated_at) VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)'
    )
      .bind(userId, email, hashedPassword, '', 'pending', )
      .run();

    // Generate JWT token
    const token = jwt.sign(
      { userId, email, userType: 'pending' },
      process.env.JWT_SECRET || 'default_secret',
      { expiresIn: '7d' }
    );

    return NextResponse.json(
      { 
        message: 'User registered successfully',
        userId,
        token
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
