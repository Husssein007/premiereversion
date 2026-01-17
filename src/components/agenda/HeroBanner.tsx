import heroBanner from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[450px] md:h-[550px] overflow-hidden">
      <img
        src={heroBanner}
        alt="Salma Dialogue Business Forum"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl small-caps tracking-wider">
          Agenda
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-3 drop-shadow-lg font-semibold">
          Agenda Prévisionnel – Février 2026
        </p>
        <p className="text-lg md:text-xl lg:text-2xl text-white/85 drop-shadow-lg">
          Salma Dialogue Business Forum – Dakar, Sénégal
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
