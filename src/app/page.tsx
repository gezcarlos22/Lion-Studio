import { Navbar } from "../../components/navbar";
import { descriptions, navItems, heroPrincipal, footerVideoData } from "../../data";
import {Hero} from "../../components/header"
import Card from "../../components/card";
import CardService from "../../components/cardService";
import HeroPortfolio from "../../components/homePortfolio";
import {FooterVideo, Footer} from "../../components/footer";


export default function Home() {
  const sobreMi = descriptions[0];
  const home = heroPrincipal[0];
  const backgroundImage = "/img/background.png";
  const backgroundService = "/img/backServicio.png";
  const footer = footerVideoData[0];
  return (
    <main >
      <div className="w-[100%] h-[700px] sm:h-[700px] md:h-[700px] space-y-10 md:space-y-20" style={{backgroundImage: `url(${backgroundImage})`, borderBottomLeftRadius:50, borderBottomRightRadius:50}}>
        <div className="w-[100%] px-5 md:px-10 lg:px-20 space-y-10 md:space-y-20">
          <Navbar navItems={navItems} />
          <Hero title={home.title} title2={home.title2} desc={home.desc} hasButton={true}/>
          <div className="w-full h-[450px] border-8 border-black rounded-2xl">
            <video autoPlay muted style={{width:"100%", height:"100%", objectFit:"cover", borderRadius:8}} loop>
            <source src={"/video/video1.mp4"} type="video/mp4"></source>
            </video>
          </div>
          <Card
            title={sobreMi.title}
            desc={sobreMi.desc}
            textButton={sobreMi.textButton}
            href={sobreMi.href}
            image={sobreMi.image}
          />
        </div>

        <div className="flex flex-col items-center w-[100%] bg-[#000000] rounded-[50px]" style={{backgroundImage: `url(${backgroundService})`,backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <h2 className="text-3xl md:text-5xl text-green font-extrabold p-10 uppercase">servicios</h2>
          <div className="flex justify-center lg:justify-end w-[90%] pb-10">
            <CardService/>
          </div>
        </div>
        <div className="w-[90%] mx-auto space-y-20">
          <HeroPortfolio/>
        </div>
        <div className="flex flex-col rounded-[50px]">
          <FooterVideo title={footer.title} title2={footer.title2} desc={footer.desc} video={footer.video}/>
          <Footer/>
        </div>
      </div>
    </main>
  );
};
