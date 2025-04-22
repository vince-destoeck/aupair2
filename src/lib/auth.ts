import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

interface AuthResult {
  success: boolean;
  userId?: string;
  userType?: string;
  error?: string;
}

export async function verifyAuth(request: NextRequest): Promise<AuthResult> {
  try {
    // Get token from Authorization header
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return { 
        success: false, 
        error: 'Authorization header missing or invalid' 
      };
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      return { 
        success: false, 
        error: 'Token missing' 
      };
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default_secret');
    if (!decoded || typeof decoded !== 'object') {
      return { 
        success: false, 
        error: 'Invalid token' 
      };
    }

    // Extract user info from token
    const userId = decoded.userId;
    const userType = decoded.userType;

    if (!userId) {
      return { 
        success: false, 
        error: 'Invalid token payload' 
      };
    }

    return {
      success: true,
      userId,
      userType
    };
  } catch (error) {
    console.error('Auth verification error:', error);
    return { 
      success: false, 
      error: 'Authentication failed' 
    };
  }
}
