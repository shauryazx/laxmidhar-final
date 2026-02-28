import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Info, FileText, Landmark, UserPlus, Star, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function AdmissionsPage() {
  return (
    <div className="pb-20">
      <div className="bg-primary text-primary-foreground py-24 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Join Our Engineering Excellence</h1>
          <p className="text-primary-foreground/80 max-w-3xl mx-auto text-lg">
            Empowering students with industry-aligned technical skills. Approved by AICTE & Affiliated to BTER Jodhpur.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Why Diploma Section */}
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-accent/5 p-8 md:p-12 rounded-3xl border-2 border-accent/20">
              <h2 className="text-3xl font-extrabold text-primary mb-8 flex items-center gap-3">
                <Star className="h-8 w-8 text-accent" /> Why Diploma (Polytechnic) Engineering?
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {[
                  { title: "Rapid Career Entry", desc: "A highly efficient pathway to secure professional employment in a shorter timeframe compared to traditional degrees." },
                  { title: "Dual Certification", desc: "After 10th, complete your Engineering Diploma in 3 years. By clearing just one English paper from RBSE, you receive a 12th PCM marksheet alongside your diploma." },
                  { title: "Lateral Entry Benefits", desc: "12th PCM and ITI students can complete their engineering diploma in just 2 years through direct second-year admission." },
                  { title: "Government Opportunities", desc: "Diploma holders are eligible for Junior Engineer (J.En.) recruitment exams in central and state government departments." },
                  { title: "Industrial Excellence", desc: "Excellent placement opportunities in top-tier industrial sectors with competitive salary packages." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">{i + 1}</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-extrabold text-primary mb-8 flex items-center gap-3">
                <UserPlus className="h-8 w-8 text-accent" /> Admission Procedure
              </h2>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Counseling", desc: "Expert guidance to choose the right branch based on your career interests." },
                  { step: "2", title: "Form Collection", desc: "Forms are available at our MIA Campus and our City Office near Nehru Garden." },
                  { step: "3", title: "Merit Review", desc: "Admissions are processed based on 10th grade marks as per BTER guidelines." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 bg-white rounded-2xl shadow-sm border border-border hover:border-primary transition-colors">
                    <div className="flex-shrink-0 bg-primary/10 text-primary w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl">{item.step}</div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Special Offers Sidebar */}
          <div className="space-y-8">
            <Card className="border-none shadow-2xl bg-primary text-primary-foreground overflow-hidden">
              <div className="bg-accent text-accent-foreground px-4 py-2 text-center text-xs font-black uppercase tracking-widest">
                Special Scholarship Scheme
              </div>
              <CardContent className="p-8 space-y-6">
                <h3 className="text-3xl font-extrabold leading-tight">Zero Fees Initiative</h3>
                <p className="text-primary-foreground/80 font-medium">
                  We are proud to offer <span className="text-accent font-black">Zero Fees</span> for:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 bg-white/10 p-3 rounded-lg border border-white/20">
                    <ShieldCheck className="h-5 w-5 text-accent" /> 
                    <span className="font-bold">ST / SC / SBC Students</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/10 p-3 rounded-lg border border-white/20">
                    <Star className="h-5 w-5 text-accent" /> 
                    <span className="font-bold">Students with 75% + Marks</span>
                  </li>
                </ul>
                <p className="text-xs text-primary-foreground/60 italic leading-relaxed">
                  *Terms and conditions apply as per government norms and institute policy.
                </p>
                <Button className="w-full bg-accent text-accent-foreground font-extrabold hover:bg-accent/80" asChild>
                  <Link href="/contact">Inquire Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-white p-6">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-xl font-bold flex items-center gap-2 text-primary">
                  <Info className="h-5 w-5" /> Quick Facts
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm text-muted-foreground font-medium uppercase tracking-tighter">AICTE Approved</span>
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm text-muted-foreground font-medium uppercase tracking-tighter">BTER Affiliated</span>
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-muted-foreground font-medium uppercase tracking-tighter">Lateral Entry</span>
                  <span className="text-xs font-bold text-accent">Available</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQs */}
        <section className="mt-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12 text-primary">Admission FAQs</h2>
          <Accordion type="single" collapsible className="w-full space-y-2">
            <AccordionItem value="item-1" className="bg-white border-2 border-border rounded-xl px-4">
              <AccordionTrigger className="font-bold hover:no-underline text-lg">What is the Zero Fee policy?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We provide full fee waivers for students from ST, SC, and SBC categories, as well as high-performing students who have scored 75% or more in their qualifying exams, facilitating equitable access to technical education.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-white border-2 border-border rounded-xl px-4">
              <AccordionTrigger className="font-bold hover:no-underline text-lg">Can I get a 12th certificate after Diploma?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! Our diploma is recognized by the Rajasthan Government. By passing one additional English paper from RBSE Jodhpur, you can receive a 12th PCM marksheet, giving you double qualification advantages.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-white border-2 border-border rounded-xl px-4">
              <AccordionTrigger className="font-bold hover:no-underline text-lg">What are the placement prospects?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Our students are recruited by top companies like Havells, Suzuki, Honda, and JCB. We have achieved a highest package of 10 LPA and maintains an average package of 3.6 LPA for our graduates.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </div>
  );
}
