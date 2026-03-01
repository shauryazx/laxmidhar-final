
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Landmark, Smartphone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pb-20">
      <div className="bg-primary text-primary-foreground py-24 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Connect With Us</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg leading-relaxed">
            Reach out for admissions, institutional inquiries, or placement support. Our administrative offices are ready to assist you.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Contact Info */}
            <section className="space-y-8">
              <h2 className="text-3xl font-extrabold text-primary">Institutional Contact</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary p-3 rounded-2xl text-white shadow-lg"><MapPin className="h-6 w-6" /></div>
                  <div>
                    <h4 className="font-black text-xs uppercase text-accent mb-1 tracking-widest">Campus Address</h4>
                    <p className="font-bold text-sm leading-relaxed">IN-3, M.I.A., RIICO (Near Tarni Cancer Hospital), Alwar-301030 (Raj.)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary p-3 rounded-2xl text-white shadow-lg"><Landmark className="h-6 w-6" /></div>
                  <div>
                    <h4 className="font-black text-xs uppercase text-accent mb-1 tracking-widest">City Office</h4>
                    <p className="font-bold text-sm leading-relaxed">S.K. Engineers Academy, Near Nehru Garden, Alwar</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary p-3 rounded-2xl text-white shadow-lg"><Smartphone className="h-6 w-6" /></div>
                  <div>
                    <h4 className="font-black text-xs uppercase text-accent mb-1 tracking-widest">Mobile Numbers</h4>
                    <p className="font-black text-lg text-primary">8824351992</p>
                    <p className="font-black text-lg text-primary">9799707879</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary p-3 rounded-2xl text-white shadow-lg"><Mail className="h-6 w-6" /></div>
                  <div>
                    <h4 className="font-black text-xs uppercase text-accent mb-1 tracking-widest">Email Address</h4>
                    <p className="font-bold text-sm">laxmindharpoly@gmail.com</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Map Placeholder */}
            <section className="h-full min-h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <div className="w-full h-full bg-muted flex flex-col items-center justify-center relative">
                <MapPin className="h-12 w-12 text-primary mb-2 animate-bounce" />
                <span className="font-extrabold text-xl text-primary uppercase tracking-tighter">Locate Campus</span>
                <p className="text-sm text-muted-foreground font-bold">IN-3, M.I.A., RIICO, Alwar</p>
                <div className="absolute inset-0 bg-primary/5" />
              </div>
            </section>
          </div>
          
          <Card className="bg-accent/5 border-accent/20 border-2 rounded-[2rem] p-8 md:p-12 text-center">
            <h3 className="text-2xl font-black text-primary mb-4">Visit Us for Direct Admissions</h3>
            <p className="text-muted-foreground font-medium max-w-2xl mx-auto">
              For on-the-spot counseling and admission processing, please visit our MIA Campus or City Office between 9:00 AM and 5:00 PM (Monday to Saturday).
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
