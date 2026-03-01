import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { AIChatPopup } from '@/components/ai-chat-popup';

// The official LPC logo URL provided by the user
const logoUrl = "https://img.sanishtech.com/u/adb9427566dfc9ee201f669961f327ba.png";

export const metadata: Metadata = {
  title: 'Laxmidhar Polytechnic College | Premier Engineering Diploma Institute',
  description: 'Approved by AICTE & Affiliated to BTER Jodhpur. Leading polytechnic college in Alwar, Rajasthan.',
  icons: {
    icon: [
      { url: `${logoUrl}?v=10`, sizes: '32x32', type: 'image/png' },
      { url: `${logoUrl}?v=10`, sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: `${logoUrl}?v=10`, sizes: '180x180', type: 'image/png' },
    ],
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
        {/* Aggressive link tags to force browser tab logo update */}
        <link rel="icon" href={`${logoUrl}?v=10`} type="image/png" />
        <link rel="shortcut icon" href={`${logoUrl}?v=10`} type="image/png" />
        <link rel="apple-touch-icon" href={`${logoUrl}?v=10`} />
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
