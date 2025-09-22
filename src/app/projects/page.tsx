'use client' 

import { Navbar } from "../../../components/navbar";
import { navItems, heroPrincipal, portfolio, footerVideoData } from "../../../data";
import {Hero} from "../../../components/header"
import {FooterVideo, Footer} from "../../../components/footer";
import Card from "../../../components/card";
import { CarouselImg } from "../../../components/carousel";


export default function Portfolio() {
  const backgroundImage = "/img/background.png";
  const project1 = portfolio[0];
  const project2 = portfolio[1];
  const home = heroPrincipal[3];
  const footer = footerVideoData[0];
  return (
    <main >
      <Navbar navItems={navItems} />
      <div className="relative w-[100%] h-[750px] space-y-10 md:space-y-20 -mt-20 z-10" style={{backgroundImage: `url(${backgroundImage})`,backgroundSize: 'cover', backgroundPosition: 'center', borderBottomLeftRadius:50, borderBottomRightRadius:50}}>
        <div className="w-[100%] px-5 md:px-10 lg:px-20 space-y-10">
          <Hero title={home.title} title2={home.title2} desc={home.desc}/>
          <div className="w-full h-[400px] xl:h-[500px] border-8 border-black rounded-2xl">
            <video autoPlay muted style={{width:"100%", height:"100%", objectFit:"cover", borderRadius:8}} loop>
            <source src={"/video/video-grupo.mp4"} type="video/mp4"></source>
            </video>
          </div>
        </div>
        <div className="w-[100%] px-5 md:px-10 lg:px-20 space-y-10 lg:space-y-20">
          <Card
            id={project1.id}
            title={project1.title}
            desc={project1.desc}
            textButton={project1.textButton}
            href={project1.href}
            video={project1.video}
            reverseOrder={true}
          />
          <CarouselImg
              images={project1.imgCarousel}
          />
          <Card
            id={project2.id}
            title={project2.title}
            desc={project2.desc}
            textButton={project2.textButton}
            href={project2.href}
            video={project2.video}
          />
          <CarouselImg
              images={project2.imgCarousel}
          />
        </div>
        <div className="flex flex-col w-[100%] rounded-[50px]">
          <FooterVideo title={footer.title} title2={footer.title2} desc={footer.desc} video={footer.video}/>
          <Footer/>
        </div>
      </div>
        
        
    </main>
  );
};