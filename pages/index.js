import Head from "next/head"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import FeaturesMobile from "../components/mobile/FeaturesMobile"
import FooterMobile from "../components/mobile/FooterMobile"
import HeroMobile from "../components/mobile/HeroMobile"
import NavMobile from "../components/mobile/NavMobile"
import TeamMobile from "../components/mobile/TeamMobile"
import WaitlistMobile from "../components/mobile/WaitlistMobile"
import Navbar from "../components/Navbar"
import Team from "../components/Team"
import Waitlist from "../components/Waitlist"

const Home = () => {
  return(
    <div className="bg-[#F3ECE1] space-y-10 md:space-y-20">
      <Head>
        <title>Foodchain Labs</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div>
        <div className="hidden md:block"><Navbar /></div>
        <div className="block md:hidden px-3"><NavMobile /></div>
      </div>
      <div>
        <div className="hidden md:block"><Hero /></div>
        <div className="block md:hidden px-3"><HeroMobile /></div>
      </div>
      <div>
        <div className="hidden md:block"><Features /></div>
        <div className="block md:hidden px-3"><FeaturesMobile /></div>
      </div>
      <div>
        <div className="hidden md:block"><Team /></div>
        <div className="block md:hidden px-3"><TeamMobile /></div>
      </div>
      <div>
        <div className="hidden md:block"><Waitlist /></div>
        <div className="block md:hidden px-3"><WaitlistMobile /></div>
      </div>
      <div>
        <div className="hidden md:block"><Footer /></div>
        <div className="block md:hidden bg-white bg-opacity-[0.38] px-3"><FooterMobile /></div>
      </div>
    </div>
  )
}
export default Home