
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pb-20">
      <div className="bg-primary text-primary-foreground py-20 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Contact Us</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Have questions? We are here to help. Reach out via the form or visit our campus in person.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-primary mb-8">Get In Touch</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary p-3 rounded-lg text-white"><MapPin className="h-6 w-6" /></div>
                    <div>
                      <h4 className="font-bold text-sm uppercase text-muted-foreground">Address</h4>
                      <p className="font-medium text-sm">1N-3 MIA RIICO, Mungaska, Alwar-301001, Rajasthan</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary p-3 rounded-lg text-white"><Phone className="h-6 w-6" /></div>
                    <div>
                      <h4 className="font-bold text-sm uppercase text-muted-foreground">Phone</h4>
                      <p className="font-medium text-sm">+91 144 1234567</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary p-3 rounded-lg text-white"><Mail className="h-6 w-6" /></div>
                    <div>
                      <h4 className="font-bold text-sm uppercase text-muted-foreground">Email</h4>
                      <p className="font-medium text-sm">info@laxmidharcollege.ac.in</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary p-3 rounded-lg text-white"><Clock className="h-6 w-6" /></div>
                    <div>
                      <h4 className="font-bold text-sm uppercase text-muted-foreground">Hours</h4>
                      <p className="font-medium text-sm">Mon - Sat: 9 AM - 4 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Map Placeholder */}
            <section className="h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <div className="w-full h-full bg-muted flex flex-col items-center justify-center relative">
                <MapPin className="h-12 w-12 text-primary mb-2" />
                <span className="font-bold text-lg text-primary">Interactive Map Loading...</span>
                <p className="text-sm text-muted-foreground">1N-3 MIA RIICO, Near IET College, Alwar</p>
                <div className="absolute inset-0 bg-primary/5" />
              </div>
            </section>
          </div>

          {/* Contact Form */}
          <Card className="border-none shadow-2xl bg-white p-4 md:p-8">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-primary">Send an Inquiry</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Full Name</label>
                    <Input placeholder="Enter your name" className="bg-muted/30" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Phone Number</label>
                    <Input placeholder="Enter your mobile" className="bg-muted/30" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email Address</label>
                  <Input type="email" placeholder="example@mail.com" className="bg-muted/30" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Department of Interest</label>
                  <select className="flex h-10 w-full rounded-md border border-input bg-muted/30 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option>Select Department</option>
                    <option>Mechanical Engineering</option>
                    <option>Civil Engineering</option>
                    <option>Electrical Engineering</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Your Message</label>
                  <Textarea placeholder="How can we help you?" className="min-h-[150px] bg-muted/30" />
                </div>
                <Button className="w-full bg-primary text-primary-foreground py-6 text-lg font-bold flex items-center gap-2">
                  Send Message <Send className="h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
