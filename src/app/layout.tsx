import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { FirebaseClientProvider } from '@/firebase/client-provider';

// Using the local favicon.png for branding consistency
const logoUrl = "/favicon.png";

export const metadata: Metadata = {
  title: 'Laxmidhar Polytechnic College | Premier Engineering Diploma Institute',
  description: 'Approved by AICTE & Affiliated to BTER Jodhpur. Leading polytechnic college in Alwar, Rajasthan.',
  icons: {
    icon: [
      { url: logoUrl, sizes: '32x32', type: 'image/png' },
      { url: logoUrl, sizes: '16x16', type: 'image/png' },
      { url: logoUrl, sizes: 'any' },
    ],
    shortcut: logoUrl,
    apple: logoUrl,
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        {/* Favicon links for standard and apple touch */}
        <link rel="icon" href={logoUrl} type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href={logoUrl} />
      </head>
      <body className="font-body antialiased bg-background text-foreground min-h-screen flex flex-col">
        <FirebaseClientProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
