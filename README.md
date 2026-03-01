# Laxmidhar College Connect

This is a NextJS application for Laxmidhar Polytechnic College, built with React, Tailwind CSS, and Firebase.

## 🚀 Free Deployment Guide (Vercel)

Since this app uses Next.js server features (Server Actions and AI), traditional static hosting won't work. **Vercel** offers a completely free tier for individual/hobby projects that supports these features.

### 1. Deploy for $0
1. Create a free account at [Vercel.com](https://vercel.com).
2. Push your code to a **GitHub** repository.
3. In Vercel, click "New Project" and import your GitHub repo.
4. **Environment Variables:** You MUST add the following keys in the Vercel dashboard under "Settings" > "Environment Variables":
   - `GOOGLE_GENAI_API_KEY`: Your Gemini API Key from Google AI Studio.
   - `RESEND_API_KEY`: Your API Key from Resend.com (for contact emails).
   - Your Firebase config keys (if manually configuring).
5. Click **Deploy**. Vercel will give you a free `your-project.vercel.app` URL.

## 📥 How to Get Your Code
Since this is a full-stack Next.js project and not a single HTML file, you need the entire folder structure to run it locally.
- **Option 1:** Use the "Export" or "Download" feature in your current editor's file menu to get a ZIP of the source.
- **Option 2:** Connect this workspace to a GitHub repository to sync your changes and clone them anywhere.

## 🛠 Local Development
To run the project on your own computer:
1. Extract the downloaded ZIP.
2. Open your terminal in that folder.
3. Run `npm install` to install dependencies.
4. Create a `.env.local` file with your `GOOGLE_GENAI_API_KEY`.
5. Run `npm run dev` to start the local server at `http://localhost:3000`.

## Features
- **AI FAQ Assistant:** Integrated Genkit/Gemini AI for student inquiries.
- **Academic Portals:** Dedicated pages for Departments, Admissions, and Mandatory Disclosures.
- **Administrative Desks:** Messages from the Chairman, Director, and HODs.
