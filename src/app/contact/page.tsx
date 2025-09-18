'use client' 

import { Navbar } from "../../../components/navbar";
import { navItems, heroPrincipal, footerVideoData} from "../../../data";
import {HeroContact} from "../../../components/header"
import {FooterVideo, Footer} from "../../../components/footer";



export default function Contact() {
  const backgroundImage = "/img/background.png";
  const home = heroPrincipal[4];
    const footer = footerVideoData[1];
  return (
    <main >
      <div className="relative w-[100%] h-[1200px] md:h-[1100px] lg:h-[700px] min-xl:h-[650px] space-y-10 md:space-y-20 z-10" style={{backgroundImage: `url(${backgroundImage})`,backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="w-[100%] px-10 lg:px-20 space-y-10 md:space-y-20">
          <Navbar navItems={navItems} />
          <HeroContact title={home.title} title2={home.title2} desc={home.desc}/>
        </div>
      </div>
        <div className="flex flex-col w-[100%] rounded-[50px] mt-[-50px]">
          <FooterVideo title={footer.title} title2={footer.title2} desc={footer.desc} video={footer.video}/>
          <Footer/>
        </div>  
        
    </main>
  );
};