import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Info, FileText, Landmark, UserPlus } from "lucide-react";
import Link from "next/link";

export default function AdmissionsPage() {
  return (
    <div className="pb-20">
      <div className="bg-primary text-primary-foreground py-20 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Admission Portal</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Embark on your engineering journey at Laxmidhar Polytechnic College. We offer a transparent and merit-based enrollment process for all engineering aspirants.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
                <UserPlus className="h-8 w-8 text-accent" /> Admission Procedure
              </h2>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Career Counseling", desc: "Prospective students are encouraged to visit our campus for personal guidance regarding engineering streams." },
                  { step: "2", title: "Application Form", desc: "Obtain the official application form from the college administrative office during working hours." },
                  { step: "3", title: "Verification", desc: "Submit the completed application along with required educational certificates and identification documents." },
                  { step: "4", title: "Merit-Based Enrollment", desc: "Admissions are finalized based on 10th-grade performance and eligibility criteria as per BTER guidelines." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 bg-white rounded-xl shadow-sm border border-border hover:border-primary transition-colors">
                    <div className="flex-shrink-0 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">{item.step}</div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
                <FileText className="h-8 w-8 text-accent" /> Mandatory Documentation
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "10th Standard Marksheet",
                  "Transfer Certificate (TC)",
                  "Migration Certificate",
                  "Caste Certificate (if applicable)",
                  "Domicile Certificate",
                  "Aadhar Card Copy",
                  "Recent Passport Size Photos",
                  "Medical Fitness Certificate"
                ].map((doc, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">{doc}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            <Card className="border-t-4 border-accent shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" /> Session Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="pb-4 border-b">
                  <p className="text-xs font-bold text-muted-foreground uppercase text-accent">Enrollment Window</p>
                  <p className="font-semibold">As per BTER Rajasthan Calendar</p>
                </div>
                <div className="pb-4 border-b">
                  <p className="text-xs font-bold text-muted-foreground uppercase text-accent">Minimum Age</p>
                  <p className="font-semibold">14 Years</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase text-accent">Office Hours</p>
                  <p className="font-semibold">9:00 AM - 4:00 PM (Mon-Sat)</p>
                </div>
                <Button className="w-full bg-primary text-primary-foreground mt-4" asChild>
                  <Link href="/contact">Inquire for Dates</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Landmark className="h-5 w-5 text-accent" /> Financial Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-primary-foreground/70 mb-4">
                  We facilitate scholarship applications for eligible students through various State and Central Government schemes.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">• Post Matric Scholarship (SC/ST/OBC)</li>
                  <li className="flex items-start gap-2">• CM Scholarship Scheme, Rajasthan</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQs */}
        <section className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Common Admission Queries</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is the intake capacity per department?</AccordionTrigger>
              <AccordionContent>
                Each department—Civil, Mechanical, and Electrical Engineering—has an annual sanctioned intake of 60 seats.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is there a direct second-year entry (Lateral Entry)?</AccordionTrigger>
              <AccordionContent>
                Yes, students who have completed 12th Standard (PCM) or have an ITI certificate are eligible for direct admission into the second year of the Diploma program, subject to BTER norms.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Are the programs recognized nationally?</AccordionTrigger>
              <AccordionContent>
                Yes, all our diploma programs are approved by the AICTE (New Delhi) and affiliated with the Board of Technical Education, Rajasthan (Jodhpur).
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </div>
  );
}
