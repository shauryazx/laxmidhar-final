import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Landmark, ShieldCheck, AlertCircle } from "lucide-react";

export default function DisclosurePage() {
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

        {/* Empty State / Coming Soon */}
        <Card className="border-2 border-dashed border-muted-foreground/20 bg-transparent rounded-2xl p-12 text-center">
          <div className="flex flex-col items-center justify-center gap-4 text-muted-foreground">
            <div className="bg-muted p-4 rounded-full">
              <AlertCircle className="h-10 w-10 opacity-40" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-foreground">Disclosures Pending Update</h3>
              <p className="text-sm max-w-sm mx-auto">
                Regulatory documents and committee details for the current academic session are being finalized and will be uploaded shortly.
              </p>
            </div>
          </div>
        </Card>

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
