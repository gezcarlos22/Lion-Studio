
import React from "react";
import { StaticImageData } from 'next/image';
import { Button3 } from "./button";

interface ServiceCardProps {
  image: string | StaticImageData;
  title: string;
  description: string;
  buttonHref: string;
  width?: string;
  height?: string;
  isLarge?: boolean;
  background?: string;
  isBackgroundBlack?: boolean;
  reverseOrder?: boolean;
  colorText?: string;
    colorButton?:string;
    colorButtonHover?:string;
    colorBorder?:string;
    colorBorderHover?:string;
}

export const ServiceCard = ({ 
  image, 
  title, 
  description, 
  buttonHref,
  width,
  height,
  isLarge = false,
  background,
  isBackgroundBlack = false,
  colorText= "text-white",
  colorButton,
  colorButtonHover,
  colorBorder,
  colorBorderHover,
  reverseOrder = false,
}: ServiceCardProps) => {

  const baseBackgroundColorClass = background 
    ? background 
    : (isBackgroundBlack ? 'bg-[#212121]' : 'bg-[#ffffff]');

  const cardContainerClasses = `
    relative flex flex-col justify-between rounded-4xl overflow-hidden hover:scale-105
    ${baseBackgroundColorClass} /* Apply the background color here */
    ${width ? width : (isLarge ? 'w-[570px]' : 'w-[350px]')}
    ${height ? height : (isLarge ? 'h-[200px]' : 'h-[420px]')}
  `;

  const contentClasses = `
    relative z-10 p-8 flex flex-col justify-between h-full
    ${reverseOrder ? 'flex-col-reverse' : ''}
  `;

  return (
    <div 
      className={cardContainerClasses}
    >
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3, 
          zIndex: 0,    
        }}
      />
      
      <div className={contentClasses}>
          <div className={`space-x-4 ${colorText}`}>
              <h3 className="text-3xl font-bold">{title}</h3>
              <h4 className="w-[70%] text-lg">{description}</h4>
          </div>
          <div className="flex justify-end">
              <Button3 href={buttonHref} colorBorder={colorBorder} colorButton={colorButton} colorBorderHover={colorBorderHover} colorButtonHover={colorButtonHover}/>
          </div> 
      </div>
    </div>
  );
};
