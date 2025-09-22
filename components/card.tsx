import React from "react";
import { Button2 } from "./button";

interface HeroTitleProps {
  id?:string;
  title?: string;
  desc?: string;
  textButton?: string;
  href?: string;
  image?: string;
  video?: string;
  reverseOrder?:boolean;
}

const Card = ({id, title, desc, textButton, href = "/", image = "/", video, reverseOrder = false}: HeroTitleProps) => {

  const contentClasses = `
    flex flex-col justify-around w-full gap-10 lg:flex-row
    ${reverseOrder ? 'flex-col-reverse lg:flex-row-reverse' : ''}
  `;

  const buttonOrder = `${reverseOrder ? 'flex justify-end' : ''}`;
  const mediaClasses = "rounded-4xl lg:mx-0 lg:px-0 lg:w-[500px] lg:h-[650px]";

  return (
    <div className={contentClasses}>
      <div id={id} className="flex flex-col justify-around w-full h-full space-y-6" >
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-black uppercase">
          {title}
        </h2>
        <div className="text-md md:text-lg lg:text-xl xl:text-2xl font-bold text-black">
            <p className="mb-4 whitespace-pre-line">
              {desc}
            </p>
        </div>
        <div className={buttonOrder}>
          <Button2 text={textButton} href={href}/>
        </div>
      </div>
      
      {/* Render condicional de imagen o video */}
      {video ? (
        <video 
          autoPlay 
          muted 
          loop
          className={mediaClasses}
          style={{objectFit: "cover"}}
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <img className={mediaClasses} src={image} alt="Background" />
      )}
      
    </div>
  );
};

export default Card;