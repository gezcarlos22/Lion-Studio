import { useState, useEffect } from "react";

interface CarouselImage {
  image: string;
  alt: string;
}

interface CarouselProps {
  images: CarouselImage[];
  autoPlay?: boolean;
  interval?: number;
}

export const CarouselImg = ({ 
  images, 
  autoPlay = true, 
  interval = 5000 
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para avanzar al siguiente slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Función para retroceder al slide anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Función para ir a un slide específico
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Efecto para el desplazamiento automático
  useEffect(() => {
    if (!autoPlay) return;
    
    const timer = setInterval(() => {
      nextSlide();
    }, interval);
    
    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  return (
    <div className="relative h-[650px] w-full rounded-4xl overflow-hidden">
      {/* Contenedor del carousel */}
      <div 
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div 
            key={index} 
            className="min-w-full h-full flex items-center justify-center"
          >
            <img
              src={img.image}
              alt={img.alt}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-green p-3 rounded-full hover:bg-black/70 transition-colors"
            aria-label="Imagen anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-green p-3 rounded-full hover:bg-black/70 transition-colors"
            aria-label="Siguiente imagen"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Indicadores (puntos) */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-green' : 'bg-white/50'
              }`}
              aria-label={`Ir a la imagen ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};


