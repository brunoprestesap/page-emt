import React from "react";
import Image from "next/image";

import bgHero from "/public/assets/bgHero.png";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-5 py-10 md:gap-28 lg:py-20 xl:flex-row w-full h-screen bg-gradient-to-r from-green-500 to-green-800">
      <div className="relative z-20 flex flex-1 flex-col w-full">
        <h1 className="bold-32 lg:bold-64">
          Estimulação Magnética Transcraniana
        </h1>
        <p className="regular-16 lg:regular-20 mt-6 text-green-200 xl:max-w-[620px]">
          No Instituto Amparo, oferecemos uma abordagem inovadora e não invasiva
          para tratar a depressão e a ansiedade. Com a EMT, estimulamos áreas
          específicas do cérebro com pulsos magnéticos seguros e eficazes,
          ajudando a restaurar o equilíbrio químico e melhorar o humor.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={bgHero}
          alt="Dra. Camila"
          className="w-44 h-64 lg:w-[300px] lg:h-[450px]"
        />
      </div>
    </section>
  );
};

export default Hero;
