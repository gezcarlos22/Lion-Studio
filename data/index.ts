import { title } from "process";

export const navItems = [
  { name: "Home", link: "/" },
  { name: "Sobre Mi", link: "/about" },
  { name: "Servicios", link: "/service" },
  { name: "Portfolio", link: "/projects" },
];

export const descriptions = [
  {
    title: "sobre mi",
    desc: `Lion Studio es un proyecto que nace en 2019, proveniente de mi formación como Técnico Superior en Sonido.

       A todo esto, te preguntarás quién soy. Bueno, mi nombre es Esteban Chavero, quien está detrás de Lion Studio. Tengo 27 años, soy Técnico Superior en Sonido de La Metro - Escuela de Diseño y Comunicación Audiovisual y Productor Musical especializado en Música Urbana."

       Desde los 6 años comparto un sentimiento por la música, desde aprender a tocar instrumentos como la guitarra y el teclado, hasta estudiar Composición Musical y llegar a los conocimientos y trayectoria que tengo hoy en día.`,
    textButton: "conoceme",
    href: "/about",
    image: "/img/estudio_est.jpg",
    imgCarousel: [
      {
        image:"/img/lion1.jpg",
        alt:"leon1"
      },
      {
        image:"/img/lion2.jpg",
        alt:"leon2"
      },
      {
        image:"/img/lion3.jpg",
        alt:"leon3"
      }
    ]
  },
  {
    title: "COMO ES LION STUDIO?",
    desc: `Nuestro estudio está diseñado para ser un espacio de creatividad e innovación.

          Contamos con una espacio de grabación profesional y equipos de última generación que garantizan la máxima fidelidad en cada toma. 

          La acústica de nuestra sala está optimizada para capturar cada matiz de tu voz e instrumentos con total claridad. 

          No se trata solo de tener el mejor equipo, sino de crear un ambiente donde te sientas cómodo y libre para expresarte, logrando un sonido que no solo cumpla con tus expectativas, sino que las supere.`,
    textButton: "conoceme",
    href: "/about",
    image: "/img/estudio_est.jpg" ,
    imgCarousel: [
      {
        image:"/img/lion1.jpg",
        alt:"leon1"
      },
      {
        image:"/img/lion2.jpg",
        alt:"leon2"
      },
      {
        image:"/img/lion3.jpg",
        alt:"leon3"
      }
    ]
  },

]

export const servicesData = [
  {
    image: "/img/micro-grabacion.jpg",
    title: "Grabaciones",
    description: "El espacio perfecto con equipo profesional para dar vida a tus ideas.",
    buttonHref: "/service#1", // Ejemplo de href para el botón
  },
  {
    image: "/img/afinacion.jpeg",
    title: "Afinación de voces",
    description: "El arte de perfeccionar cada interpretación, corrigiendo sutilmente cualquier nota.",
    buttonHref: "/service#2",
  },
  {
    image: "/img/mezcla-masterizacion.jpg",
    title: "Mezcla y Masterización",
    description: "Donde la magia sucede y el toque final que lo lleva todo al siguiente nivel.",
    buttonHref: "/service#3",
  },
  {
    image: "/img/partitura.jpg",
    title: "Sonido de publicidad",
    description: "Dale a tu marca una identidad sonora que la haga inolvidable.",
    buttonHref: "/service#4",
  },
  {
    image: "/img/disco.jpg",
    title: "Beats",
    description: "Construye tu éxito con nuestros beats originales.",
    buttonHref: "/service#5",
  },
];

export const heroPrincipal = [
  {
    title:"productora ",
    title2:"Musical",
    desc:"Impulsamos artistas y empresas a través de nuestros servicios discográficos como productora. Creemos que cada proyecto es único y merece un enfoque personalizado.",
  },
  {
    title:"sobre ",
    title2:"mi",
    desc:"Mi nombre es Esteban Chavero y soy el corazón detrás de Lion Studio. Cuento con una sólida formación como Técnico Superior en Sonido de la reconocida universidad La Metro, además de ser un Productor Musical con especialización en el vibrante mundo de la Música Urbana.",
  },
  {
    title:"servicios ",
    title2:"Musicales",
    desc:"Descubre la amplia gama de servicios profesionales que impulsarán tu carrera musical hacia el éxito. Te acompañamos en cada etapa de tu proyecto, desde la producción inicial hasta el lanzamiento final.",
  },
  {
    title:"portfolio ",
    title2:"Musical",
    desc:"Explora una colección de mis proyectos más recientes y descubre el sonido que nos define como productora. Te invitamos a sumergirte en el trabajo de los artistas que hemos ayudado a crecer.",
  },
  {
    title:"contacto",
    title2:"",
    desc:`Nos encantaría escucharte. Ya sea que tengas una idea, un proyecto en marcha o simplemente quieras resolver una duda sobre el mundo de la producción musical, estamos aquí para ayudarte.
    
    Si quieres que hablemos sobre tu proyecto y descubras cómo podemos trabajar juntos, completa el siguiente formulario. Cuéntanos sobre ti, tu proyecto y qué es lo que buscas, y nos pondremos en contacto contigo lo antes posible para comenzar a crear algo grande.`,
  },
];

export const footerVideoData =[
  {
    title:"LISTO PARA EL ",
    title2:"SIGUIENTE NIVEL?",
    desc:"Lleva tu música a lo más alto. Tu arte merece ser escuchado y valorado. Con nuestra asesoría profesional y especializada",
    video:"/video/video-consola2.mp4",
  },
  {
    title:"hablame por ",
    title2:"whatsapp",
    desc:"¿Tienes una consulta rápida? Será la forma más rápida y sencilla de conectar para resolver cualquier duda que tengas.",
    video:"/video/video-ampli.mp4",
  }]

export const servicesAll = [
  {
    title:"GRABACIONES",
    desc:`En nuestro estudio de grabación de vanguardia, te ofrecemos el espacio perfecto para dar vida a tus ideas.  

    Contamos con equipo profesional y una acústica optimizada para capturar cada matiz de tu música con la máxima fidelidad.  

    Ya seas solista o banda, nuestro ambiente está diseñado para inspirar tu creatividad y asegurar que cada toma refleje la verdadera esencia de tu arte.  
    
    Te acompañamos desde la configuración de micrófonos hasta la dirección de la sesión, garantizando que el proceso de grabación sea fluido, profesional y de la más alta calidad.`,
    image:"/img/micro-grabacion.jpg",
    id:"1"
  },
  {
    title:"AFINACION DE VOCES",
    desc:`La afinación es clave para un sonido pulido y profesional.  
    
    Nuestro servicio de afinación musical se enfoca en perfeccionar cada interpretación, corrigiendo sutilmente cualquier nota que no esté en su lugar.   
    
    Utilizamos tecnología de punta para lograr una afinación impecable en voces e instrumentos, sin sacrificar la naturalidad ni la emoción de la toma original.  
    
    Este proceso es fundamental para que tu mezcla suene cohesionada y armónica, elevando la calidad de tu producción y dejando una impresión duradera en el oyente.`,
    video:"/video/video-afinacion.mp4",
    id:"2"
  },
  {
    title:"SONIDOS DE PUBLICIDAD",
    desc:`Dale a tu marca una identidad sonora que la haga inolvidable.   
    
    Nos especializamos en la creación de jingles y bandas sonoras originales diseñadas para conectar con tu audiencia y reforzar tu mensaje de marca.   
    
    Ya sea que necesites un audio energético para un anuncio de televisión, un jingle pegadizo para la radio o un fondo emotivo para un video corporativo, nuestro equipo creativo trabaja de la mano contigo para componer y producir un sonido único que capte la atención y haga que tu marca destaque en cualquier plataforma.`,
    image:"/img/partitura.jpg",
    id:"4"
  },
  {
    title:"MEZCLA Y MASTERIZACION",
    desc:`La mezcla es donde la magia sucede y la masterización es el toque final que lo lleva todo al siguiente nivel.   
    
    Nuestro equipo de ingenieros expertos se encarga de equilibrar cuidadosamente cada instrumento, ajustar la dinámica y pulir el sonido para que tu canción suene potente, clara y profesional.   
    
    Con la mezcla, balanceamos cada pista para que cada elemento tenga su espacio.  
    
    Con la masterización, optimizamos tu canción para que suene perfecta en todas las plataformas de streaming, dispositivos y sistemas de sonido, asegurando que tu música impacte a cualquier oyente.`,
    video:"/video/video2.mp4",
    id:"3"
  },
  {
    title:"BEATS",
    desc:`Construye tu próximo éxito desde cero con nuestros beats originales y personalizados.   
    
    Ya sea que busques el ritmo contundente del hip hop, las melodías atmosféricas del R&B o la energía explosiva del trap, te entregamos la base perfecta para tu creatividad.   
    
    Nuestros productora está al tanto de las últimas tendencias y te ofrecen un sonido único que se alinea con tu visión artística.   
    
    Trabajamos contigo para crear un beat que no solo suene increíble, sino que también cuente la historia que quieres transmitir.`,
    image:"/img/disco.jpg",
    id:"5"
  },
  {
    title:"MI ESTUDIO",
    desc:`Lion Studio es más que un simple proyecto; es el resultado de mi pasión por el sonido, una visión que nació en 2019 con el objetivo de convertir ideas en realidades sonoras. 

    Es aquí donde mi formación técnica se une con mi experiencia musical para ofrecerte un servicio de producción integral y de alta calidad. 

    Cada proyecto que llega a Lion Studio es tratado con el máximo cuidado y profesionalismo, desde la captura inicial de una idea hasta el pulido final que la hará destacar.`,
    image:"/img/La_Metro.jpg",
    id:"6"
  },
];

export const portfolio = [
  {
    id:"proyecto_1",
    title:"ES-T Enamorado",
    desc: `Lion Studio es un proyecto que nace en 2019, proveniente de mi formación como Técnico Superior en Sonido.

       A todo esto, te preguntarás quién soy. Bueno, mi nombre es Esteban Chavero, quien está detrás de Lion Studio. Tengo 27 años, soy Técnico Superior en Sonido de La Metro - Escuela de Diseño y Comunicación Audiovisual y Productor Musical especializado en Música Urbana."

       Desde los 6 años comparto un sentimiento por la música, desde aprender a tocar instrumentos como la guitarra y el teclado, hasta estudiar Composición Musical y llegar a los conocimientos y trayectoria que tengo hoy en día.`,
    textButton: "Ver Video",
    href: "https://www.youtube.com/watch?v=tw4tjxfJQiY",
    video: "/img/Proyectos/1/est_video.mp4",
    imgCarousel: [
      {
        image:"/img/Proyectos/1/Portada.png",
        alt:"Portada"
      },
      {
        image:"/img/Proyectos/1/est_1.png",
        alt:"foto1"
      },
      {
        image:"/img/Proyectos/1/est_2.png",
        alt:"foto2"
      }
    ]
  },
  {
    id:"proyecto_2",
    title:"ES-T HECHA PA MI",
    desc: `Lion Studio es un proyecto que nace en 2019, proveniente de mi formación como Técnico Superior en Sonido.

       A todo esto, te preguntarás quién soy. Bueno, mi nombre es Esteban Chavero, quien está detrás de Lion Studio. Tengo 27 años, soy Técnico Superior en Sonido de La Metro - Escuela de Diseño y Comunicación Audiovisual y Productor Musical especializado en Música Urbana."

       Desde los 6 años comparto un sentimiento por la música, desde aprender a tocar instrumentos como la guitarra y el teclado, hasta estudiar Composición Musical y llegar a los conocimientos y trayectoria que tengo hoy en día.`,
    textButton: "Ver Video",
    href: "https://www.youtube.com/watch?v=qE8m1hTTfk8",
    video: "/img/Proyectos/2/est_video.mp4",
    imgCarousel: [
      {
        image:"/img/Proyectos/2/Portada.png",
        alt:"leon1"
      },
      {
        image:"/img/Proyectos/2/est_1.png",
        alt:"leon2"
      },
      {
        image:"/img/Proyectos/2/est_2.png",
        alt:"leon3"
      }
    ]
  }
]