import Link from "next/link";
import React from "react";
import { PiArrowUpRightBold } from "react-icons/pi";
import { FaYoutube, FaTiktok,  FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface ButtonProps {
  text?: string;
  href?: string;
}

export const Button = ({ text, href="/"  }: ButtonProps) => {
  return (
            <div className=" md:flex items-center">
                <Link href={href}>
                    <button className="rounded-lg bg-green px-6 py-2 cursor-pointer text-black font-bold uppercase hover:bg-white border-3 border-green">
                        <div className="flex flex-row items-center space-x-2">
                            <span className="text-lg">{text}</span>
                            <PiArrowUpRightBold className="text-black w-[25px] h-[25px] " />
                        </div>
                    </button>
                </Link>
             </div>
  );
};



export const Button2 = ({ text, href="/"  }: ButtonProps) => {
  return (
            <div className="md:flex items-center">
                <Link href={href}>
                    <button className="rounded-lg bg-black border-3 border-black px-6 py-2 cursor-pointer text-white font-bold uppercase hover:bg-white hover:text-black hover:border-3 hover:border-green">
                        <div className="flex flex-row items-center space-x-2">
                            <span className="text-lg">{text}</span>
                            <PiArrowUpRightBold className="text-green w-[25px] h-[25px] " />
                        </div>
                    </button>
                </Link>
             </div>
  );
};

interface ButtonIconProps {
    href?:string;
    colorButton?:string;
    colorButtonHover?:string;
    colorBorder?:string;
    colorBorderHover?:string;
}

export const Button3 = ({ href="/", colorButton="text-white",colorBorder="border-white", colorBorderHover="hover:border-black", colorButtonHover="hover:text-black",  }: ButtonIconProps) => {

  return (
            <div className=" md:flex items-center">
                <Link href={href}>
                    <button className={`rounded-lg p-2 cursor-pointer border-3 ${colorBorder}  ${colorButton}  hover:bg-green ${colorButtonHover} border-3 ${colorBorderHover}`}>
                        <div className="items-center">
                            <PiArrowUpRightBold className=" w-[25px] h-[25px]" />
                        </div>
                    </button>
                </Link>
             </div>
  );
};


const iconComponents = {
  youtube: FaYoutube,
  twitter: FaXTwitter,
  tiktok: FaTiktok,
  instagram: FaInstagram,
};

type IconName = keyof typeof iconComponents;

interface ButtonRedesProps {
  href?: string;
  icons?: IconName; 
}

export const ButtonRedes = ({ 
  href = '/', 
  icons = 'instagram'
}: ButtonRedesProps) => {

  const IconComponent = icons ? iconComponents[icons] : null;

  if (!IconComponent) {
    console.error(`Icon "${icons}" not found.`);
    return null; 
  }

  return (
    <div className="sm:flex items-center">
      <Link href={href}>
        <button className="rounded-4xl bg-green px-10 py-4 cursor-pointer text-black font-bold uppercase hover:bg-white border-3 border-green">
          <div className="flex flex-row items-center">
            <IconComponent className="text-black w-[40px] h-[40px]" />
          </div>
        </button>
      </Link>
    </div>
  );
};

