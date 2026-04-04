"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  BookOpen, 
  Info, 
  GraduationCap, 
  Phone, 
  UserRound, 
  Menu,
  X,
  ShieldCheck,
  Users
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

// Using the local favicon.png for branding consistency
const logoUrl = "/favicon.png";

const navItems = [
  { name: "About Us", href: "/about", icon: Info },
  { name: "Programs", href: "/programs", icon: GraduationCap },
  { name: "Admissions", href: "/admissions", icon: BookOpen },
  { name: "Faculty", href: "/faculty", icon: Users },
  { name: "Disclosure", href: "/disclosure", icon: ShieldCheck },
  { name: "Contact", href: "/contact", icon: Phone },
];

const adminItems = [
  { name: "Chairman's Desk", href: "/desk/chairman" },
  { name: "HODs Desk", href: "/desk/hod" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-primary text-primary-foreground border-b border-primary/20 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Institutional Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="flex-shrink-0 transition-transform group-hover:scale-105">
              <Image
                src={logoUrl}
                alt="LPC Logo"
                width={80}
                height={80}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black tracking-tighter text-white uppercase">LPC</span>
              <span className="text-[10px] font-bold uppercase text-accent tracking-widest">Alwar, Rajasthan</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-accent flex items-center gap-2",
                  pathname === item.href ? "text-accent" : "text-primary-foreground/90"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-primary-foreground hover:text-accent hover:bg-transparent flex items-center gap-2">
                  <UserRound className="h-4 w-4" />
                  Administration
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white text-foreground rounded-xl shadow-2xl border-none p-2">
                {adminItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link href={item.href} className="w-full cursor-pointer px-4 py-2 rounded-lg hover:bg-muted font-semibold text-sm">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white text-primary border-t border-border animate-in slide-in-from-top duration-300">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-3 rounded-md text-base font-semibold flex items-center gap-3",
                  pathname === item.href ? "bg-accent/10 text-primary border-l-4 border-accent" : "hover:bg-accent/5"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <span className="px-3 text-xs font-bold text-muted-foreground uppercase tracking-widest">Administrator Desks</span>
              {adminItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-semibold hover:bg-accent/5"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
