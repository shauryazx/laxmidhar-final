
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Laxmidhar College</h3>
            <p className="text-sm leading-relaxed text-background/70 mb-4">
              Providing quality technical education and fostering innovation for over two decades. 
              Our mission is to prepare students for successful engineering careers through practical learning.
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
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link href="/about" className="hover:text-accent transition-colors">About History</Link></li>
              <li><Link href="/programs" className="hover:text-accent transition-colors">Diploma Programs</Link></li>
              <li><Link href="/admissions" className="hover:text-accent transition-colors">Admission Portal</Link></li>
              <li><Link href="/disclosure" className="hover:text-accent transition-colors">AICTE Disclosure</Link></li>
              <li><Link href="/faq" className="hover:text-accent transition-colors">AI Assistant</Link></li>
            </ul>
          </div>

          {/* Academic Desks */}
          <div>
            <h3 className="text-lg font-bold mb-4">Administration</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link href="/desk/chairman" className="hover:text-accent transition-colors">Chairman's Desk</Link></li>
              <li><Link href="/desk/hod" className="hover:text-accent transition-colors">Director's Message</Link></li>
              <li><Link href="/desk/hod" className="hover:text-accent transition-colors">Principal's Insights</Link></li>
              <li><Link href="/desk/hod" className="hover:text-accent transition-colors">HOD Engineering</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm text-background/70">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span>1N-3 MIA RIICO, Near IET College, Mungaska, Alwar-301001, Rajasthan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span>+91 144 1234567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span>info@laxmidharcollege.ac.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-background/10 text-center text-xs text-background/40">
          <p>&copy; {new Date().getFullYear()} Laxmidhar College Connect. All Rights Reserved. AICTE Approved & Affiliated.</p>
        </div>
      </div>
    </footer>
  );
}
