import { AlertTriangle } from "lucide-react";

const ConfidentialBanner = () => {
  return (
    <div className="bg-destructive/5 border-b-2 border-destructive/20">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
        <AlertTriangle className="w-6 h-6 text-destructive shrink-0" />
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <span className="confidential-badge">PRÉVISIONNEL</span>
          <span className="text-sm sm:text-base text-destructive font-bold tracking-wide">
            CONFIDENTIEL – MERCI DE NE PAS PARTAGER
          </span>
        </div>
      </div>
    </div>
  );
};

export default ConfidentialBanner;
