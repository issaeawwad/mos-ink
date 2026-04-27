-- Appointments table
CREATE TABLE IF NOT EXISTS appointments (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  date date,
  service_type text,
  message text,
  created_at timestamptz DEFAULT now()
);

-- Analytics table
CREATE TABLE IF NOT EXISTS analytics (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  page_visited text NOT NULL,
  traffic_source text,
  device_type text,
  created_at timestamptz DEFAULT now()
);

-- Row Level Security
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (booking form + page tracking)
CREATE POLICY "allow_insert_appointments"
  ON appointments FOR INSERT
  WITH CHECK (true);

CREATE POLICY "allow_insert_analytics"
  ON analytics FOR INSERT
  WITH CHECK (true);
