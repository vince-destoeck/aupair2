import { NextRequest, NextResponse } from 'next/server';
import { D1Database } from '@cloudflare/workers-types';
import { verifyAuth } from '@/lib/auth';

interface Env {
  DB: D1Database;
}

// Get messages for a conversation between two users
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

    const { userId } = authResult;
    const { searchParams } = new URL(request.url);
    
    // Get the other user's ID
    const otherUserId = searchParams.get('user_id');
    if (!otherUserId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    // Get messages between the two users
    const query = `
      SELECT * FROM messages
      WHERE (sender_id = ? AND recipient_id = ?)
      OR (sender_id = ? AND recipient_id = ?)
      ORDER BY created_at ASC
    `;

    const messages = await env.DB.prepare(query)
      .bind(userId, otherUserId, otherUserId, userId)
      .all();

    // Mark messages as read
    await env.DB.prepare(`
      UPDATE messages
      SET read = true
      WHERE recipient_id = ? AND sender_id = ? AND read = false
    `)
      .bind(userId, otherUserId)
      .run();

    return NextResponse.json({
      messages: messages.results
    });
  } catch (error) {
    console.error('Get messages error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Send a new message
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
    const { recipient_id, content } = await request.json();

    // Validate input
    if (!recipient_id || !content) {
      return NextResponse.json(
        { error: 'Recipient ID and content are required' },
        { status: 400 }
      );
    }

    // Check if recipient exists
    const recipient = await env.DB.prepare(
      'SELECT id FROM users WHERE id = ?'
    )
      .bind(recipient_id)
      .first();

    if (!recipient) {
      return NextResponse.json(
        { error: 'Recipient not found' },
        { status: 404 }
      );
    }

    // Create message
    const messageId = crypto.randomUUID();
    await env.DB.prepare(`
      INSERT INTO messages (
        id,
        sender_id,
        recipient_id,
        content,
        read,
        created_at
      ) VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
    `)
      .bind(
        messageId,
        userId,
        recipient_id,
        content,
        false
      )
      .run();

    return NextResponse.json({
      message: 'Message sent successfully',
      message_id: messageId
    });
  } catch (error) {
    console.error('Send message error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
