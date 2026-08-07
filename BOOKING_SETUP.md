# Booking System Setup

The booking form is now integrated with **Formspree**, a free email service that requires no backend setup.

## Current Configuration

- **Service**: Formspree
- **Form ID**: `xyzgwqvd` (temporary demo ID)
- **Endpoint**: `https://formspree.io/f/xyzgwqvd`

## ⚠️ IMPORTANT: Update the Form ID

The current form ID is a demo placeholder. To receive actual booking requests at your email:

### Step 1: Create a Formspree Account

1. Go to [formspree.io](https://formspree.io)
2. Sign up with your email address
3. Verify your email

### Step 2: Create a New Form

1. In Formspree dashboard, click "Create a new form"
2. Name it: `Clover Junk Removal Bookings`
3. Set the email to: `your-email@example.com` (your actual business email)
4. Copy the **Form ID** (looks like: `xyzabc123`)

### Step 3: Update the Code

Replace the Form ID in `client/src/components/Contact.tsx`:

**Line 44:**
```typescript
// OLD (demo):
const response = await fetch("https://formspree.io/f/xyzgwqvd", {

// NEW (your form):
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
```

Replace `YOUR_FORM_ID` with the ID from Step 2.

### Step 4: Test the Form

1. Start the dev server: `pnpm run dev`
2. Fill out the booking form
3. Submit
4. Check your email for the submission

## What Happens When Someone Books

1. **Customer fills form** → Name, phone, email, service type, message
2. **Form submits** → Data sent to Formspree
3. **Email received** → You get an email with all booking details
4. **Customer sees confirmation** → "Request received! We'll call you within the hour."

## Email Format

You'll receive emails like:

```
From: contact@formspree.io
Subject: New submission from Clover Junk Removal Bookings

Name: John Smith
Phone: (803) 555-1234
Email: john@example.com
Service: Furniture Removal
Message: I have a couch and dining table to remove...
```

## Alternative Services

If you prefer a different service:

### Option 1: EmailJS
- Simpler setup, sends directly to your email
- Free tier: 200 emails/month
- [emailjs.com](https://www.emailjs.com)

### Option 2: Backend Integration
- Upgrade to `web-db-user` feature for full backend control
- Store submissions in database
- Send custom emails

### Option 3: Zapier
- Connect form to CRM, Slack, Google Sheets, etc.
- [zapier.com](https://zapier.com)

## Troubleshooting

**Form not sending?**
- Check that Form ID is correct
- Verify email is confirmed in Formspree
- Check browser console for errors

**Not receiving emails?**
- Check spam/junk folder
- Verify email in Formspree settings
- Test with Formspree's test form

**Want to customize emails?**
- Formspree Pro allows custom email templates
- Or use alternative services listed above

---

**Setup takes ~5 minutes. Do it now so you start receiving bookings!**
