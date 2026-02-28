import { FaqChat } from "@/components/faq-chat";
import { Card, CardContent } from "@/components/ui/card";
import { BrainCircuit, Info, Lightbulb, Zap } from "lucide-react";

export default function FaqPage() {
  return (
    <div className="pb-20">
      <div className="bg-primary text-primary-foreground py-20 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">AI FAQ Assistant</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Have a quick question? Our AI-powered assistant is trained on Laxmidhar Polytechnic College specifics to provide instant answers 24/7.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <FaqChat />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <BrainCircuit className="h-6 w-6 text-accent" /> How it works
            </h2>
            <div className="space-y-4">
              {[
                { title: "Natural Language", desc: "Type like you're talking to a person. Our AI understands context.", icon: Info },
                { title: "Instant Answers", desc: "Get immediate responses about admissions, fees, and programs.", icon: Zap },
                { title: "Accurate Info", desc: "Trained specifically on Laxmidhar Polytechnic College's official data.", icon: Lightbulb }
              ].map((item, i) => (
                <Card key={i} className="border-none shadow-md bg-white">
                  <CardContent className="pt-6 flex gap-4">
                    <div className="bg-primary/5 p-2 rounded-lg h-fit"><item.icon className="h-5 w-5 text-primary" /></div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-accent/10 border-accent/20">
              <CardContent className="pt-6">
                <p className="text-sm font-medium text-accent-foreground italic">
                  "Can't find what you're looking for? Try asking about 'Mechanical Engineering intake' or 'Admission documents required'."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
