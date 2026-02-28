"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  BookOpen, 
  Info, 
  GraduationCap, 
  Phone, 
  UserRound, 
  Search,
  Menu,
  X,
  LogIn,
  LogOut
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useUser, useAuth } from "@/firebase";
import { signOut } from "firebase/auth";

const navItems = [
  { name: "About Us", href: "/about", icon: Info },
  { name: "Programs", href: "/programs", icon: GraduationCap },
  { name: "Admissions", href: "/admissions", icon: BookOpen },
  { name: "AI Support", href: "/faq", icon: Search },
  { name: "Contact", href: "/contact", icon: Phone },
];

const deskItems = [
  { name: "Chairman's Desk", href: "/desk/chairman" },
  { name: "HODs Desk", href: "/desk/hod" },
  { name: "Disclosure", href: "/disclosure" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { user, isUserLoading } = useUser();
  const auth = useAuth();

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-primary text-primary-foreground border-b border-primary/20 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex flex-col items-start">
            <span className="text-xl font-bold tracking-tight">LAXMIDHAR POLYTECHNIC</span>
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">College Connect</span>
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
              <DropdownMenuContent align="end" className="bg-white text-foreground">
                {deskItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link href={item.href} className="w-full cursor-pointer">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="ml-4 flex items-center gap-2 border-l border-primary-foreground/20 pl-4">
              {isUserLoading ? (
                <div className="w-20 h-8 bg-primary-foreground/10 animate-pulse rounded" />
              ) : user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="bg-accent text-accent-foreground border-none hover:bg-accent/90">
                      Profile
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem className="flex flex-col items-start gap-1 p-3">
                      <span className="font-bold">{user.displayName || 'Student/Staff'}</span>
                      <span className="text-xs text-muted-foreground">{user.email}</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleSignOut} className="text-destructive focus:text-destructive cursor-pointer">
                      <LogOut className="h-4 w-4 mr-2" /> Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent" asChild>
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                    <Link href="/signup">Sign Up</Link>
                  </Button>
                </>
              )}
            </div>
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
        <div className="lg:hidden bg-white text-primary border-t border-border">
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
              {deskItems.map((item) => (
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
            <div className="pt-4 border-t border-border space-y-2">
              {user ? (
                <Button variant="destructive" className="w-full" onClick={handleSignOut}>
                  Sign Out
                </Button>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" asChild onClick={() => setIsOpen(false)}>
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button className="bg-primary text-white" asChild onClick={() => setIsOpen(false)}>
                    <Link href="/signup">Sign Up</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
