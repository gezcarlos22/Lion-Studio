'use client' 

import { Navbar } from "../../../components/navbar";
import { navItems, heroPrincipal, footerVideoData } from "../../../data";
import {Hero} from "../../../components/header"
import {FooterVideo, Footer} from "../../../components/footer";
import {AllServices} from "../../../components/allSercices";


export default function Service() {
  const backgroundImage = "/img/background.png";
  const home = heroPrincipal[2];
  const footer = footerVideoData[0];

  return (
    <main >
      <div className="relative w-[100%] h-[700px] sm:h-[700px] md:h-[700px] space-y-10 md:space-y-20 z-10" style={{backgroundImage: `url(${backgroundImage})`,backgroundSize: 'cover', backgroundPosition: 'center', borderBottomLeftRadius:50, borderBottomRightRadius:50}}>
        <div className="w-[100%] px-5 md:px-10 lg:px-20 space-y-10 md:space-y-20 ">
          <Navbar navItems={navItems} />
          <Hero title={home.title} title2={home.title2} desc={home.desc}/>
          <div className="w-full h-[450px] border-8 border-black rounded-2xl">
            <video autoPlay muted style={{width:"100%", height:"100%", objectFit:"cover", borderRadius:8}} loop>
            <source src={"/video/video-grabando.mp4"} type="video/mp4"></source>
            </video>
          </div>
        </div>
      </div>
      
      <div className="relative z-0">
        <AllServices/>
      </div>
        
      <div className="flex flex-col rounded-[50px] mt-[-50px] z-0">
        <FooterVideo title={footer.title} title2={footer.title2} desc={footer.desc} video={footer.video}/>
        <Footer/>
      </div>
    </main>
  );
};
