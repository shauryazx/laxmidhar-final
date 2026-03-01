import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { AIChatPopup } from '@/components/ai-chat-popup';

// The official LPC logo URL with a higher cache-busting version query to force update
const logoUrl = "https://img.sanishtech.com/u/adb9427566dfc9ee201f669961f327ba.png?v=6";

export const metadata: Metadata = {
  title: 'Laxmidhar Polytechnic College | Premier Engineering Diploma Institute',
  icons: {
    icon: '/favicon.png',    // Points to your public folder
    shortcut: '/favicon.png',
    apple: '/favicon.png',
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
        {/* Explicitly defining the icon in the head for better browser compatibility */}
        <link rel="icon" href={logoUrl} type="image/png" />
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
