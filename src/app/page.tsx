import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, BookOpen, GraduationCap, Users, History, ShieldCheck, Zap } from "lucide-react";

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-college");
  
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Empowering the Next <br /> <span className="text-accent">Generation</span> of Engineers
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-primary-foreground/80">
            Laxmidhar Polytechnic College is committed to delivering industry-standard technical education in Alwar, Rajasthan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <Link href="/admissions">Join Us Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary" asChild>
              <Link href="/programs">Explore Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-primary text-primary-foreground">
            <CardHeader>
              <History className="h-10 w-10 text-accent mb-2" />
              <CardTitle>Legacy of Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/70">
                A track record of producing skilled technicians who drive industrial innovation across the state.
              </p>
              <Button variant="link" className="text-accent p-0 mt-4 hover:no-underline" asChild>
                <Link href="/about">Our History <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-accent text-accent-foreground">
            <CardHeader>
              <ShieldCheck className="h-10 w-10 text-primary mb-2" />
              <CardTitle>AICTE Recognized</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-accent-foreground/70">
                Full compliance with national technical education standards for quality and infrastructure.
              </p>
              <Button variant="link" className="text-primary p-0 mt-4 hover:no-underline" asChild>
                <Link href="/disclosure">Institutional Disclosure <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white text-foreground">
            <CardHeader>
              <Users className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Student Success</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Dedicated placement assistance and hands-on laboratory training for every engineering stream.
              </p>
              <Button variant="link" className="text-primary p-0 mt-4 hover:no-underline" asChild>
                <Link href="/desk/hod">Academic Leadership <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Static Info Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <Zap className="h-8 w-8 text-primary" /> Why Choose Laxmidhar?
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Strategic Location", desc: "Situated in the heart of MIA RIICO industrial area, offering students unique exposure to real industrial environments." },
                  { title: "State-of-the-Art Labs", desc: "Modern laboratories for Civil, Mechanical, and Electrical engineering with industry-grade equipment." },
                  { title: "Career Focused", desc: "Our curriculum emphasizes practical skills and soft skills development to ensure employability upon graduation." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-white rounded-xl shadow-sm border-l-4 border-accent">
                    <div>
                      <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-primary" /> Specialized Streams
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { name: "Civil", icon: "🏗️", seats: 60 },
                  { name: "Mechanical", icon: "⚙️", seats: 60 },
                  { name: "Electrical", icon: "⚡", seats: 60 },
                ].map((dept, i) => (
                  <div key={i} className="text-center p-6 bg-white rounded-lg border border-primary/10 shadow-sm hover:border-primary/50 transition-colors">
                    <div className="text-3xl mb-2">{dept.icon}</div>
                    <h3 className="font-bold text-lg">{dept.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{dept.seats} Intake</p>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We offer rigorous 3-year Diploma curriculums designed for practical technical mastery. Our programs are affiliated with BTER, Rajasthan.
              </p>
              <Button className="w-full sm:w-auto" asChild>
                <Link href="/programs">Explore Curriculum</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
