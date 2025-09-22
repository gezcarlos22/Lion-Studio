'use client' 

import { Navbar } from "../../../components/navbar";
import { navItems, heroPrincipal, descriptions, footerVideoData } from "../../../data";
import {Hero} from "../../../components/header"
import {FooterVideo, Footer} from "../../../components/footer";
import { servicesAll } from "../../../data";
import { ServiceContent } from "../../../components/allSercices";
import Card from "../../../components/card";
import { CarouselImg } from "../../../components/carousel";


export default function Service() {
  const backgroundImage = "/img/background.png";
  const home = heroPrincipal[1];
  const grabacion = servicesAll[5];
  const studio = descriptions[1];
  const footer = footerVideoData[0];
  return (
    <main >
      <Navbar navItems={navItems} />
      <div className="relative w-[100%] h-[750px] space-y-10 md:space-y-20 -mt-20 z-10" style={{backgroundImage: `url(${backgroundImage})`,backgroundSize: 'cover', backgroundPosition: 'center', borderBottomLeftRadius:50, borderBottomRightRadius:50,}}>
        <div className="w-[100%] px-5 md:px-10 lg:px-20 space-y-10">
          <Hero title={home.title} title2={home.title2} desc={home.desc}/>
          <div className="w-full h-[400px] xl:h-[500px] border-8 border-black rounded-2xl">
            <video autoPlay muted style={{width:"100%", height:"100%", objectFit:"cover", borderRadius:8}} loop>
                <source src={"/video/video-grupo.mp4"} type="video/mp4"></source>
            </video>
          </div>
        </div>
      </div>
        <div className="">
                <ServiceContent
                  id={grabacion.id} 
                  title={grabacion.title} 
                  desc={grabacion.desc} 
                  image={grabacion.image}
                  hight="700px" 
                  marginTop="-50px" 
                  marginTopText="50px"
                  isBackgroundBlack={true}
                />
        </div>
        <div className="w-[100%] px-5 md:px-10 lg:px-20 py-10 lg:py-20 space-y-10 lg:space-y-20">
          <Card
                      title={studio.title}
                      desc={studio.desc}
                      textButton={studio.textButton}
                      href={studio.href}
                      image={studio.image}
                      reverseOrder={true}
                    />
          <CarouselImg
                        images={studio.imgCarousel}
                    />
                  
        </div>
        <div className="flex flex-col w-[100%] rounded-[50px]">
          <FooterVideo title={footer.title} title2={footer.title2} desc={footer.desc} video={footer.video}/>
          <Footer/>
        </div>  
        
    </main>
  );
};