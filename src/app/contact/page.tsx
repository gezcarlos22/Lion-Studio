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
      <Navbar navItems={navItems} />
      <div className="relative w-[100%] h-[100%] space-y-10 md:space-y-20 -mt-20  z-10" style={{backgroundImage: `url(${backgroundImage})`,backgroundSize: 'cover', backgroundPosition: 'center', borderBottomLeftRadius:50, borderBottomRightRadius:50}}>
        <div className="w-[100%] px-5 md:px-10 lg:px-20 space-y-10 md:space-y-20">
          <HeroContact title={home.title} title2={home.title2} desc={home.desc}/>
        </div>
      </div>
        <div className="flex flex-col w-[100%] mt-[-100px]">
          <FooterVideo title={footer.title} title2={footer.title2} desc={footer.desc} video={footer.video}/>
          <Footer/>
        </div>  
        
    </main>
  );
};