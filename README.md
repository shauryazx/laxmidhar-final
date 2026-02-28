# Laxmidhar College Connect

This is a NextJS application for Laxmidhar Polytechnic College, built with React, Tailwind CSS, and Firebase.

## Deployment & Pricing

To host this website on your own domain, it is optimized for **Firebase App Hosting**.

### 1. Pricing Plan Requirement
Because this is a full-stack Next.js application (using Server Actions and AI features), it requires compute resources that are part of the **Blaze (Pay-as-you-go) plan**. 
* **Note:** While the Blaze plan requires a credit card for identity verification, it includes a generous **Free Tier**. Most small-to-medium college websites stay within these free limits and incur $0 or very minimal monthly charges.

### 2. How to Publish with a Custom Domain
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Select your project: `studio-1031981759-820a3`.
3. If you see an "Upgrade" prompt, switch to the **Blaze Plan**.
4. In the left-hand menu, go to **Build** > **App Hosting**.
5. Connect your GitHub repository (if applicable) or follow the setup wizard.
6. Once deployed, navigate to the **Settings** or **Domains** tab.
7. Click **Add custom domain** and enter your domain (e.g., `www.yourcollege.com`).
8. Firebase will provide DNS records (A/AAAA/CNAME). Add these to your domain registrar (GoDaddy, Namecheap, etc.).

### 3. Free SSL Certificate
Once your DNS records are verified:
* Firebase provisions a **free SSL certificate** (HTTPS) automatically.
* It may take 24-48 hours for global DNS propagation.

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

The AI-powered FAQ tool logic is defined in `src/ai/flows/ai-powered-faq-tool-flow.ts`.
