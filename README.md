# Laxmidhar College Connect

This is a NextJS application for Laxmidhar Polytechnic College, built with React, Tailwind CSS, and Firebase.

## 🚀 Getting the AI Assistant Working (Production)

Your AI FAQ Assistant requires a Google Gemini API Key to work on the live website.

### 1. Get your API Key
1. Go to [Google AI Studio](https://aistudio.google.com/).
2. Click **"Get API key"** on the left.
3. Click **"Create API key in new project"** and copy the key.

### 2. Set Environment Variables
You must add this key to your hosting provider's dashboard:
- **Variable Name:** `GOOGLE_GENAI_API_KEY`
- **Value:** [Your Copied Key]

---

## 🚀 Free Deployment Guide (Vercel)

Since this app uses Next.js server features (Server Actions and AI), traditional static hosting won't work. **Vercel** offers a completely free tier for individual/hobby projects that supports these features.

### Deployment Steps:
1. Create a free account at [Vercel.com](https://vercel.com).
2. Push your code to a **GitHub** repository.
3. In Vercel, click "New Project" and import your GitHub repo.
4. **Environment Variables:** Add `GOOGLE_GENAI_API_KEY` in the Vercel dashboard under "Settings" > "Environment Variables".
5. Click **Deploy**.

## 🛠 Local Development
To run the project on your own computer:
1. Download the source code ZIP.
2. Open your terminal in that folder.
3. Run `npm install` to install dependencies.
4. Create a `.env` file and add: `GOOGLE_GENAI_API_KEY=your_key_here`
5. Run `npm run dev` to start the local server at `http://localhost:9002`.

## Features
- **AI FAQ Assistant:** Integrated Genkit/Gemini AI for student inquiries.
- **Academic Portals:** Dedicated pages for Departments, Admissions, and Mandatory Disclosures.
- **Administrative Desks:** Messages from the Chairman, Director, and HODs.
