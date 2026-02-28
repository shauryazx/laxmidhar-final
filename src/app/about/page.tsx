import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { History, Target, Eye, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  const studentsImg = PlaceHolderImages.find(img => img.id === "students-campus");

  return (
    <div className="pb-20">
      <div className="bg-primary text-primary-foreground py-20 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Legacy</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Discover the journey of Laxmidhar Polytechnic College, from a visionary idea to a center of technical excellence.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 space-y-24">
        {/* History Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-primary mb-2">
              <History className="h-8 w-8" />
              <h2 className="text-3xl font-bold uppercase tracking-wider">History</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded under the aegis of transformative leadership, Laxmidhar Polytechnic College was established to address the critical gap in vocational and technical education in the Alwar region. Over the years, we have grown from a small training center to a fully recognized Diploma Engineering institution.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our journey is marked by a steadfast commitment to high-quality instruction and industry-aligned training. We have consistently upgraded our laboratories, expanded our library, and fostered partnerships with leading industrial firms in the RIICO area to provide our students with the best possible opportunities.
            </p>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
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
          <Card className="border-t-4 border-accent shadow-lg bg-white">
            <CardContent className="pt-8 text-center space-y-4">
              <div className="mx-auto bg-accent/10 p-4 rounded-full w-fit">
                <Target className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide quality technical education and foster innovation, preparing students for successful careers in an ever-evolving global industrial landscape. We aim to equip every student with both theoretical depth and hands-on expertise.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-primary shadow-lg bg-white">
            <CardContent className="pt-8 text-center space-y-4">
              <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                <Eye className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
              <p className="text-muted-foreground">
                To be a premier institute of excellence in technical education, producing globally competitive technicians who contribute to the nation's industrial progress and social well-being through sustainable practices.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Core Values */}
        <section className="text-center py-12 bg-muted/30 rounded-3xl">
          <h2 className="text-3xl font-bold mb-12">Our Core Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Integrity", icon: ShieldCheck },
              { label: "Excellence", icon: Target },
              { label: "Innovation", icon: Eye },
              { label: "Responsibility", icon: History },
            ].map((value, i) => (
              <div key={i} className="space-y-2">
                <value.icon className="h-8 w-8 mx-auto text-primary" />
                <span className="font-bold text-lg">{value.label}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
