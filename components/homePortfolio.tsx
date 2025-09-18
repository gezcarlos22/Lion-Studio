"use client"
import React, { useState } from "react";
import { Button, Button2 } from "./button";

const HeroPortfolio = () => {
  const [hoveredCard, setHoveredCard] = useState<null | 'main' | 'secondary1' | 'secondary2'>(null);

  return (
    <div className="flex flex-col space-y-10">
      {/* Card Principal */}
      <div 
        className="relative w-full h-[450px] border-8 border-black rounded-2xl overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105"
        onMouseEnter={() => setHoveredCard('main')}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <div className={`absolute inset-0 transition-all duration-500 ${hoveredCard === 'secondary2' ? 'bg-neutral-900/80' : 'bg-transparent'}`}>
          <video autoPlay muted style={{ width: "100%", height: "100%", objectFit: "cover", zIndex:10 }} loop>
            <source src={"/video/video-cantando.mp4"} type="video/mp4"></source>
          </video>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center space-y-6 z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase">
            portfolio
          </h2>
          <div className="text-md md:text-2xl w-[60%] font-bold text-white">
            <p className="mb-4">
              Explora nuestro trabajo para ver cómo ayudamos a artistas a encontrar su sonido ideal y a conectar con su audiencia de forma auténtica.
            </p>
          </div>
          <Button text="Explorar" href="/projects" />
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row justify-between h-[650px] lg:h-[450px] space-y-10 md:space-y-10 md:space-x-10">
        {/* Card Secundaria 1 */}
        <div 
          className="relative w-full h-full border-8 border-black rounded-2xl overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105"
          onMouseEnter={() => setHoveredCard('secondary1')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className={`absolute inset-0 transition-all duration-500 ${hoveredCard === 'secondary1' ? 'bg-neutral-900/80' : 'bg-transparent'}`}>
            <video autoPlay muted style={{width:"100%", height:"100%", objectFit:"cover", zIndex:10}} loop>
              <source src={"/video/video2.mp4"} type="video/mp4"></source>
            </video>
          </div>
          <div className={`absolute inset-0 transition-all duration-500 ${hoveredCard === 'secondary1' ? 'bg-green/70' : 'bg-transparent'}`}></div>
          {/* Contenido que aparece en hover */}
          <div className={`absolute inset-0 flex flex-col justify-center items-center text-center p-6 transition-opacity duration-500 ${hoveredCard === 'secondary1' ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 uppercase">Proyecto Musical</h3>
            <p className="text-black text-md font-bold md:text-base mb-6 max-w-md">
              Producción integral de un álbum completo con 10 temas, mezcla y mastering profesional.
            </p>
            <Button2 text="Ver Proyecto" href="/projects#proyecto_1" />
          </div>
        </div>
        
        {/* Card Secundaria 2 */}
        <div 
          className="relative w-full h-full border-8 border-black rounded-2xl overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105"
          onMouseEnter={() => setHoveredCard('secondary2')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className={`absolute inset-0 transition-all duration-500 ${hoveredCard === 'secondary2' ? 'bg-neutral-900/80' : ''}`}>
            <video autoPlay muted style={{width:"100%", height:"100%", objectFit:"cover", borderRadius:6}} loop>
              <source src={"/video/video-ampli.mp4"} type="video/mp4"></source>
            </video>
          </div>
          <div className={`absolute inset-0 transition-all duration-500 ${hoveredCard === 'secondary2' ? 'bg-green/70' : 'bg-transparent'}`}></div>
          {/* Contenido que aparece en hover */}
          <div className={`absolute inset-0 flex flex-col justify-center items-center text-center p-6 z-10 transition-opacity duration-500 ${hoveredCard === 'secondary2' ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 uppercase">Grabación en Vivo</h3>
            <p className="text-black text-md font-bold md:text-base mb-6 max-w-md">
              Sesión de grabación en vivo con múltiples cámaras y audio de alta fidelidad.
            </p>
            <Button2 text="Ver Proyecto" href="/projects#proyecto_2"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPortfolio;