import { AlertTriangle } from "lucide-react";

const ConfidentialBanner = () => {
  return (
    <div className="bg-destructive/5 border-b border-destructive/20">
      <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
        <AlertTriangle className="w-5 h-5 text-destructive shrink-0" />
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
          <span className="confidential-badge">PRÉVISIONNEL</span>
          <span className="text-sm text-destructive font-medium">
            CONFIDENTIEL – MERCI DE NE PAS PARTAGER
          </span>
        </div>
      </div>
    </div>
  );
};

export default ConfidentialBanner;
