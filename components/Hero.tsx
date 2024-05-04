import React from "react";
import Image from "next/image";

import bgHero from "/public/assets/bgHero.png";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 md:gap-28 lg:py-20 xl:flex-row w-full h-screen bg-gradient-to-r from-green-500 to-green-800">
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-32 lg:bold-64">
          Estimulação Magnética Transcraniana
        </h1>
        <p className="regular-16 lg:regular-20 mt-6 text-green-200 xl:max-w-[520px]">
          No Instituto Amparo, oferecemos uma abordagem inovadora e não invasiva
          para tratar a depressão e a ansiedade. Com a EMT, estimulamos áreas
          específicas do cérebro com pulsos magnéticos seguros e eficazes,
          ajudando a restaurar o equilíbrio químico e melhorar o humor.
        </p>
      </div>
    </section>
  );
};

export default Hero;
