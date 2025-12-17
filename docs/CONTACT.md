# Contact Form Setup

The contact form is configured to send emails using Gmail App Password authentication and includes security features like rate limiting and reCAPTCHA protection.

## Email Configuration

### Environment Variables

Create a `.env.local` file in the root directory with:

```env
YOUR_EMAIL=your-email@gmail.com
YOUR_APP_PASSWORD=your-app-password-here
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

### Setting Up Gmail App Password

1. Enable 2-Step Verification on your Google Account
2. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Select "Mail" and "Other (Custom name)"
4. Enter "Portfolio Contact Form" as the name
5. Click "Generate"
6. Copy the 16-character password (spaces don't matter)
7. Add it to your `.env.local` file as `YOUR_APP_PASSWORD`

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
3. Add your domain (localhost for development, your domain for production)
4. Copy the Site Key and Secret Key
5. Add them to `.env.local`:
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` - Site Key
   - `RECAPTCHA_SECRET_KEY` - Secret Key

## Testing

For development, if reCAPTCHA keys are not set, the system will:
- Skip reCAPTCHA verification (with warning in console)
- Still enforce rate limiting
- Still validate input

**Note**: Make sure to set up reCAPTCHA for production deployment.

## Production Deployment

1. Set all environment variables in your hosting platform (Vercel, etc.)
2. Ensure `.env.local` is in `.gitignore` (already configured)
3. Test the contact form after deployment
4. Monitor rate limiting and reCAPTCHA scores

## Rate Limit Behavior

- Users can send **1 message per 24 hours** from the same IP
- Rate limit resets automatically after 24 hours
- Error message shows when rate limit is exceeded
- IP addresses are stored temporarily for rate limiting

## Email Format

Emails sent to you will include:
- Name, Email, Subject, Message
- IP address of sender
- Timestamp
- Reply-to set to sender's email (you can reply directly)

## Troubleshooting

### Emails Not Sending

1. Verify `YOUR_EMAIL` and `YOUR_APP_PASSWORD` are correct
2. Check that 2-Step Verification is enabled
3. Ensure App Password was generated correctly
4. Check server logs for error messages

### reCAPTCHA Not Working

1. Verify both Site Key and Secret Key are set
2. Check that domain is added in reCAPTCHA admin panel
3. For localhost, use `localhost` or `127.0.0.1` in reCAPTCHA settings
4. Check browser console for reCAPTCHA errors

### Rate Limit Issues

1. Rate limit is per IP address
2. If testing, use different IPs or wait 24 hours
3. Check server logs for rate limit information

