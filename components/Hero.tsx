import React from "react";
import Image from "next/image";

import bgHero1 from "/public/assets/bgHero_1.png";
import bgHero2 from "/public/assets/bgHero_2.png";
import bgHero3 from "/public/assets/bgHero_3.png";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-5 py-10 md:gap-16 lg:py-0 md:flex-row w-full h-screen bg-gradient-to-r from-green-500 to-green-800">
      <div className="z-40 flex flex-1 flex-row w-full items-center">
        <div className="flex flex-col">
          <h1 className="bold-32 lg:bold-52">
            Estimulação Magnética Transcraniana
          </h1>
          <p className="regular-16 lg:regular-18 mt-5 text-green-200 xl:max-w-[620px]">
            No Instituto Amparo, oferecemos uma abordagem inovadora e não
            invasiva para tratar a depressão e a ansiedade. Com a EMT,
            estimulamos áreas específicas do cérebro com pulsos magnéticos
            seguros e eficazes, ajudando a restaurar o equilíbrio químico e
            melhorar o humor.
          </p>
          <div className="flex items-center gap-2 mt-5">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
            <p className="bold-16 lg:bold-20 text-green-90">
              100+
              <span className="regular-14 lg:regular-16 ml-1">
                Excelentes avaliações no Google
              </span>
            </p>
          </div>
          <div className="flex w-full gap-3 mt-5">
            <Button
              type="button"
              title="Agende sua consulta"
              variant="btn_green"
            />
          </div>
        </div>
      </div>
      <div className="h-full rounded-xl flex flex-row items-end">
        <div className="w-auto">
          <Image
            src={bgHero3}
            alt="Dra Camila"
            className="w-44 h-64 lg:w-[700px] lg:h-[500px] rounded-xl z-20 opacity-30"
          />
        </div>
        <div className="w-auto">
          <Image
            src={bgHero1}
            alt="Dra Camila"
            className="w-44 h-64 lg:w-[700px] lg:h-[500px] rounded-xl z-30"
          />
        </div>
        <div className="w-auto">
          <Image
            src={bgHero2}
            alt="Dra Camila"
            className="w-44 h-64 lg:w-[700px] lg:h-[500px] rounded-xl z-20 opacity-30"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
