
'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Send, Landmark, Smartphone, Loader2, CheckCircle } from "lucide-react";
import { useFirestore } from "@/firebase";
import { collection } from "firebase/firestore";
import { addDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import { useToast } from "@/hooks/use-toast";
import { sendInquiryEmailAction } from "@/app/actions/contact";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const db = useFirestore();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    branch: "Select Branch",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.phone || !formData.email || formData.branch === "Select Branch") {
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Please fill in all required fields and select a branch.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const submittedAt = new Date().toISOString();
      
      // 1. Save to Firestore for administrative records (Client-side)
      const colRef = collection(db, "contactInquiries");
      addDocumentNonBlocking(colRef, {
        ...formData,
        submittedAt
      });
      
      // 2. Send email notification (Server Action)
      const emailResult = await sendInquiryEmailAction({
        ...formData,
        submittedAt
      });

      if (!emailResult.success) {
        console.warn("Email notification failed, but data was saved to database.");
      }
      
      setIsSuccess(true);
      toast({
        title: "Inquiry Sent",
        description: "Thank you for your interest. We will contact you shortly.",
      });
      
      // Reset form
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        branch: "Select Branch",
        message: ""
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: error.message || "Failed to send inquiry.",
      });
    } finally {
      setIsSubmitting(false);
      // Keep success message for a few seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <section>
              <h2 className="text-4xl font-extrabold text-primary mb-10">Institutional Contact</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
                </div>
                <div className="space-y-6">
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
              </div>
            </section>

            {/* Map Placeholder */}
            <section className="h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <div className="w-full h-full bg-muted flex flex-col items-center justify-center relative">
                <MapPin className="h-12 w-12 text-primary mb-2 animate-bounce" />
                <span className="font-extrabold text-xl text-primary uppercase tracking-tighter">Locate Campus</span>
                <p className="text-sm text-muted-foreground font-bold">IN-3, M.I.A., RIICO, Alwar</p>
                <div className="absolute inset-0 bg-primary/5" />
              </div>
            </section>
          </div>

          {/* Contact Form */}
          <Card className="border-none shadow-2xl bg-white p-6 md:p-12 rounded-[2rem]">
            <CardHeader className="text-center p-0 mb-8">
              <CardTitle className="text-3xl font-extrabold text-primary">Admission Inquiry Form</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-muted-foreground/60">Full Name</label>
                    <Input 
                      placeholder="Enter your name" 
                      className="bg-muted/30 border-none rounded-xl h-12" 
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-muted-foreground/60">Phone Number</label>
                    <Input 
                      placeholder="Enter your mobile" 
                      className="bg-muted/30 border-none rounded-xl h-12" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground/60">Email Address</label>
                  <Input 
                    type="email" 
                    placeholder="example@mail.com" 
                    className="bg-muted/30 border-none rounded-xl h-12" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground/60">Branch of Interest</label>
                  <select 
                    className="flex h-12 w-full rounded-xl border-none bg-muted/30 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary font-bold"
                    value={formData.branch}
                    onChange={(e) => setFormData({...formData, branch: e.target.value})}
                  >
                    <option disabled>Select Branch</option>
                    <option>Electrical Engineering</option>
                    <option>Civil Engineering</option>
                    <option>Mechanical Engineering</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground/60">Your Inquiry</label>
                  <Textarea 
                    placeholder="Ask about fees, scholarship, or lateral entry..." 
                    className="min-h-[120px] bg-muted/30 border-none rounded-xl p-4" 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground py-8 text-lg font-black rounded-xl flex items-center gap-3 shadow-xl hover:scale-[1.02] transition-transform"
                >
                  {isSubmitting ? (
                    <>Sending... <Loader2 className="h-5 w-5 animate-spin" /></>
                  ) : isSuccess ? (
                    <>Sent Successfully <CheckCircle className="h-5 w-5" /></>
                  ) : (
                    <>Submit Inquiry <Send className="h-5 w-5" /></>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
