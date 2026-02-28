import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Calendar, FileText, Landmark, UserPlus } from "lucide-react";

export default function AdmissionsPage() {
  return (
    <div className="pb-20">
      <div className="bg-primary text-primary-foreground py-20 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Admission Portal</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Take the first step towards a rewarding engineering career at Laxmidhar Polytechnic College. We follow a transparent and merit-based admission process.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
                <UserPlus className="h-8 w-8 text-accent" /> Admission Process
              </h2>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Inquiry & Counseling", desc: "Visit our campus or inquire online to understand which stream suits your interests." },
                  { step: "2", title: "Form Submission", desc: "Collect the application form from the college office or download it from our portal." },
                  { step: "3", title: "Document Verification", desc: "Submit the filled form along with necessary academic certificates and identity proofs." },
                  { step: "4", title: "Merit List & Admission", desc: "Based on your 10th score and category, admission is confirmed after fee payment." }
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
                <FileText className="h-8 w-8 text-accent" /> Required Documents
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "10th Marksheet (Original + Photocopy)",
                  "Transfer Certificate (TC)",
                  "Migration Certificate",
                  "Caste Certificate (if applicable)",
                  "Domicile Certificate",
                  "Aadhar Card",
                  "Passport Size Photographs (8)",
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
                  <Calendar className="h-5 w-5 text-primary" /> Important Dates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="pb-4 border-b">
                  <p className="text-xs font-bold text-muted-foreground uppercase">Application Starts</p>
                  <p className="font-semibold">June 15, 2024</p>
                </div>
                <div className="pb-4 border-b">
                  <p className="text-xs font-bold text-muted-foreground uppercase">Last Date to Apply</p>
                  <p className="font-semibold">August 30, 2024</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase">Classes Commencement</p>
                  <p className="font-semibold">September 10, 2024</p>
                </div>
                <Button className="w-full bg-primary text-primary-foreground mt-4">Download Prospectus</Button>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Landmark className="h-5 w-5 text-accent" /> Scholarships
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-primary-foreground/70 mb-4">
                  We assist students in applying for various State & Central Government scholarship schemes based on merit and category.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">• Post Metric Scholarship (SC/ST/OBC)</li>
                  <li className="flex items-start gap-2">• Merit-cum-Means Scholarships</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQs */}
        <section className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is the total intake for each department?</AccordionTrigger>
              <AccordionContent>
                Each of our three engineering departments (Civil, Mechanical, and Electrical) has a sanctioned intake of 60 seats per academic year.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is there any entrance exam for admission?</AccordionTrigger>
              <AccordionContent>
                Admission is primarily based on the merit of your 10th-grade marks. For certain categories or lateral entries, standard BTER guidelines are followed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Do you provide hostel facilities?</AccordionTrigger>
              <AccordionContent>
                We have tie-ups with nearby safe and secure private hostels. We assist outstation students in finding suitable accommodation within walking distance of the campus.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </div>
  );
}
