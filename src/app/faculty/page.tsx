import { Users, FileText, Download } from "lucide-react";
import Link from "next/link";

export default function FacultyPage() {
  const facultyDoc = {
    name: "List of Faculty Members & Qualifications",
    filename: "staff-details.pdf"
  };

  return (
    <div className="pb-20 bg-muted/30 min-h-screen">
      <div className="bg-primary text-primary-foreground py-16 mb-12 shadow-md">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-black mb-4 tracking-tight uppercase italic">Our Faculty</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-sm md:text-base font-medium">
            Meet the academic leaders and technical experts driving engineering excellence at Laxmidhar Polytechnic College.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
          <div className="p-6 bg-muted/10 border-b flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-bold text-primary">{facultyDoc.name}</h2>
            </div>
            <Link 
              href={`/${facultyDoc.filename}`} 
              target="_blank"
              className="inline-flex items-center gap-2 text-xs font-black bg-primary text-white px-4 py-2 rounded-xl hover:bg-primary/90 transition-all uppercase tracking-tighter"
            >
              <Download className="h-4 w-4" /> 
              Download Original PDF
            </Link>
          </div>
          
          <div className="relative w-full h-[800px] bg-white">
            <iframe 
              src={`/${facultyDoc.filename}#toolbar=0`} 
              className="w-full h-full border-none"
              title={facultyDoc.name}
            />
            {/* Overlay to encourage download if iframe fails or on mobile */}
            <div className="md:hidden absolute inset-0 bg-white/80 flex flex-col items-center justify-center p-6 text-center">
              <FileText className="h-16 w-16 text-primary mb-4" />
              <p className="font-bold mb-4">The PDF viewer might not be supported on your mobile device.</p>
              <Link 
                href={`/${facultyDoc.filename}`} 
                target="_blank"
                className="bg-primary text-white px-6 py-3 rounded-full font-bold"
              >
                Open Faculty List
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-muted-foreground text-[10px] uppercase tracking-[0.2em] opacity-60">
          <p>This list is maintained in accordance with AICTE & BTER Jodhpur regulatory norms.</p>
          <p>Last Updated: {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
        </div>
      </div>
    </div>
  );
}
