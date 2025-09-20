import React from "react";
import { servicesAll } from "../data";

// No necesitas desestructurar individualmente si vas a mapear
// Pero si prefieres mantenerlo así:
const grabacion = servicesAll[0];
const afinacion = servicesAll[1];
const sonido = servicesAll[2];
const mescla = servicesAll[3];
const beats = servicesAll[4];

interface ServiceProps {
  title?: string;
  desc?: string;
  hight?: string;
  marginTop?: string;
  marginTopText?: string;
  image?: string;
  video?: string;
  background?: string;
  isBackgroundBlack?: boolean;
  alineText?:boolean;
  textColor?:string;
}

export const ServiceContent = ({
  title,
  desc,
  hight = "500px",
  marginTop = "0px",
  marginTopText = "0px",
  image,
  video,
  background,
  isBackgroundBlack = false,
  alineText=false,
  textColor
}: ServiceProps) => {

  const containerStyle = {
    height: hight,
    marginTop: marginTop
  };

  const contentStyle = {
    marginTop: marginTopText
  };

  const baseBackgroundColorClass = background 
    ? background 
    : (isBackgroundBlack ? 'bg-[#212121]' : 'bg-[#ffffff]');

  const cardContainerClasses = `
    ${baseBackgroundColorClass} 
  `;

  const alineTextContent = alineText ? "text-right" : 'text-left'

  return (
    <div className={`relative w-full overflow-hidden`} style={containerStyle}>
      <div className={`absolute inset-0 z-0 ${cardContainerClasses}` }>
            {video ? (
            <video 
                autoPlay 
                muted 
                style={{ width: "100%", height: "100%", objectFit: "cover", zIndex: 10, opacity:0.4 }} 
                loop
                playsInline
            >
                <source src={video} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
            </video>
            ) : (
                <div 
                    className="absolute inset-0" 
                    style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.2, 
                    zIndex: 10,    
                    }}
                />
            )}
      </div>

      <div className="relative h-full">
        <div 
          className="flex flex-col text-center justify-center items-center w-full h-full"
          style={contentStyle}
        >
          <div className={`w-[100%] px-5 md:px-10 ld:px-20 max-w-4xl flex flex-col space-y-6 py-10 ${textColor}`}>
            <h3 className={`text-2xl md:text-5xl font-extrabold uppercase ${alineTextContent}`}>
              {title}
            </h3>
            <p className="text-md md:text-xl font-medium md:font-semibold whitespace-pre-line text-justify ">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AllServices = () => {
  return (
    <div>
      <ServiceContent
        title={grabacion.title} 
        desc={grabacion.desc} 
        image={grabacion.image}
        hight="750px" 
        marginTop="-50px" 
        marginTopText="75px"
        isBackgroundBlack={true}
      />
      <ServiceContent
        title={afinacion.title} 
        desc={afinacion.desc} 
        video={afinacion.video}
        hight="600px"
        isBackgroundBlack={false}
        alineText={true}
        textColor="text-black"
      />
      <ServiceContent
        title={sonido.title} 
        desc={sonido.desc} 
        image={sonido.image}
        hight="600px"
        isBackgroundBlack={true}
      />
      <ServiceContent
        title={mescla.title} 
        desc={mescla.desc} 
        video={mescla.video}
        hight="650px"
        background="bg-green"
        alineText={true}
        textColor="text-black"
      />
      <ServiceContent
        title={beats.title} 
        desc={beats.desc} 
        image={beats.image}
        hight="650px" 
        isBackgroundBlack={true}
      />
    </div>
  );
};