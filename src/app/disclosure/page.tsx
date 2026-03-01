import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ShieldCheck, FileText, Download, Landmark, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DisclosurePage() {
  const documentation = [
    { title: "AICTE Approval Letter (Current Year)", url: "#" },
    { title: "Anti-Ragging Committee Details", url: "#" },
    { title: "Grievance Redressal Mechanism", url: "#" },
    { title: "Internal Complaint Committee", url: "#" },
    { title: "SC/ST Committee Setup", url: "#" },
    { title: "Library & Lab Resources Disclosure", url: "#" }
  ];

  return (
    <div className="pb-20">
      <div className="bg-primary text-primary-foreground py-20 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Mandatory Disclosure</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            In compliance with AICTE norms, Laxmidhar Polytechnic College maintains transparency regarding our infrastructure, faculty, and institutional details.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 space-y-16">
        {/* Public Documentation Section */}
        <section className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-border/50">
          <div className="flex items-center gap-4 mb-10">
            <div className="bg-primary/10 p-3 rounded-2xl">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-4xl font-black text-primary tracking-tight">Public Documentation</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documentation.map((doc, i) => (
              <a 
                key={i} 
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-6 bg-muted/20 rounded-2xl border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-lg transition-all"
              >
                <span className="text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors leading-tight pr-4">
                  {doc.title}
                </span>
                <div className="text-primary opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all">
                  <Download className="h-5 w-5" />
                </div>
              </a>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground font-medium">
            Click any document to open or download. All documents are in PDF format.
          </p>
        </section>

        {/* Tables Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-none shadow-xl bg-white overflow-hidden rounded-[2rem]">
            <CardHeader className="bg-muted/30 border-b p-8">
              <CardTitle className="flex items-center gap-3 text-primary text-2xl font-bold">
                <Landmark className="h-6 w-6" /> Institutional Details
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <Table>
                <TableBody>
                  <TableRow className="hover:bg-transparent border-none"><TableCell className="font-bold text-muted-foreground uppercase text-[10px] tracking-widest">Institute Name</TableCell><TableCell className="font-bold">Laxmidhar Polytechnic College</TableCell></TableRow>
                  <TableRow className="hover:bg-transparent border-none"><TableCell className="font-bold text-muted-foreground uppercase text-[10px] tracking-widest">Affiliation</TableCell><TableCell className="font-bold">BTER Jodhpur, Rajasthan</TableCell></TableRow>
                  <TableRow className="hover:bg-transparent border-none"><TableCell className="font-bold text-muted-foreground uppercase text-[10px] tracking-widest">Address</TableCell><TableCell className="font-bold text-xs leading-relaxed">IN-3, M.I.A., RIICO, Alwar-301030</TableCell></TableRow>
                  <TableRow className="hover:bg-transparent border-none"><TableCell className="font-bold text-muted-foreground uppercase text-[10px] tracking-widest">Email</TableCell><TableCell className="font-bold text-primary">laxmindharpoly@gmail.com</TableCell></TableRow>
                  <TableRow className="hover:bg-transparent border-none"><TableCell className="font-bold text-muted-foreground uppercase text-[10px] tracking-widest">Chairman</TableCell><TableCell className="font-bold">Mahendra Singh Choudhary</TableCell></TableRow>
                  <TableRow className="hover:bg-transparent border-none"><TableCell className="font-bold text-muted-foreground uppercase text-[10px] tracking-widest">Reg. No.</TableCell><TableCell className="font-bold">13/alwar/1999</TableCell></TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl bg-white overflow-hidden rounded-[2rem]">
            <CardHeader className="bg-muted/30 border-b p-8">
              <CardTitle className="flex items-center gap-3 text-primary text-2xl font-bold">
                <ShieldCheck className="h-6 w-6" /> Programs & Intake
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="text-muted-foreground uppercase text-[10px] font-black">Program Name</TableHead>
                    <TableHead className="text-muted-foreground uppercase text-[10px] font-black">Duration</TableHead>
                    <TableHead className="text-muted-foreground uppercase text-[10px] font-black">Intake</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="hover:bg-transparent"><TableCell className="font-bold">Mechanical Eng.</TableCell><TableCell>3 Yrs</TableCell><TableCell className="font-black text-accent">60</TableCell></TableRow>
                  <TableRow className="hover:bg-transparent"><TableCell className="font-bold">Civil Eng.</TableCell><TableCell>3 Yrs</TableCell><TableCell className="font-black text-accent">60</TableCell></TableRow>
                  <TableRow className="hover:bg-transparent"><TableCell className="font-bold">Electrical Eng.</TableCell><TableCell>3 Yrs</TableCell><TableCell className="font-black text-accent">60</TableCell></TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        <div className="text-center p-8">
          <Button variant="outline" className="gap-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-xl font-bold" asChild>
            <a href="https://www.aicte-india.org/" target="_blank" rel="noopener noreferrer">
              Official AICTE Website <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
