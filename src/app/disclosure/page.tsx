import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ShieldCheck, FileText, Download, Landmark, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DisclosurePage() {
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

      <div className="container mx-auto px-4 space-y-12">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-none shadow-xl bg-white overflow-hidden">
            <CardHeader className="bg-muted/50 border-b">
              <CardTitle className="flex items-center gap-2 text-primary">
                <Landmark className="h-5 w-5" /> Institutional Details
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableBody>
                  <TableRow><TableCell className="font-bold">Institute Name</TableCell><TableCell>Laxmidhar Polytechnic College</TableCell></TableRow>
                  <TableRow><TableCell className="font-bold">Affiliation</TableCell><TableCell>BTER Jodhpur, Rajasthan</TableCell></TableRow>
                  <TableRow><TableCell className="font-bold">Address</TableCell><TableCell>IN-3, M.I.A., RIICO, Alwar-301030</TableCell></TableRow>
                  <TableRow><TableCell className="font-bold">Email</TableCell><TableCell>laxmindharpoly@gmail.com</TableCell></TableRow>
                  <TableRow><TableCell className="font-bold">Chairman</TableCell><TableCell>Mahendra Singh Choudhary</TableCell></TableRow>
                  <TableRow><TableCell className="font-bold">Reg. No.</TableCell><TableCell>13/alwar/1999</TableCell></TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl bg-white overflow-hidden">
            <CardHeader className="bg-muted/50 border-b">
              <CardTitle className="flex items-center gap-2 text-primary">
                <ShieldCheck className="h-5 w-5" /> Programs & Intake
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Program Name</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Intake</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow><TableCell>Mechanical Eng.</TableCell><TableCell>3 Yrs</TableCell><TableCell>60</TableCell></TableRow>
                  <TableRow><TableCell>Civil Eng.</TableCell><TableCell>3 Yrs</TableCell><TableCell>60</TableCell></TableRow>
                  <TableRow><TableCell>Electrical Eng.</TableCell><TableCell>3 Yrs</TableCell><TableCell>60</TableCell></TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        <section className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-border">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Public Documentation</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "AICTE Approval Letter (Current Year)",
              "Anti-Ragging Committee Details",
              "Grievance Redressal Mechanism",
              "Internal Complaint Committee",
              "SC/ST Committee Setup",
              "Library & Lab Resources Disclosure"
            ].map((doc, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl border border-transparent hover:border-primary/20 transition-all">
                <span className="text-sm font-semibold">{doc}</span>
                <Button size="icon" variant="ghost" className="text-primary hover:text-accent">
                  <Download className="h-5 w-5" />
                </Button>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center p-8">
          <Button variant="outline" className="gap-2 border-primary text-primary hover:bg-primary hover:text-white" asChild>
            <a href="https://www.aicte-india.org/" target="_blank" rel="noopener noreferrer">
              Official AICTE Website <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
