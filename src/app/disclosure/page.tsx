import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ShieldCheck, FileText, Download, Landmark, ExternalLink, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DisclosurePage() {
  // Categorized documentation data
  const documentation = [
    { title: "EOA Report 2025-26", url: "#", category: "Regulatory" },
    { title: "AICTE Approval Letter (Current Year)", url: "/aicte-approval.pdf", category: "Regulatory" },
    { title: "Anti-Ragging Committee Details", url: "/Anti-ragging-committed.pdf", category: "Committees" },
    { title: "Grievance Redressal Mechanism", url: "/grievance-redressal.pdf", category: "Committees" },
    { title: "Internal Complaint Committee", url: "/internal-committee.pdf", category: "Committees" },
    { title: "SC/ST Committee Setup", url: "/sc-st_committee.pdf", category: "Committees" },
    { title: "All Room/Faculty/Area Detail", url: "#", category: "Infrastructure" },
    { title: "Library & Lab Resources Disclosure", url: "/library-lab-resources.pdf", category: "Infrastructure" }
  ];

  const regulatoryDocs = documentation.filter(d => d.category === "Regulatory");
  const committeeDocs = documentation.filter(d => d.category === "Committees");
  const infraDocs = documentation.filter(d => d.category === "Infrastructure");

  const DocBlock = ({ title, docs, icon: Icon }: { title: string, docs: typeof documentation, icon: any }) => (
    <section className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-border/40">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 p-4 rounded-2xl shadow-inner">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h2 className="text-3xl font-black text-primary tracking-tight">{title}</h2>
            <p className="text-sm text-muted-foreground font-medium">Download official {title.toLowerCase()} records</p>
          </div>
        </div>
        <div className="bg-accent/10 px-4 py-2 rounded-full text-accent-foreground text-xs font-black uppercase tracking-widest border border-accent/20">
          Updated for 2025-26
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {docs.map((doc, i) => (
          <a 
            key={i} 
            href={doc.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col p-8 bg-muted/20 rounded-[2rem] border-2 border-transparent hover:border-primary/30 hover:bg-white hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-primary/60 bg-primary/5 px-2 py-1 rounded-md">
                {doc.category}
              </span>
              <div className="text-primary/40 group-hover:text-primary transition-colors">
                <FileDown className="h-5 w-5" />
              </div>
            </div>
            <h3 className="text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors leading-snug">
              {doc.title}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );

  return (
    <div className="pb-20">
      <div className="bg-primary text-primary-foreground py-20 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Mandatory Disclosure</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            In compliance with AICTE norms, Laxmidhar Polytechnic College maintains full transparency regarding our records and governance.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 space-y-16">
        {/* Separate Blocks for Categories */}
        <DocBlock title="Regulatory Approvals" docs={regulatoryDocs} icon={Landmark} />
        <DocBlock title="Committees & Governance" docs={committeeDocs} icon={ShieldCheck} />
        <DocBlock title="Infrastructure Resources" docs={infraDocs} icon={FileText} />

        {/* Info Box */}
        <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 text-center">
          <p className="text-sm text-muted-foreground font-medium flex items-center justify-center gap-2">
            <Download className="h-4 w-4 text-primary" /> Documents will open in a new browser window/tab for secure viewing.
          </p>
        </div>

        {/* Institutional Tables */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Card className="border-none shadow-2xl bg-white overflow-hidden rounded-[2.5rem]">
            <CardHeader className="bg-primary p-8 text-primary-foreground">
              <CardTitle className="flex items-center gap-3 text-2xl font-black tracking-tight">
                <Landmark className="h-7 w-7 text-accent" /> Institutional Profile
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-8">
              <Table>
                <TableBody>
                  <TableRow className="hover:bg-transparent border-b border-muted/50"><TableCell className="font-black text-muted-foreground uppercase text-[10px] tracking-widest py-4">Institute Name</TableCell><TableCell className="font-bold text-primary">Laxmidhar Polytechnic College</TableCell></TableRow>
                  <TableRow className="hover:bg-transparent border-b border-muted/50"><TableCell className="font-black text-muted-foreground uppercase text-[10px] tracking-widest py-4">Affiliation</TableCell><TableCell className="font-bold">BTER Jodhpur, Rajasthan</TableCell></TableRow>
                  <TableRow className="hover:bg-transparent border-b border-muted/50"><TableCell className="font-black text-muted-foreground uppercase text-[10px] tracking-widest py-4">Approval</TableCell><TableCell className="font-bold">AICTE New Delhi</TableCell></TableRow>
                  <TableRow className="hover:bg-transparent border-b border-muted/50"><TableCell className="font-black text-muted-foreground uppercase text-[10px] tracking-widest py-4">Email</TableCell><TableCell className="font-bold text-primary">laxmindharpoly@gmail.com</TableCell></TableRow>
                  <TableRow className="hover:bg-transparent border-b border-muted/50"><TableCell className="font-black text-muted-foreground uppercase text-[10px] tracking-widest py-4">Chairman</TableCell><TableCell className="font-bold">Mahendra Singh Choudhary</TableCell></TableRow>
                  <TableRow className="hover:bg-transparent border-none"><TableCell className="font-black text-muted-foreground uppercase text-[10px] tracking-widest py-4">Registration</TableCell><TableCell className="font-bold">13/alwar/1999</TableCell></TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="border-none shadow-2xl bg-white overflow-hidden rounded-[2.5rem]">
            <CardHeader className="bg-accent p-8 text-accent-foreground">
              <CardTitle className="flex items-center gap-3 text-2xl font-black tracking-tight">
                <ShieldCheck className="h-7 w-7 text-primary" /> Course Matrix
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-8">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent border-b-2 border-muted">
                    <TableHead className="text-muted-foreground uppercase text-[10px] font-black py-4">Program Name</TableHead>
                    <TableHead className="text-muted-foreground uppercase text-[10px] font-black py-4">Duration</TableHead>
                    <TableHead className="text-muted-foreground uppercase text-[10px] font-black py-4 text-right">Intake</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="hover:bg-transparent border-b border-muted/50"><TableCell className="font-bold py-5">Mechanical Engineering</TableCell><TableCell className="font-medium">3 Years</TableCell><TableCell className="font-black text-primary text-right">60</TableCell></TableRow>
                  <TableRow className="hover:bg-transparent border-b border-muted/50"><TableCell className="font-bold py-5">Civil Engineering</TableCell><TableCell className="font-medium">3 Years</TableCell><TableCell className="font-black text-primary text-right">60</TableCell></TableRow>
                  <TableRow className="hover:bg-transparent border-none"><TableCell className="font-bold py-5">Electrical Engineering</TableCell><TableCell className="font-medium">3 Years</TableCell><TableCell className="font-black text-primary text-right">60</TableCell></TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
