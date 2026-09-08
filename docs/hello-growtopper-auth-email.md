# Growtopper Auth Email Setup

This project uses Supabase Auth for email OTP. To send OTP emails from `hello@growtopper.app`, configure a custom SMTP provider in Supabase.

## Recommended setup

Use:

- Sender email: `hello@growtopper.app`
- Sender name: `Growtopper`
- SMTP provider: Resend

Resend is a good fit because it has an official Supabase SMTP setup flow and straightforward domain verification.

Official docs:

- Supabase custom SMTP: https://supabase.com/docs/guides/auth/auth-smtp
- Supabase email templates: https://supabase.com/docs/guides/auth/auth-email-templates
- Resend + Supabase SMTP: https://resend.com/docs/send-with-supabase-smtp
- Resend domain verification: https://resend.com/docs/dashboard/domains/introduction
- Resend SMTP credentials: https://resend.com/docs/send-with-smtp

## Important note about `hello@growtopper.app`

If you only need to send OTP emails, `hello@growtopper.app` can be used as the From address after your domain is verified.

If you also want to receive replies in a real inbox at `hello@growtopper.app`, you need an inbox provider too, such as:

- Google Workspace
- Zoho Mail
- Microsoft 365

Resend handles sending. A mailbox provider handles receiving.

## Step 1: Verify the domain in Resend

1. Create a Resend account.
2. Add the domain `growtopper.app`.
3. Follow Resend's DNS instructions.
4. Add the SPF and DKIM records shown by Resend.
5. Add a DMARC record as well for better deliverability.

Resend recommends using a subdomain for auth mail, such as `auth.growtopper.app`, but you can still use `hello@growtopper.app` as the sender if your domain setup supports it.

## Step 2: Get the SMTP credentials

From Resend SMTP docs:

- Host: `smtp.resend.com`
- Port: `465`
- Username: `resend`
- Password: your Resend API key

## Step 3: Configure Supabase SMTP

In your Supabase project:

1. Open `Authentication`
2. Open `Email`
3. Open `SMTP Settings`
4. Enable custom SMTP
5. Set:

- Sender email: `hello@growtopper.app`
- Sender name: `Growtopper`
- Host: `smtp.resend.com`
- Port: `465`
- Username: `resend`
- Password: your Resend API key

Save the settings.

## Step 4: Switch Supabase email to OTP mode

Open Supabase:

1. `Authentication`
2. `Email Templates`
3. Open the template used for passwordless login / magic link
4. Replace any use of `{{ .ConfirmationURL }}` with `{{ .Token }}`

Use the HTML from `supabase/email-otp-template.html` in this repo.

## Step 5: Test

1. Refresh the app
2. Start a new signup
3. Enter a new mobile number
4. Complete the student details
5. Use an email you can access
6. Confirm the OTP email arrives from `hello@growtopper.app`

## DNS checklist

You should end up with:

- SPF for the sending provider
- DKIM records from the sending provider
- DMARC record for the domain

If mail still lands in spam, DNS is usually the first place to check.
