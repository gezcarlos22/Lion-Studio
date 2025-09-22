import React from "react";
import {Button, ButtonRedes} from "./button";
import Image from "next/image";
import { FaMapMarkerAlt, FaAt, FaCity } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import Link from "next/link";
import { navItems } from "../data";

interface FooterVideoProps {
    title:string,
    title2:string,
    desc:string,
    video:string
}

export const FooterVideo = ({title, title2,desc,video}: FooterVideoProps) => {
  return (
      <div className="flex flex-col space-y-10">
        <div className="relative w-full h-[650px] md:h-[850px] overflow-hidden">
          <div className="absolute inset-0">
            <video autoPlay muted style={{ width: "100%", height: "100%", objectFit: "cover", borderTopLeftRadius:"50px", borderTopRightRadius:"50px"  }} loop>
              <source src={video} type="video/mp4"></source>
            </video>
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase">
              {title}<span className="text-green">{title2}</span>
            </h2>
            <div className="text-md md:text-3xl w-[80%] md:w-[60%] font-bold text-white">
              <p className="mb-4">
                {desc}
              </p>
            </div>
            <Button text="CONTACTAME" href="/contact" />
          </div>
        </div>
        
      </div>
    );
};

export const Footer = () => {
    return (
        <div className="flex flex-col h-full w-full items-center bg-[#000000] z-10 pb-[160px] sm:pb-[100px]">
            <div className="w-[100%] px-5 md: md:px-10 lg:px-20 space-y-10">
                <div className="flex flex-col lg:flex-row justify-between items-center mt-[-65px] md:mt-[-40px] lg:mt-[-45px] xl:mt-[-65px] ">
                    <h2 className="text-3xl md:text-5xl/15 font-bold text-white uppercase">
                        <span className="text-[#000000]">Sigeme por las redes</span> <br/>para ver proyectos <br/>profesionales de <span className="text-green"> Lion Studio.</span>
                    </h2>
                    <div className="flex justify-center items-center bg-white p-2 md:w-[380px] md:h-[220px] border-8 border-black rounded-2xl">
                        <div className="space-y-2">
                            <div className="flex flex-row space-x-2"> 
                                <ButtonRedes href="https://www.youtube.com/@lionstudio4511" icons="youtube"/>
                                <ButtonRedes href="/" icons="tiktok"/>
                            </div>
                            <div className="flex flex-row space-x-2">
                                <ButtonRedes href="https://www.instagram.com/lionstudio.cba/" icons="instagram"/>
                                <ButtonRedes href="/" icons="twitter"/>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5 lg:flex-row items-center justify-around content-center">
                    <div className="relative mr-2">
                                <Image
                                  src="/img/logo_b.png"
                                  alt="logotipo de LION STUDIO"
                                  className="object-cover"
                                  width={180}
                                  height={70}
                                  priority
                                />
                    </div>
                    <div className="text-md font-normal text-white">
                        <div className="flex flex-row items-center space-x-2 hover:text-green">
                            <FaMapMarkerAlt />
                            <p>Montevideo 1111 - Piso: 1 - Depto: E</p>
                        </div>
                        <div className="flex flex-row items-center space-x-2 hover:text-green">
                            <FaCity />
                            <p>Cordoba - Argentina </p>
                        </div>
                        <div className="flex flex-row items-center space-x-2 hover:text-green">
                            <FaAt />
                            <p>lionstudio@gmail.com</p>
                        </div>
                        <div className="flex flex-row items-center space-x-2 hover:text-green">
                            <BsFillTelephoneFill />
                            <p>(+54) 3544-111111</p>
                        </div>
                    </div>
                    <div className="flex space-x-4 md:space-x-10">
                        {navItems.map((navItem, idx) => (
                        <Link
                            key={`link-${idx}-${navItem.name}`} // Cambiado a clave más única
                            href={navItem.link}
                            className="relative text-white items-center flex space-x-1 hover:text-green"
                        >
                            <span className="font-bold text-xs md:text-lg cursor-pointer uppercase">{navItem.name}</span>
                        </Link>
                        ))}
                    </div>
                </div>
                <div className="bg-white w-full h-[50px] mt-10 pt-[2px] rounded-full">
                    <div className="bg-[#000000] w-full h-[50px] rounded-full">
                        <div className="flex flex-col justify-center items-center text-center text-neutral-500 text-sm uppercase pt-5">
                            <h3>Impulsamos artistas y empresas a través de nuestros servicios.</h3>
                            <h4>© 2025 lion studio Todos Los Derechos Reservados. <Link href={"/"}><span className="text-white">Productora Musical.</span></Link></h4>
                            <Link href={"https://gez-carlos.vercel.app/"}>
                            <div className="flex flex-col justify-center items-center text-green ">                                
                                    <h5>Diseño</h5>
                                    <Image
                                    src="/img/logo-cg-gris.png"
                                    alt="logotipo de LION STUDIO"
                                    className="object-cover"
                                    width={70}
                                    height={70}
                                    priority
                                    />                                
                            </div>
                            </Link>
                            
                        </div>
                        
                    </div>
                </div>
                
            </div>      
      </div>
    )
}