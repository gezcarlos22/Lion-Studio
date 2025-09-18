import React from "react";
import {Button} from "./button";
import FormularioContacto from "./forms";


interface HeroTitleProps {
    title?: string;
    title2?: string;
    desc?: string;
    hasButton?: boolean;
}

export const Hero = ({ title, title2, desc, hasButton = false }: HeroTitleProps) => {
    return (
        <div className="space-y-6">
            <h3 className="text-ms md:text-lg font-bold text-white tracking-[10px]">
                LION STUDIO
            </h3>

            <h1 className="text-4xl md:text-7xl font-extrabold text-white uppercase">
                {title}<span className="text-green"> {title2}</span>
            </h1>

            <div className="flex flex-col gap-5 md:flex-row md:items-center justify-between">
                <h2 className="text-md md:text-2xl font-bold text-white w-5/6">
                {desc}
                </h2>
                {hasButton && <Button text="explorar" href="/"/>}
            </div>
        </div>
    );
};

export const HeroAbout = ({ title, title2, desc, hasButton = false }: HeroTitleProps) => {
    return (
        <div className="flex flex-col lg:flex-row justify-between gap-10 ">
            <div className="space-y-6 w-full lg:w-2/4">
                <h3 className="text-ms md:text-lg font-bold text-white tracking-[10px]">
                    LION STUDIO
                </h3>

                <h1 className="text-4xl md:text-7xl font-extrabold text-white uppercase">
                    {title}<span className="text-green"> {title2}</span>
                </h1>

                <div className="flex flex-row items-center justify-between">
                    <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-white">
                    {desc}
                    </h2>
                    {hasButton && <Button text="explorar" href="/"/>}
                </div>
            </div>
            <div className="w-full h-[450px] lg:w-[600px] lg:h-[725px] border-8 border-black rounded-2xl">
                <video autoPlay muted style={{width:"100%", height:"100%", objectFit:"cover", borderRadius:8}} loop>
                    <source src={"/video/video-grupo.mp4"} type="video/mp4"></source>
                </video>
            </div>
        </div>
    );
};

export const HeroContact= ({ title, title2, desc, hasButton = false }: HeroTitleProps) => {
    return (
        <div className="flex flex-col lg:flex-row justify-between space-y-10">
            <div className="space-y-6 w-full lg:w-2/4">
                <h3 className="text-ms md:text-lg font-bold text-white tracking-[10px]">
                    LION STUDIO
                </h3>

                <h1 className="text-4xl md:text-7xl font-extrabold text-white uppercase">
                    {title}<span className="text-green"> {title2}</span>
                </h1>

                <div className="flex flex-row items-center justify-between ">
                    <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-white whitespace-pre-line">
                    {desc}
                    </h2>
                    {hasButton && <Button text="explorar" href="/"/>}
                </div>
            </div>
            <div className="flex items-center justify-center">
                <FormularioContacto/>
            </div>
        </div>
    );
};
