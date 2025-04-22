-- Migration number: 0001 	 2025-04-21
-- Au Pair Agency Database Schema

-- Drop existing tables if they exist
DROP TABLE IF EXISTS testimonials;
DROP TABLE IF EXISTS blog_posts;
DROP TABLE IF EXISTS saved_profiles;
DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS memberships;
DROP TABLE IF EXISTS au_pair_profiles;
DROP TABLE IF EXISTS family_profiles;
DROP TABLE IF EXISTS users;

-- Users table
CREATE TABLE users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  user_type TEXT NOT NULL, -- 'family', 'au_pair', 'admin'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Family profiles
CREATE TABLE family_profiles (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id),
  location TEXT NOT NULL,
  family_members TEXT NOT NULL, -- JSON array
  accommodation_details TEXT NOT NULL,
  childcare_needs TEXT NOT NULL,
  schedule_requirements TEXT NOT NULL,
  preferences TEXT, -- JSON object
  photos TEXT, -- JSON array of URLs
  verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Au pair profiles
CREATE TABLE au_pair_profiles (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id),
  nationality TEXT NOT NULL,
  languages TEXT NOT NULL, -- JSON array
  experience TEXT NOT NULL,
  skills TEXT NOT NULL, -- JSON array
  availability_start DATE,
  availability_end DATE,
  preferences TEXT, -- JSON object
  photos TEXT, -- JSON array of URLs
  verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Memberships
CREATE TABLE memberships (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id),
  plan_type TEXT NOT NULL, -- 'silver', 'gold', 'platinum', 'diamond'
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  payment_status TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Messages
CREATE TABLE messages (
  id TEXT PRIMARY KEY,
  sender_id TEXT NOT NULL REFERENCES users(id),
  recipient_id TEXT NOT NULL REFERENCES users(id),
  content TEXT NOT NULL,
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Saved profiles (favorites/shortlists)
CREATE TABLE saved_profiles (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id),
  saved_profile_id TEXT NOT NULL REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Blog posts
CREATE TABLE blog_posts (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  author_id TEXT NOT NULL REFERENCES users(id),
  featured_image TEXT,
  published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Testimonials
CREATE TABLE testimonials (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id),
  content TEXT NOT NULL,
  rating INTEGER,
  approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes
CREATE INDEX idx_family_profiles_user_id ON family_profiles(user_id);
CREATE INDEX idx_au_pair_profiles_user_id ON au_pair_profiles(user_id);
CREATE INDEX idx_memberships_user_id ON memberships(user_id);
CREATE INDEX idx_messages_sender_id ON messages(sender_id);
CREATE INDEX idx_messages_recipient_id ON messages(recipient_id);
CREATE INDEX idx_saved_profiles_user_id ON saved_profiles(user_id);
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_testimonials_approved ON testimonials(approved);
