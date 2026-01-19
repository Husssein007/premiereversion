import heroBanner from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      <img
        src={heroBanner}
        alt="Salma Dialogue Business Forum"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg small-caps">
          Agenda
        </h1>
        <p className="text-xl md:text-3xl font-bold text-white/90 mb-2 drop-shadow-md">
          SALMA Dialogue Business forum 
        </p>
        
                <p className="text-xl md:text-2xl  text-white/90 mb-2 drop-shadow-md">
          For South-South & Triangulaire coopération 
        </p>
        <p className="text-lg md:text-xl text-white/80 drop-shadow-md">
         Sénégal 2026
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
