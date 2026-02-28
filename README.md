# Laxmidhar College Connect

This is a NextJS application for Laxmidhar Polytechnic College, built with React, Tailwind CSS, and Firebase.

## 🚀 Free Deployment Guide (Vercel)

Since this app uses Next.js server features (Server Actions and AI), traditional static hosting won't work. **Vercel** offers a completely free tier for individual/hobby projects that supports these features.

### 1. Deploy for $0
1. Create a free account at [Vercel.com](https://vercel.com).
2. Push your code to a **GitHub** repository.
3. In Vercel, click "New Project" and import your GitHub repo.
4. **Environment Variables:** You must add your Firebase config keys and Genkit/Gemini API keys in the Vercel dashboard under "Settings" > "Environment Variables" so the AI works.
5. Click **Deploy**. Vercel will give you a free `your-project.vercel.app` URL.

### 2. Connect Your Custom Domain (Free)
1. In your Vercel project, go to **Settings** > **Domains**.
2. Enter your custom domain (e.g., `www.yourcollege.com`).
3. Vercel will provide DNS records (A record and CNAME). Add these to your domain registrar (GoDaddy, Namecheap, etc.).
4. **SSL is Free:** Vercel automatically generates and renews a free SSL certificate (HTTPS) for your domain.

## Why Vercel?
- **No Credit Card Required:** The Hobby plan does not require a payment method to start.
- **Serverless Functions:** It runs your Genkit AI flows and login logic for free within their fair-use limits.
- **Global CDN:** Your college website will load fast across India.

## Alternative: Firebase App Hosting
If you prefer to stay within the Firebase ecosystem, you can use **Firebase App Hosting**. Note that this requires switching to the **Blaze (Pay-as-you-go) Plan**. While it has a free tier, it requires a credit card for identity verification. For a 100% "no card" experience, use Vercel.

## Features
- **AI FAQ Assistant:** Integrated Genkit/Gemini AI for student inquiries.
- **Academic Portals:** Dedicated pages for Departments, Admissions, and Mandatory Disclosures.
- **Administrative Desks:** Messages from the Chairman, Director, and HODs.

## Development
To run the project locally:
```bash
npm install
npm run dev
```
