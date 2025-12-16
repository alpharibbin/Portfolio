# Contact Form Setup

## Email Configuration

The contact form is configured to send emails to your Gmail account using App Password authentication.

### Environment Variables

Create a `.env.local` file in the root directory with:

```env
YOUR_EMAIL=santhoshsanapathi091104@gmail.com
YOUR_APP_PASSWORD=qmwv araq vvrs frlz
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

## Security Features

### 1. Rate Limiting
- **1 message per day per IP address**
- Prevents spam and abuse
- Automatic cleanup of old entries

### 2. reCAPTCHA v3
- Invisible bot protection
- Score-based verification (threshold: 0.5)
- Get keys from: https://www.google.com/recaptcha/admin

### 3. Input Validation
- Server-side validation using Zod
- XSS protection (HTML escaping)
- Length limits on all fields
- Suspicious pattern detection

### 4. Security Headers
- IP address detection from multiple headers
- Support for Cloudflare, proxies, etc.

## Setup reCAPTCHA

1. Go to https://www.google.com/recaptcha/admin
2. Create a new site with reCAPTCHA v3
3. Add your domain
4. Copy the Site Key and Secret Key
5. Add them to `.env.local`

## Testing

For development, if reCAPTCHA keys are not set, the system will:
- Skip reCAPTCHA verification (with warning)
- Still enforce rate limiting
- Still validate input

## Production Deployment

1. Set all environment variables in your hosting platform (Vercel, etc.)
2. Ensure `.env.local` is in `.gitignore` (already configured)
3. Test the contact form after deployment

## Rate Limit Behavior

- Users can send **1 message per 24 hours** from the same IP
- Rate limit resets automatically after 24 hours
- Error message shows when rate limit is exceeded

## Email Format

Emails sent to you will include:
- Name, Email, Subject, Message
- IP address of sender
- Timestamp
- Reply-to set to sender's email

