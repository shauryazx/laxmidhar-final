import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Landmark, FileText, Download, ShieldCheck, Users, Building2, Lightbulb } from "lucide-react";

export default function DisclosurePage() {
  const disclosureSections = [
    {
      title: "Summary of Mandatory Disclosures (Annexure 10)",
      icon: FileText,
      docs: [
        { name: "Mandatory Disclosure Report 2024-25", url: "#" },
        { name: "Annexure 10 Detailed Compliance", url: "#" },
      ]
    },
    {
      title: "Regulatory Approvals",
      icon: Landmark,
      docs: [
        { name: "EOA Report 2025-26", url: "/EOA-Report-2025-26.pdf" },
        { name: "AICTE Extension of Approval (Previous Year)", url: "#" },
      ]
    },
    {
      title: "Infrastructure & Faculty Details",
      icon: Building2,
      docs: [
        { name: "All Room / Faculty / Area Details", url: "/all-room-faculty-arae-detail.pdf" },
        { name: "Laboratory Resources & Equipment Details", url: "#" },
        { name: "Library Resources & e-Journal Details", url: "#" },
      ]
    },
    {
      title: "Grievance Redressal Committee",
      icon: ShieldCheck,
      docs: [
        { name: "Grievance Redressal Mechanism Notification", url: "/grievance-redressal.pdf" },
        { name: "Committee Members & Contact Details", url: "#" },
      ]
    },
    {
      title: "Committee for SC & ST Students",
      icon: Users,
      docs: [
        { name: "SC/ST Committee Constitution", url: "/sc-st_committee.pdf" },
        { name: "Action Plan & Support Services", url: "#" },
      ]
    },
    {
      title: "Internal Complaint Committee",
      icon: ShieldCheck,
      docs: [
        { name: "Internal Complaint Committee (ICC) Setup", url: "/internal-committee.pdf" },
        { name: "Anti-Sexual Harassment Policy", url: "#" },
      ]
    },
    {
      title: "Entrepreneurship Development Cell",
      icon: Lightbulb,
      docs: [
        { name: "EDC Establishment & Objectives", url: "#" },
        { name: "EDC Activities & Student Initiatives", url: "#" },
      ]
    }
  ];

  return (
    <div className="pb-20 bg-muted/30 min-h-screen">
      <div className="bg-primary text-primary-foreground py-16 mb-12 shadow-md">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-black mb-4 tracking-tight uppercase">Mandatory Disclosure</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-sm md:text-base font-medium">
            Official records and regulatory documentation as per AICTE and BTER Jodhpur norms.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl space-y-8">
        {/* Institutional Profile Summary */}
        <Card className="border-none shadow-lg overflow-hidden rounded-xl">
          <CardHeader className="bg-white border-b py-4">
            <CardTitle className="text-lg font-bold flex items-center gap-2 text-primary">
              <Landmark className="h-5 w-5" /> General Information
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableBody>
                <TableRow className="hover:bg-transparent">
                  <TableCell className="font-bold w-1/3 bg-muted/10">Institute Name</TableCell>
                  <TableCell>Laxmidhar Polytechnic College</TableCell>
                </TableRow>
                <TableRow className="hover:bg-transparent">
                  <TableCell className="font-bold bg-muted/10">Location</TableCell>
                  <TableCell>IN-3, M.I.A., RIICO, Alwar (Raj.)</TableCell>
                </TableRow>
                <TableRow className="hover:bg-transparent">
                  <TableCell className="font-bold bg-muted/10">AICTE Region</TableCell>
                  <TableCell>North-Western</TableCell>
                </TableRow>
                <TableRow className="hover:bg-transparent">
                  <TableCell className="font-bold bg-muted/10">Affiliation</TableCell>
                  <TableCell>BTER Jodhpur, Rajasthan</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Disclosure Tables */}
        {disclosureSections.map((section, idx) => (
          <Card key={idx} className="border-none shadow-lg overflow-hidden rounded-xl">
            <CardHeader className="bg-white border-b py-4">
              <CardTitle className="text-lg font-bold flex items-center gap-2 text-primary">
                <section.icon className="h-5 w-5 text-accent" />
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader className="bg-muted/20">
                  <TableRow>
                    <TableHead className="w-16 text-center font-bold">S.No</TableHead>
                    <TableHead className="font-bold">Description of Document</TableHead>
                    <TableHead className="w-32 text-center font-bold">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {section.docs.map((doc, docIdx) => (
                    <TableRow key={docIdx} className="hover:bg-primary/5 group">
                      <TableCell className="text-center font-medium text-muted-foreground">{docIdx + 1}</TableCell>
                      <TableCell className="font-semibold text-sm">{doc.name}</TableCell>
                      <TableCell className="text-center">
                        <a 
                          href={doc.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-accent transition-colors bg-primary/5 px-3 py-1.5 rounded-full"
                        >
                          <Download className="h-3 w-3" /> View PDF
                        </a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        ))}

        {/* Disclaimer Footer */}
        <div className="text-center pt-8 text-muted-foreground text-xs space-y-2">
          <p className="flex items-center justify-center gap-2">
            <ShieldCheck className="h-4 w-4" /> All documents are maintained in accordance with AICTE Process Handbook 2024-25.
          </p>
          <p>Last Updated: {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
        </div>
      </div>
    </div>
  );
}
