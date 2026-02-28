
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <Loader2 className="h-12 w-12 text-primary animate-spin" />
      <p className="text-muted-foreground font-medium animate-pulse">Loading Laxmidhar College Connect...</p>
    </div>
  );
}
