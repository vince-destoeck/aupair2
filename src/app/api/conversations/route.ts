import { NextRequest, NextResponse } from 'next/server';
import { D1Database } from '@cloudflare/workers-types';
import { verifyAuth } from '@/lib/auth';

interface Env {
  DB: D1Database;
}

// Get conversations for the current user
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

    // Get all conversations (unique users the current user has exchanged messages with)
    const query = `
      WITH conversation_users AS (
        SELECT DISTINCT 
          CASE 
            WHEN sender_id = ? THEN recipient_id 
            ELSE sender_id 
          END as other_user_id
        FROM messages
        WHERE sender_id = ? OR recipient_id = ?
      )
      SELECT 
        u.id,
        u.name,
        u.email,
        u.user_type,
        (
          SELECT COUNT(*) 
          FROM messages 
          WHERE sender_id = u.id AND recipient_id = ? AND read = false
        ) as unread_count,
        (
          SELECT created_at
          FROM messages
          WHERE (sender_id = ? AND recipient_id = u.id) OR (sender_id = u.id AND recipient_id = ?)
          ORDER BY created_at DESC
          LIMIT 1
        ) as last_message_time,
        (
          SELECT content
          FROM messages
          WHERE (sender_id = ? AND recipient_id = u.id) OR (sender_id = u.id AND recipient_id = ?)
          ORDER BY created_at DESC
          LIMIT 1
        ) as last_message
      FROM users u
      JOIN conversation_users cu ON u.id = cu.other_user_id
      ORDER BY last_message_time DESC
    `;

    const conversations = await env.DB.prepare(query)
      .bind(userId, userId, userId, userId, userId, userId, userId, userId)
      .all();

    return NextResponse.json({
      conversations: conversations.results
    });
  } catch (error) {
    console.error('Get conversations error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
