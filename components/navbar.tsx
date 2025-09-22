"use client";
import React, { useState, JSX, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

interface NavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
}

export const Navbar: React.FC<FloatingNavProps> = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Cambia a fixed después de 50px de scroll
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`flex items-center justify-between py-2 px-5 md:px-10 lg:px-20 w-full transition-all duration-100 z-20 ${isScrolled ? 'fixed top-0 left-0 right-0 z-50 bg-[#000000]/80 backdrop-blur-sm px-5 md:px-10 lg:px-20' : 'relative'}`}>
      {/* Logo */}
      <div className="flex items-center">
        <Link href={"/"}>
          <Image
            src="/img/logo_a.png"
            alt="logotipo de LION STUDIO"
            className="object-cover"
            width={50}
            height={50}
            priority
          />
        </Link>
      </div>

      {/* Links en desktop */}
      <div className="hidden md:flex items-center justify-center flex-grow mx-8">
        <div className="flex space-x-8 lg:space-x-14">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link-${idx}-${navItem.name}`}
              href={navItem.link}
              className="relative text-white items-center flex space-x-1 hover:text-green"
            >
              <span className="font-bold text-lg cursor-pointer uppercase">
                {navItem.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Botón de contacto en desktop */}
      <div className="hidden md:flex items-center space-x-4">
        <Link href="/contact">
          <button className="border rounded-lg font-medium relative px-6 py-2 rounded-full text-white hover:bg-white hover:text-black">
            <span className="text-sm">CONTACTO</span>
          </button>
        </Link>
      </div>

      {/* Botón hamburguesa en móvil/tablet */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <div className={`absolute top-full right-0 w-full bg-[#000000]/90 backdrop-blur-sm text-white flex flex-col items-center space-y-6 py-6 md:hidden z-50 ${isScrolled ? 'mt-0' : ''}`}>
          {navItems.map((navItem, idx) => (
            <Link
              key={`mobile-link-${idx}-${navItem.name}`}
              href={navItem.link}
              className="text-lg font-bold uppercase hover:text-green"
              onClick={() => setIsOpen(false)}
            >
              {navItem.name}
            </Link>
          ))}

          <Link href="/contact">
            <button
              onClick={() => setIsOpen(false)}
              className="border rounded-lg font-medium px-6 py-2 text-white hover:bg-white hover:text-black"
            >
              <span className="text-sm">CONTACTO</span>
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};
