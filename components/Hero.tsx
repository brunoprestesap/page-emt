import React from "react";
import Image from "next/image";

import bgHero from "/public/emt.jpg";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-5 py-10 md:gap-16 lg:py-14 xl:flex-row w-full h-screen bg-gradient-to-r from-green-500 to-green-800">
      <div className="z-20 flex flex-1 flex-row w-full">
        <div className="flex flex-col">
          <h1 className="bold-32 lg:bold-64">
            Estimulação Magnética Transcraniana
          </h1>
          <p className="regular-16 lg:regular-20 mt-5 text-green-200 xl:max-w-[620px]">
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
              <span className="regular-16 lg:regular-20 ml-1">
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
        <div className="rounded-xl">
          <Image
            src={bgHero}
            alt="Dra. Camila"
            className="w-44 h-64 lg:w-[400px] lg:h-[auto] rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
