import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle, Phone, Mail, MapPin } from "lucide-react";

const faqs = [
  {
    question: "Which engineering branches are offered at LPC?",
    answer: "We offer Diploma courses in Electrical Engineering, Civil Engineering, and Mechanical Engineering."
  },
  {
    question: "What is the Zero Fees Policy?",
    answer: "We offer a 100% fee waiver for students belonging to ST, SC, and SBC categories. Additionally, any student scoring 75% or higher in their qualifying exams is eligible for the Zero Fees scheme."
  },
  {
    question: "Can I get a 12th PCM marksheet while doing the Diploma?",
    answer: "Yes. Students who join after 10th grade can receive a 12th PCM marksheet from RBSE Jodhpur by clearing just one additional English paper during their 3-year Diploma course."
  },
  {
    question: "Is there lateral entry for 12th PCM or ITI students?",
    answer: "Yes, students with 12th PCM or an ITI certificate can take direct admission into the second year of the Diploma program, completing it in just 2 years."
  },
  {
    question: "What are the placement statistics?",
    answer: "Our students have secured packages as high as 10 LPA, with an average package of 3.6 LPA. Top recruiters include Havells, Suzuki, Honda, Bajaj, and JCB."
  },
  {
    question: "Is the college approved by regulatory bodies?",
    answer: "Yes, Laxmidhar Polytechnic College is approved by AICTE New Delhi and is affiliated with the Board of Technical Education, Rajasthan (BTER) Jodhpur."
  }
];

export default function FaqPage() {
  return (
    <div className="pb-20">
      <div className="bg-primary text-primary-foreground py-20 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Frequently Asked Questions</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            Find quick answers to common questions about admissions, fees, and our engineering programs.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-white border-2 border-border rounded-2xl px-6 py-2 shadow-sm hover:border-primary transition-colors">
                  <AccordionTrigger className="text-left font-bold text-lg hover:no-underline text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="space-y-6">
            <Card className="border-none shadow-xl bg-primary text-primary-foreground overflow-hidden rounded-3xl">
              <CardContent className="p-8 space-y-6">
                <div className="bg-accent/20 p-3 rounded-xl w-fit">
                  <HelpCircle className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Still have questions?</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  Our administrative staff is ready to help you with personalized counseling and admission details.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <span className="font-bold text-sm">8824351992</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-accent" />
                    <span className="font-bold text-sm">laxmindharpoly@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span className="font-bold text-sm">M.I.A., RIICO, Alwar</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
