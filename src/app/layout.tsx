import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { AIChatPopup } from '@/components/ai-chat-popup';

// Using a version query parameter to force browser favicon refresh
const logoUrl = "https://img.sanishtech.com/u/adb9427566dfc9ee201f669961f327ba.png?v=2";

export const metadata: Metadata = {
  title: 'Laxmidhar Polytechnic College | Premier Engineering Diploma Institute',
  description: 'Welcome to Laxmidhar Polytechnic College, providing excellence in technical education with Diploma programs in Civil, Mechanical, and Electrical Engineering.',
  icons: {
    icon: [
      { url: logoUrl, type: 'image/png' },
    ],
    shortcut: [logoUrl],
    apple: [logoUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        {/* Explicitly setting the favicon in the head to override defaults */}
        <link rel="icon" href={logoUrl} type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href={logoUrl} />
      </head>
      <body className="font-body antialiased bg-background text-foreground min-h-screen flex flex-col">
        <FirebaseClientProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <AIChatPopup />
          <Footer />
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
