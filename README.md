# Laxmidhar College Connect

This is a NextJS application for Laxmidhar Polytechnic College, built with React, Tailwind CSS, and Firebase.

## How to Publish with a Custom Domain

To host this website on your own domain (e.g., `www.yourcollege.com`) for free using Firebase:

### 1. Own a Domain
You must first purchase a domain name from a registrar like Namecheap, Google Domains, or GoDaddy. While the hosting and SSL are free on Firebase, the domain name registration usually has an annual fee.

### 2. Connect to Firebase App Hosting
Since this project uses Next.js and has an `apphosting.yaml` file, it is optimized for **Firebase App Hosting**.
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Select your project: `studio-1031981759-820a3`.
3. In the left-hand menu, go to **Build** > **App Hosting**.
4. Click on your active backend.
5. Navigate to the **Settings** or **Domains** tab.
6. Click **Add custom domain**.

### 3. DNS Configuration
1. Enter your domain name (e.g., `laxmidharpolytechnic.com`).
2. Firebase will generate **DNS records** (Value types: `A`, `AAAA`, or `CNAME`).
3. Log in to your domain registrar's dashboard.
4. Locate the **DNS Management** section and add the records provided by Firebase.

### 4. Free SSL Certificate
Once you've updated your DNS records:
* Firebase will automatically verify the ownership.
* Firebase will provision a **free SSL certificate** (HTTPS) for your domain.
* It may take up to 24-48 hours for global DNS propagation, but it often happens much faster.

## Development

To run the project locally:
```bash
npm run dev
```

The AI-powered FAQ tool is defined in `src/ai/flows/ai-powered-faq-tool-flow.ts`.