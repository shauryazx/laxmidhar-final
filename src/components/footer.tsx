'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Facebook, Twitter, Instagram, Linkedin, Smartphone, MapPin } from "lucide-react";

// Using the local favicon.png for branding consistency
const logoUrl = "/favicon.png";

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* LPC Branding Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <Image
                  src={logoUrl}
                  alt="LPC Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-3xl font-black text-white uppercase">LPC</span>
                <span className="text-[10px] font-bold text-accent uppercase tracking-tighter">Laxmidhar Polytechnic</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-background/60">
              A premier institution dedicated to technical proficiency and vocational innovation in Alwar. 
              Preparing future engineering professionals with industrial excellence.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-accent transition-colors"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Instagram className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Linkedin className="h-5 w-5" /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Portals</h3>
            <ul className="space-y-3 text-sm text-background/70">
              <li><Link href="/about" className="hover:text-accent transition-colors">College Profile</Link></li>
              <li><Link href="/programs" className="hover:text-accent transition-colors">Academic Streams</Link></li>
              <li><Link href="/admissions" className="hover:text-accent transition-colors">Enrollment Center</Link></li>
              <li><Link href="/disclosure" className="hover:text-accent transition-colors">Mandatory Disclosures</Link></li>
              <li><Link href="/faq" className="hover:text-accent transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Academic Desks */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Leadership</h3>
            <ul className="space-y-3 text-sm text-background/70">
              <li><Link href="/desk/chairman" className="hover:text-accent transition-colors">Chairman's Perspective</Link></li>
              <li><Link href="/desk/hod" className="hover:text-accent transition-colors">Director's Message</Link></li>
              <li><Link href="/desk/hod" className="hover:text-accent transition-colors">Principal's Desk</Link></li>
              <li><Link href="/desk/hod" className="hover:text-accent transition-colors">Heads of Departments</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Campus Reach</h3>
            <ul className="space-y-4 text-sm text-background/70">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span>IN-3, M.I.A., RIICO (Near Tarni Cancer Hospital), Alwar-301030 (Raj.)</span>
              </li>
              <li className="flex items-center gap-3">
                <Smartphone className="h-5 w-5 text-accent shrink-0" />
                <span>8824351992, 9799707879</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span>laxmindharpoly@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-background/10 text-center text-[10px] text-background/40 uppercase tracking-[0.2em]">
          <p>&copy; {year || '...'} Laxmidhar Polytechnic College. AICTE Approved & BTER Affiliated. Reg. No. 13/alwar/1999.</p>
        </div>
      </div>
    </footer>
  );
}
