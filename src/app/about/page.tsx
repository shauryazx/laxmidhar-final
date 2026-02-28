import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { History, Target, Eye, ShieldCheck, Award, Users, Trophy } from "lucide-react";

export default function AboutPage() {
  const studentsImg = PlaceHolderImages.find(img => img.id === "students-campus");

  return (
    <div className="pb-20">
      <div className="bg-primary text-primary-foreground py-24 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Institutional Excellence</h1>
          <p className="text-primary-foreground/80 max-w-3xl mx-auto text-lg">
            Approved by AICTE & Affiliated to BTER Jodhpur. A legacy of producing top-tier engineering professionals in Alwar.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 space-y-24">
        {/* Results Showcase */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-primary uppercase tracking-widest mb-4">Historical Results (College + Tuition)</h2>
            <div className="h-1.5 w-32 bg-accent mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { session: "2018-19", total: "300", result: "100%", icon: Award },
              { session: "2019-20", total: "157", result: "100%", icon: Trophy },
              { session: "2022-23 Passout", total: "110", result: "98%", icon: StarIcon }
            ].map((stat, i) => (
              <Card key={i} className="text-center p-8 bg-white border-none shadow-xl hover:scale-105 transition-all">
                <stat.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-black text-primary mb-2">Session {stat.session}</h3>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Students: {stat.total}</p>
                  <p className="text-3xl font-extrabold text-primary">Result: {stat.result}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Core Identity */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-primary mb-2">
              <History className="h-8 w-8 text-accent" />
              <h2 className="text-4xl font-extrabold tracking-tight">Our Journey</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              Located at 1N-3, MIA RIICO Alwar, Laxmidhar Polytechnic College stands as a beacon of technical education. Our strategic location near the industrial heart of Rajasthan allows us to provide students with unparalleled practical exposure.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We focus on the holistic development of our students, ensuring they are not just academically proficient but also industry-ready. Our tie-ups with RIICO manufacturing units and professional coaching paradigms (College + Tuition) have consistently yielded near-perfect academic results year after year.
            </p>
          </div>
          <div className="relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
            {studentsImg && (
              <Image
                src={studentsImg.imageUrl}
                alt={studentsImg.description}
                fill
                className="object-cover"
                data-ai-hint={studentsImg.imageHint}
              />
            )}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-none shadow-2xl bg-primary text-primary-foreground rounded-3xl">
            <CardContent className="pt-12 p-8 text-center space-y-4">
              <div className="mx-auto bg-accent/20 p-5 rounded-full w-fit backdrop-blur-md">
                <Target className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-3xl font-bold">Our Mission</h3>
              <p className="text-primary-foreground/70 leading-relaxed font-medium">
                To bridge the gap between theoretical knowledge and industrial application by providing students with a 12th PCM equivalence alongside their professional engineering diploma.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-2xl bg-accent text-accent-foreground rounded-3xl">
            <CardContent className="pt-12 p-8 text-center space-y-4">
              <div className="mx-auto bg-primary/10 p-5 rounded-full w-fit backdrop-blur-md">
                <Eye className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-3xl font-bold">Our Vision</h3>
              <p className="text-accent-foreground/70 leading-relaxed font-medium">
                To be the premier technical training institute in Alwar, facilitating 100% employment for our youth in top multinational companies like Suzuki, Honda, and Havells.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
