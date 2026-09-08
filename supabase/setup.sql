-- Growtopper: Invite Applications Table
-- Run this in Supabase → SQL Editor

create table if not exists public.applications (
  id              uuid default gen_random_uuid() primary key,
  created_at      timestamptz default now() not null,

  -- Contact
  phone           text not null,
  email           text not null,

  -- Student details
  student_name    text not null,
  student_class   text not null,
  board           text not null,

  -- Family details
  school          text not null,
  parent_name     text not null,
  city            text not null,

  -- Call scheduling
  call_date       text not null,
  call_time       text not null,

  -- Meta
  status          text default 'new' not null  -- new | contacted | enrolled | rejected
);

-- Enable Row Level Security
alter table public.applications enable row level security;

-- Allow anyone to INSERT (form submissions from website)
create policy "Allow public insert"
  on public.applications
  for insert
  to public
  with check (true);

-- Only authenticated users (you) can SELECT/UPDATE/DELETE
create policy "Allow authenticated read"
  on public.applications
  for select
  to authenticated
  using (true);

create policy "Allow authenticated update"
  on public.applications
  for update
  to authenticated
  using (true);
