-- Supabase SQL Schema for Form Submissions

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Contact Form Submissions Table
CREATE TABLE contact_submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    child_age VARCHAR(50),
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'new',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
    ip_address INET,
    user_agent TEXT
);

-- Visit Booking Submissions Table
CREATE TABLE visit_bookings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    child_name VARCHAR(100),
    child_age VARCHAR(50) NOT NULL,
    current_school VARCHAR(255),
    preferred_date DATE NOT NULL,
    preferred_time VARCHAR(50) NOT NULL,
    adults_attending INTEGER NOT NULL,
    special_requirements TEXT,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
    ip_address INET,
    user_agent TEXT
);

-- Create indexes for performance
CREATE INDEX idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX idx_contact_submissions_status ON contact_submissions(status);

CREATE INDEX idx_visit_bookings_email ON visit_bookings(email);
CREATE INDEX idx_visit_bookings_preferred_date ON visit_bookings(preferred_date);
CREATE INDEX idx_visit_bookings_created_at ON visit_bookings(created_at DESC);
CREATE INDEX idx_visit_bookings_status ON visit_bookings(status);

-- Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE visit_bookings ENABLE ROW LEVEL SECURITY;

-- Policy: Allow insert for authenticated API requests only
CREATE POLICY "Allow insert for service role" ON contact_submissions
    FOR INSERT
    TO service_role
    WITH CHECK (true);

CREATE POLICY "Allow insert for service role" ON visit_bookings
    FOR INSERT
    TO service_role
    WITH CHECK (true);

-- Policy: Allow read for service role only (admin access)
CREATE POLICY "Allow read for service role" ON contact_submissions
    FOR SELECT
    TO service_role
    USING (true);

CREATE POLICY "Allow read for service role" ON visit_bookings
    FOR SELECT
    TO service_role
    USING (true);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc', NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers to auto-update updated_at
CREATE TRIGGER update_contact_submissions_updated_at BEFORE UPDATE ON contact_submissions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_visit_bookings_updated_at BEFORE UPDATE ON visit_bookings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
