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
        <div className="space-y-6 pt-30">
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

export const HeroContact= ({ title, title2, desc, hasButton = false }: HeroTitleProps) => {
    return (
        <div className="w-full flex flex-col lg:flex-row pt-30 gap-10">
            <div className="space-y-6">
                <h3 className="text-ms md:text-lg font-bold text-white tracking-[10px]">
                    LION STUDIO
                </h3>

                <h1 className="text-4xl md:text-5xl xl:text-7xl font-extrabold text-white uppercase">
                    {title}<span className="text-green"> {title2}</span>
                </h1>

                <div className="flex flex-row items-center justify-between ">
                    <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-white whitespace-pre-line">
                    {desc}
                    </h2>
                    {hasButton && <Button text="explorar" href="/"/>}
                </div>
            </div>
            <div className="flex items-center justify-center mb-5">
                <FormularioContacto/>
            </div>
        </div>
    );
};
