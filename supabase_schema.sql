-- ============================================================
-- ECO CAMP – Supabase Schema
-- Uruchom ten plik w: Supabase → SQL Editor → New Query
-- ============================================================

-- 1. Produkty
CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  type TEXT NOT NULL DEFAULT 'camper',
  title_pl TEXT,
  title_en TEXT,
  short_pl TEXT,
  short_en TEXT,
  desc_pl TEXT,
  desc_en TEXT,
  price_low NUMERIC,
  price_high NUMERIC,
  specs_pl TEXT[] DEFAULT '{}',
  specs_en TEXT[] DEFAULT '{}',
  image TEXT DEFAULT 'assets/caravan_1.jpg',
  active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0
);

-- 2. Dostępność (zajęte daty)
CREATE TABLE IF NOT EXISTS availability (
  product_id TEXT NOT NULL,
  date_key TEXT NOT NULL,
  status TEXT DEFAULT 'booked',
  PRIMARY KEY (product_id, date_key)
);

-- 3. Rezerwacje (zapytania od klientów)
CREATE TABLE IF NOT EXISTS reservations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  product_id TEXT,
  product_name TEXT,
  name TEXT,
  email TEXT,
  phone TEXT,
  guests INTEGER,
  start_date TEXT,
  end_date TEXT,
  message TEXT,
  status TEXT DEFAULT 'new'
);

-- 4. FAQ
CREATE TABLE IF NOT EXISTS faq (
  id SERIAL PRIMARY KEY,
  question_pl TEXT,
  question_en TEXT,
  answer_pl TEXT,
  answer_en TEXT,
  sort_order INTEGER DEFAULT 0
);

-- 5. Aktualności
CREATE TABLE IF NOT EXISTS news (
  id SERIAL PRIMARY KEY,
  date_pl TEXT,
  date_en TEXT,
  title_pl TEXT,
  title_en TEXT,
  text_pl TEXT,
  text_en TEXT,
  image TEXT DEFAULT 'assets/eu_logotypy.png',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- Row Level Security – pozwól na wszystko dla anon key
-- (security przez PIN po stronie klienta; później można 
--  wzmocnić po wdrożeniu auth Supabase)
-- ============================================================

ALTER TABLE products ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "anon_all" ON products;
CREATE POLICY "anon_all" ON products FOR ALL TO anon USING (true) WITH CHECK (true);

ALTER TABLE availability ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "anon_all" ON availability;
CREATE POLICY "anon_all" ON availability FOR ALL TO anon USING (true) WITH CHECK (true);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "anon_insert" ON reservations;
DROP POLICY IF EXISTS "anon_read_update" ON reservations;
CREATE POLICY "anon_insert" ON reservations FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "anon_read_update" ON reservations FOR SELECT TO anon USING (true);
CREATE POLICY "anon_update" ON reservations FOR UPDATE TO anon USING (true) WITH CHECK (true);
CREATE POLICY "anon_delete" ON reservations FOR DELETE TO anon USING (true);

ALTER TABLE faq ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "anon_all" ON faq;
CREATE POLICY "anon_all" ON faq FOR ALL TO anon USING (true) WITH CHECK (true);

ALTER TABLE news ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "anon_all" ON news;
CREATE POLICY "anon_all" ON news FOR ALL TO anon USING (true) WITH CHECK (true);

-- ============================================================
-- Dane startowe (opcjonalne – możesz dodać przez admin panel)
-- ============================================================

INSERT INTO news (date_pl, date_en, title_pl, title_en, text_pl, text_en, image)
VALUES (
  '03 Lutego 2025', 'February 3, 2025',
  'ECO CAMP realizuje projekt z dofinansowaniem UE',
  'ECO CAMP implements EU-funded project',
  'Firma ECO CAMP Julian Świderski realizuje projekt „Rozwój firmy ECO CAMP", współfinansowany ze środków Unii Europejskiej w ramach programu Fundusze Europejskie dla Warmii i Mazur 2021–2027. Wartość projektu: 799 330,72 zł, dofinansowanie: 647 377,95 zł.',
  'ECO CAMP Julian Świderski is implementing the „Development of ECO CAMP" project, co-financed by the European Union. Project value: PLN 799,330.72, co-financing: PLN 647,377.95.',
  'assets/eu_logotypy.png'
)
ON CONFLICT DO NOTHING;
