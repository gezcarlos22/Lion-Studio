"use client";
import React, { useState, useEffect } from "react";
import { servicesData } from "../data";
import { ServiceCard } from "./serviceCard";

const CardService = () => {
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">("desktop");

  // Detectar tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScreenSize("mobile"); // < md
      } else if (window.innerWidth < 1024) {
        setScreenSize("tablet"); // md hasta < lg
      } else {
        setScreenSize("desktop"); // lg en adelante
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //  Layout para móvil
  if (screenSize === "mobile") {
    return (
      <div className="flex flex-col space-y-6">
        {servicesData.map((service, idx) => (
          <ServiceCard
            key={idx}
            image={service.image}
            title={service.title}
            description={service.description}
            buttonHref={service.buttonHref}
            height="200px"
            width="full"
            isBackgroundBlack={true}
          />
        ))}
      </div>
    );
  }

  // Layout para tablet
  if (screenSize === "tablet") {
    return (
      <div className="flex flex-col space-y-6">
        {servicesData.map((service, idx) => (
          <ServiceCard
            key={idx}
            image={service.image}
            title={service.title}
            description={service.description}
            buttonHref={service.buttonHref}
            isLarge={true}
            isBackgroundBlack={true}
          />
        ))}
      </div>
    );
  }

  //  Layout para escritorio
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-row space-x-6">
        <ServiceCard
          image={servicesData[0].image}
          title={servicesData[0].title}
          description={servicesData[0].description}
          buttonHref={servicesData[0].buttonHref}
          isBackgroundBlack={true}
        />

        <div className="flex flex-col space-y-6">
          <ServiceCard
            image={servicesData[1].image}
            title={servicesData[1].title}
            description={servicesData[1].description}
            buttonHref={servicesData[1].buttonHref}
            isLarge={true}
            isBackgroundBlack={false}
            reverseOrder={true}
            colorText="text-black"
            colorBorder="border-black"
            colorButton="text-black"
            colorBorderHover="hover:border-white"
            colorButtonHover="hover:text-white"
          />
          <ServiceCard
            image={servicesData[2].image}
            title={servicesData[2].title}
            description={servicesData[2].description}
            buttonHref={servicesData[2].buttonHref}
            isLarge={true}
            reverseOrder={true}
            background="bg-green"
            colorText="text-black"
            colorBorder="border-black"
            colorButton="text-black"
            colorBorderHover="hover:border-white"
            colorButtonHover="hover:text-white"
          />
        </div>
      </div>

      <div className="flex flex-row space-x-6">
        <ServiceCard
          image={servicesData[3].image}
          title={servicesData[3].title}
          description={servicesData[3].description}
          buttonHref={servicesData[3].buttonHref}
          isLarge={true}
          isBackgroundBlack={true}
        />
        <ServiceCard
          image={servicesData[4].image}
          title={servicesData[4].title}
          description={servicesData[4].description}
          buttonHref={servicesData[4].buttonHref}
          height="200px"
          isBackgroundBlack={true}
        />
      </div>
    </div>
  );
};

export default CardService;
