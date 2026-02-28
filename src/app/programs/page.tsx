
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, UserCheck, Clock, BookText } from "lucide-react";

const programs = [
  {
    id: "mechanical-eng",
    name: "Mechanical Engineering",
    seats: 60,
    duration: "3 Years (6 Semesters)",
    description: "Focuses on the design, analysis, manufacturing, and maintenance of mechanical systems.",
    highlights: ["CAD/CAM Design", "Thermodynamics Lab", "Fluid Mechanics", "Production Tech"],
    image: PlaceHolderImages.find(img => img.id === "mechanical-eng")
  },
  {
    id: "electrical-eng",
    name: "Electrical Engineering",
    seats: 60,
    duration: "3 Years (6 Semesters)",
    description: "Covers electricity, electronics, and electromagnetism applied to power systems and circuits.",
    highlights: ["Power Systems", "Control Systems", "Electrical Machines", "Digital Electronics"],
    image: PlaceHolderImages.find(img => img.id === "electrical-eng")
  },
  {
    id: "civil-eng",
    name: "Civil Engineering",
    seats: 60,
    duration: "3 Years (6 Semesters)",
    description: "Deals with design, construction, and maintenance of the physical and natural environment.",
    highlights: ["Structural Analysis", "Surveying", "Concrete Technology", "AutoCAD Civil"],
    image: PlaceHolderImages.find(img => img.id === "civil-eng")
  }
];

export default function ProgramsPage() {
  return (
    <div className="pb-20">
      <div className="bg-primary text-primary-foreground py-20 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Programs</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Our 3-year Diploma in Engineering programs are designed to provide students with the foundational technical knowledge and practical skills needed to thrive in modern industry.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((prog) => (
            <Card key={prog.id} className="overflow-hidden flex flex-col hover:shadow-2xl transition-all border-none shadow-lg">
              <div className="relative h-56">
                {prog.image && (
                  <Image
                    src={prog.image.imageUrl}
                    alt={prog.image.description}
                    fill
                    className="object-cover"
                    data-ai-hint={prog.image.imageHint}
                  />
                )}
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground font-bold text-sm px-3 py-1">
                  Intake: {prog.seats} Seats
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">{prog.name}</CardTitle>
                <CardDescription className="flex items-center gap-2 font-medium">
                  <Clock className="h-4 w-4 text-accent" /> {prog.duration}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-6">
                <p className="text-muted-foreground text-sm leading-relaxed italic">
                  "{prog.description}"
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                    <BookText className="h-4 w-4 text-primary" /> Key Learning Areas
                  </h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {prog.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Course Info Footer */}
        <section className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Eligibility & Affiliation</h2>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="bg-primary p-2 rounded-lg text-white shrink-0"><UserCheck className="h-5 w-5" /></div>
                  <div>
                    <h4 className="font-bold">Entry Level</h4>
                    <p className="text-sm text-muted-foreground">Minimum 10th pass or equivalent from a recognized board with Science & Mathematics.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-primary p-2 rounded-lg text-white shrink-0"><BookText className="h-5 w-5" /></div>
                  <div>
                    <h4 className="font-bold">Lateral Entry</h4>
                    <p className="text-sm text-muted-foreground">Direct 2nd year entry available for 12th (PCM) or ITI certificate holders as per BTER norms.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-inner border border-border">
              <h3 className="font-bold text-xl mb-4">Affiliation Details</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Laxmidhar College is proudly approved by AICTE (All India Council for Technical Education) and affiliated with the Board of Technical Education, Rajasthan (BTER).
              </p>
              <Badge variant="outline" className="text-primary border-primary">AICTE Approved</Badge>
              <Badge variant="outline" className="ml-2 text-primary border-primary">BTER Affiliated</Badge>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
