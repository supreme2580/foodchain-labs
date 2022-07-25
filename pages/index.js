import Head from "next/head"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Team from "../components/Team"
import Waitlist from "../components/Waitlist"

const Home = () => {
  return(
    <div className="bg-[#F3ECE1] space-y-20">
      <Head>
        <title>Foodchain Labs</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      <Hero />
      <Features />
      <Team />
      <Waitlist />
      <Footer />
    </div>
  )
}
export default Home