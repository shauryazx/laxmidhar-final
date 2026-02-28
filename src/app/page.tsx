import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, BookOpen, GraduationCap, Users, History, ShieldCheck, Zap, TrendingUp, Trophy } from "lucide-react";

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-college");
  
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center justify-center overflow-hidden">
        {heroImg && (
          <Image
            src={heroImg.imageUrl}
            alt={heroImg.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImg.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative container mx-auto px-4 text-center text-primary-foreground">
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent-foreground px-4 py-1.5 rounded-full text-sm font-bold mb-6 backdrop-blur-sm uppercase tracking-widest">
            <Trophy className="h-4 w-4" /> Admission Open for Session 2024-25
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Building Careers with <br /> <span className="text-accent">Technical Excellence</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-primary-foreground/90 leading-relaxed">
            Approved by AICTE & Affiliated to BTER Jodhpur. Delivering 100% results and premier placements in Alwar's industrial heart.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-7 text-lg font-bold shadow-lg" asChild>
              <Link href="/admissions">Apply Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary px-10 py-7 text-lg font-bold" asChild>
              <Link href="/programs">Explore Branches</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Placement Highlights */}
      <section className="container mx-auto px-4 -mt-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white shadow-2xl border-none text-center p-8">
            <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-4xl font-extrabold text-primary mb-1">10 LPA</h3>
            <p className="text-muted-foreground font-bold uppercase tracking-wider text-sm">Highest Package</p>
          </Card>
          <Card className="bg-primary text-primary-foreground shadow-2xl border-none text-center p-8">
            <Users className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-4xl font-extrabold mb-1">3.6 LPA</h3>
            <p className="text-primary-foreground/70 font-bold uppercase tracking-wider text-sm">Average Package</p>
          </Card>
          <Card className="bg-white shadow-2xl border-none text-center p-8">
            <History className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-4xl font-extrabold text-primary mb-1">100%</h3>
            <p className="text-muted-foreground font-bold uppercase tracking-wider text-sm">Recent Results</p>
          </Card>
        </div>
      </section>

      {/* Recruiters Section */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-center mb-12 text-muted-foreground uppercase tracking-widest">Our Top Recruiters</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all">
          {["Havells", "Suzuki", "Honda", "Bajaj", "BHEL", "Hyundai", "JCB"].map((brand) => (
            <div key={brand} className="text-center font-black text-2xl tracking-tighter text-foreground/40">{brand}</div>
          ))}
        </div>
      </section>

      {/* Main Info Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl font-extrabold text-primary">Why Choose Laxmidhar?</h2>
                <div className="h-2 w-20 bg-accent rounded-full" />
              </div>
              <div className="space-y-6">
                {[
                  { title: "Zero Fees Scholarship", desc: "Zero fees for ST/SC/SBC and students scoring above 75%. We ensure financial status never blocks talent." },
                  { title: "12th PCM Equivalence", desc: "Get an additional 12th PCM marksheet from RBSE by passing just one English paper alongside your diploma." },
                  { title: "J.En. Recruitment Prep", desc: "Our curriculum is designed to help students qualify for Junior Engineer posts in state and central government departments." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 p-6 bg-white rounded-2xl shadow-md border-r-8 border-primary">
                    <div className="bg-primary/10 p-3 rounded-full h-fit">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-lg text-primary mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl font-extrabold text-primary">Our Core Branches</h2>
                <div className="h-2 w-20 bg-accent rounded-full" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { name: "Electrical", icon: "⚡", color: "bg-blue-50 text-blue-600 border-blue-200" },
                  { name: "Civil", icon: "🏗️", color: "bg-orange-50 text-orange-600 border-orange-200" },
                  { name: "Mechanical", icon: "⚙️", color: "bg-red-50 text-red-600 border-red-200" },
                ].map((dept, i) => (
                  <div key={i} className={`text-center p-8 rounded-2xl border shadow-lg hover:scale-105 transition-transform ${dept.color}`}>
                    <div className="text-5xl mb-4">{dept.icon}</div>
                    <h3 className="font-extrabold text-xl">{dept.name}</h3>
                  </div>
                ))}
              </div>
              <Card className="bg-primary text-primary-foreground border-none overflow-hidden">
                <CardContent className="p-8 space-y-4">
                  <h4 className="text-2xl font-bold flex items-center gap-2">
                    <GraduationCap className="h-6 w-6 text-accent" /> Admission Benefits
                  </h4>
                  <ul className="space-y-3 text-sm text-primary-foreground/80 font-medium">
                    <li className="flex items-center gap-2">✓ Direct 2nd Year Entry for ITI & 12th PCM</li>
                    <li className="flex items-center gap-2">✓ Industry-Ready Practical Training</li>
                    <li className="flex items-center gap-2">✓ Strategic Location in MIA RIICO Hub</li>
                  </ul>
                  <Button className="w-full bg-accent text-accent-foreground font-bold hover:bg-accent/80" asChild>
                    <Link href="/admissions">Learn More About Admissions</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
