import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, UserRound, GraduationCap, Award } from "lucide-react";

const keyPersonnel = [
  {
    role: "Director",
    name: "Nirma Choudhary",
    msg: "Our focus is on creating a balanced ecosystem of academic rigor and student welfare at Laxmidhar Polytechnic College. We ensure that every resource is directed towards the holistic development of our budding engineers.",
    img: PlaceHolderImages.find(img => img.id === "director-portrait")
  },
  {
    role: "Principal",
    name: "Shahkool Khan",
    msg: "Discipline, dedication, and determination are the pillars of Laxmidhar Polytechnic College. Our curriculum is designed to push students beyond their boundaries and prepare them for real-world challenges.",
    img: PlaceHolderImages.find(img => img.id === "principal-portrait")
  }
];

const hods = [
  { dept: "Civil Engineering", name: "Nikita Jagid", icon: "🏗️", contact: "hod.civil@laxmidharpolytechnic.ac.in" },
  { dept: "Mechanical Engineering", name: "Jya Seini", icon: "⚙️", contact: "hod.mech@laxmidharpolytechnic.ac.in" },
  { dept: "Electrical Engineering", name: "Sunil Mahiwal", icon: "⚡", contact: "hod.elec@laxmidharpolytechnic.ac.in" }
];

export default function HodDesk() {
  return (
    <div className="pb-20">
      <div className="bg-primary text-primary-foreground py-20 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">HODs & Administrative Desk</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Meet the academic leaders driving innovation and excellence at Laxmidhar Polytechnic College.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 space-y-24">
        {/* Leadership Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {keyPersonnel.map((person, i) => (
            <Card key={i} className="overflow-hidden border-none shadow-xl bg-white group hover:shadow-2xl transition-all">
              <div className="md:flex h-full">
                <div className="md:w-2/5 relative h-72 md:h-auto overflow-hidden">
                  {person.img && (
                    <Image
                      src={person.img.imageUrl}
                      alt={person.img.description}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      data-ai-hint={person.img.imageHint}
                    />
                  )}
                </div>
                <div className="md:w-3/5 p-8 flex flex-col justify-center">
                  <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold w-fit mb-4 uppercase">
                    {person.role}
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{person.name}</h3>
                  <p className="text-muted-foreground italic leading-relaxed text-sm mb-6">
                    "{person.msg}"
                  </p>
                  <div className="flex gap-4">
                    <Award className="h-5 w-5 text-primary" />
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <UserRound className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </section>

        {/* HODs Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-2">Heads of Departments</h2>
            <div className="h-1.5 w-24 bg-accent mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hods.map((hod, i) => (
              <Card key={i} className="text-center hover:border-primary transition-all shadow-lg border-t-4 border-t-primary">
                <CardHeader>
                  <div className="text-4xl mb-4">{hod.icon}</div>
                  <CardTitle className="text-xl">{hod.name}</CardTitle>
                  <CardDescription className="font-bold text-primary">{hod.dept}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    <Mail className="h-4 w-4" />
                    <span>{hod.contact}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Vision Statement */}
        <section className="bg-primary text-primary-foreground p-12 rounded-3xl text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Academic Commitment</h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Our HODs are not just administrators; they are mentors committed to the technical proficiency and moral integrity of our students. We maintain an open-door policy for all academic inquiries at Laxmidhar Polytechnic College.
            </p>
          </div>
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <GraduationCap className="h-32 w-32" />
          </div>
        </section>
      </div>
    </div>
  );
}
