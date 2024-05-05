import Image from "next/image";
import React from "react";

const Emt = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        {/* <Image src="/camp.svg" alt="camp" width={50} height={50} /> */}
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50 wrap">
          Descubra os Benefícios Exclusivos que Temos a Oferecer
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-20 lg:bold-32 xl:max-w-[390px]">
            Por que Escolher a Estimulação Magnética Transcraniana no Instituto
            Amparo?
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            No Instituto Amaparo, a Estimulação Magnética Transcraniana (EMT) se
            destaca pela personalização do tratamento, com uma equipe
            especializada que utiliza tecnologia avançada para garantir
            resultados eficazes. Além disso, a abordagem holística e o
            acompanhamento personalizado garantem que o paciente receba um
            cuidado completo e eficaz, diferenciando-nos da concorrência e
            garantindo uma experiência de tratamento superior.
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
          src="/dra.jpg"
          alt="Dra. Camila"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20 w-96 md:w-1/3">
          {/* <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          /> */}
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <h4 className="bold-16 md:bold-20 mt-2 whitespace-nowrap">
                Quem sou eu
              </h4>
              <p className="regular-14 md:regular-16 mt-3">
                Tenho 38 anos, sou goiana de coração, médica formada pela
                Universidade Federal do Amapá. Cursei pós-graduação em
                Psiquiatria pelo Albert Einstein do RJ e Psiquiatria
                Intervencionista pelo HC-USP. Além disso, fiz Enfermagem e
                Mestrado pela UNICAMP. Trabalho desde 2019 ajudando pessoas a
                encontrar equilíbrio e tranquilidade emocional. Já trabalhei
                também em CAPS infantil, CAPS Álcool e drogas e Clínica de
                Reabilitação. Prezo pelo atendimento responsável e humanizado e
                será uma grande satisfação atender você e poder te ajudar
                também.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Emt;
