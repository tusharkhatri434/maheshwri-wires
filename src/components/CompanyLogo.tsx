
import { cn } from "@/lib/utils";

interface CompanyLogoProps {
  className?: string;
}

const CompanyLogo = ({ className }: CompanyLogoProps) => {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <div className="h-14 w-auto"> {/* Slightly increased size from h-12 to h-14 */}
        <img 
          alt="Maheshwari Wires Logo" 
          className="h-full w-auto object-contain" 
          src="/lovable-uploads/4b08319e-d6ea-4de7-b408-d2e3836e50e1.png" 
        />
      </div>
      <div className="hidden">
        {/* Text removed as it's now included in the logo image */}
        <span className="text-xl font-bold text-brand-blue">MAHESHWARI</span>
        <span className="text-sm text-zinc-900 font-semibold">WIRES PVT.LTD</span>
      </div>
    </div>
  );
};

export default CompanyLogo;
