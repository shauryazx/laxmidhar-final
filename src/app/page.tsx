
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, BookOpen, GraduationCap, Users, History, Bell } from "lucide-react";

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
            Nurturing Future <br /> <span className="text-accent">Engineers</span> & Innovators
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-primary-foreground/80">
            Laxmidhar College is a premier technical institute in Rajasthan, dedicated to excellence in Diploma Engineering education since inception.
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
              <CardTitle>Rich History</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/70">
                Founded with a vision to empower rural and urban youth through technical literacy and professional skills.
              </p>
              <Button variant="link" className="text-accent p-0 mt-4 hover:no-underline" asChild>
                <Link href="/about">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-accent text-accent-foreground">
            <CardHeader>
              <GraduationCap className="h-10 w-10 text-primary mb-2" />
              <CardTitle>AICTE Approved</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-accent-foreground/70">
                All our engineering diploma programs are strictly governed by AICTE norms ensuring global quality standards.
              </p>
              <Button variant="link" className="text-primary p-0 mt-4 hover:no-underline" asChild>
                <Link href="/disclosure">View Disclosures <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white text-foreground">
            <CardHeader>
              <Users className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Expert Faculty</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Mentorship by experienced industry professionals and academic experts in Mechanical, Civil, and Electrical fields.
              </p>
              <Button variant="link" className="text-primary p-0 mt-4 hover:no-underline" asChild>
                <Link href="/desk/hod">Meet Our HODs <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* News & Programs Preview */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* News Feed */}
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <Bell className="h-8 w-8 text-primary" /> Latest Updates
                </h2>
                <Link href="/news" className="text-primary font-semibold hover:underline">View All</Link>
              </div>
              <div className="space-y-4">
                {[
                  { date: "Oct 24, 2023", title: "Admissions Open for Academic Year 2024-25" },
                  { date: "Sep 15, 2023", title: "Placement Drive: Top Tech Companies Visit Campus" },
                  { date: "Aug 10, 2023", title: "National Level Workshop on Solar Energy Integration" }
                ].map((news, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white rounded-lg shadow-sm border-l-4 border-accent">
                    <div className="flex-shrink-0 text-xs font-bold text-muted-foreground uppercase pt-1">{news.date}</div>
                    <div className="font-semibold">{news.title}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Programs Quick Look */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-primary" /> Engineering Streams
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
                We offer a focused 3-year Diploma curriculum designed for practical skill acquisition and industry readiness.
              </p>
              <Button className="w-full sm:w-auto" asChild>
                <Link href="/programs">View Full Curriculum</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
