import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Landmark, FileText, ShieldCheck, Download, Users, Building2, GraduationCap, Gavel, FileSpreadsheet, FileImage } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function DisclosurePage() {
  const disclosureSections = [
    {
      title: "AICTE Mandate",
      icon: Gavel,
      documents: [
        { name: "AICTE-MANDATE", filename: "AICTE-MANDATE.xlsx", isSpreadsheet: true }
      ]
    },
    {
      title: "Approval Affidavit",
      icon: FileText,
      documents: [
        { name: "Official Approval Affidavit", filename: "Approval_affidavit.pdf" },
      ]
    },
    {
      title: "Regulatory Approval",
      icon: ShieldCheck,
      documents: [
        { name: "Extension of Approval (EOA) Report 2025-26", filename: "EOA-Report-2025-26.pdf" },
      ]
    },
 
    {
      title: "Statutory Committees",
      icon: Users,
      documents: [
        { name: "Grievance Redressal Committee Details", filename: "grievance-redressal.pdf" },
        { name: "Anti-Ragging Committee & Commitment", filename: "Anti-ragging-committed.pdf" },
        { name: "Internal Complaint Committee (ICC)", filename: "internal-committee.pdf" },
        { name: "Committee for SC & ST Students", filename: "sc-st_committee.pdf" },
      ]
    },
    {
      title: "Infrastructure & Academics",
      icon: Building2,
      documents: [
        { name: "Details of All Rooms, Faculty & Area", filename: "all-room-faculty-arae-detail.pdf" },
        { name: "Carpet Area Details", filename: "Carpet_Area_Details.pdf" },
        { name: "Approved Ground Floor Plan Blueprint", filename: "ground floor.jpg.jpeg", isImage: true },
        { name: "Approved First Floor Plan Blueprint", filename: "First.jpg.jpeg", isImage: true },
        { name: "Result Analysis & Enrollment of Students", filename: "result-analysis-and-enrollment-students.pdf" },
      ]
    },
    {
      title: "Placement & Training",
      icon: GraduationCap,
      documents: [
        { name: "Placement & Training Officer Details", filename: "placement-training-officer.pdf" },
      ]
    }
  ];

  return (
    <div className="pb-20 bg-muted/30 min-h-screen">
      <div className="bg-primary text-primary-foreground py-16 mb-12 shadow-md">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-black mb-4 tracking-tight uppercase italic">Mandatory Disclosure</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-sm md:text-base font-medium">
            Official records and regulatory documentation maintained in accordance with AICTE & BTER Jodhpur norms.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl space-y-12">
        {/* General Info Card */}
        <Card className="border-none shadow-lg overflow-hidden rounded-2xl">
          <CardHeader className="bg-white border-b py-4">
            <CardTitle className="text-lg font-bold flex items-center gap-2 text-primary">
              <Landmark className="h-5 w-5 text-accent" /> Institutional Profile Summary
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
                  <TableCell className="font-bold bg-muted/10">AICTE ID</TableCell>
                  <TableCell>1-3148111 (Reference AICTE Portal)</TableCell>
                </TableRow>
                <TableRow className="hover:bg-transparent">
                  <TableCell className="font-bold bg-muted/10">Affiliation</TableCell>
                  <TableCell>BTER Jodhpur, Rajasthan</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Disclosure Sections */}
        {disclosureSections.map((section, idx) => (
          <div key={idx} className="space-y-4">
            <div className="flex items-center gap-3 border-l-4 border-accent pl-4">
              <section.icon className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-black text-primary uppercase tracking-tight">{section.title}</h2>
            </div>
            
            <Card className="border-none shadow-md overflow-hidden rounded-xl">
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-muted/50">
                    <TableRow>
                      <TableHead className="w-16 text-center font-bold">Sr. No.</TableHead>
                      <TableHead className="font-bold">Document Description</TableHead>
                      <TableHead className="text-right font-bold px-6">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {section.documents.map((doc: any, dIdx) => (
                      <TableRow key={dIdx} className="hover:bg-muted/20 transition-colors">
                        <TableCell className="text-center font-medium text-muted-foreground align-top pt-6">{dIdx + 1}</TableCell>
                        <TableCell className="font-bold text-foreground/80 py-6">
                          <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2">
                              {doc.isSpreadsheet ? (
                                <FileSpreadsheet className="h-4 w-4 text-green-600" />
                              ) : doc.isImage ? (
                                <FileImage className="h-4 w-4 text-accent" />
                              ) : (
                                <FileText className="h-4 w-4 text-primary" />
                              )}
                              {doc.name}
                            </div>
                            {doc.isImage && (
                              <div className="mt-4 border-2 border-muted rounded-xl overflow-hidden shadow-sm max-w-full">
                                <Image 
                                  src={`/${doc.filename}`} 
                                  alt={doc.name} 
                                  width={1200} 
                                  height={800}
                                  className="w-full h-auto object-contain bg-white"
                                />
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="text-right px-6 align-top pt-6">
                          {!doc.isImage && (
                            <Link 
                              href={`/${doc.filename}`} 
                              target="_blank"
                              className="inline-flex items-center gap-2 text-xs font-black bg-primary/10 text-primary px-3 py-1.5 rounded-lg hover:bg-primary hover:text-white transition-all uppercase tracking-tighter"
                            >
                              <Download className="h-3 w-3" /> 
                              {doc.isSpreadsheet ? 'Download XLSX' : 'View PDF'}
                            </Link>
                          )}
                          {doc.isImage && (
                            <Link 
                              href={`/${doc.filename}`} 
                              target="_blank"
                              className="inline-flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest hover:text-primary transition-colors"
                            >
                              <Download className="h-3 w-3" /> Download Original
                            </Link>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        ))}

        {/* Disclaimer Footer */}
        <div className="text-center pt-8 text-muted-foreground text-[10px] space-y-2 uppercase tracking-[0.2em] opacity-60">
          <p className="flex items-center justify-center gap-2">
            <FileText className="h-3 w-3" /> All documents are maintained in accordance with AICTE Process Handbook 2025-26.
          </p>
          <p>Last Updated: {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
        </div>
      </div>
    </div>
  );
}
