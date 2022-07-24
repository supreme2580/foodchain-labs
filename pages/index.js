import Head from "next/head"
import Features from "../components/Features"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Team from "../components/Team"

const Home = () => {
  return(
    <div className="bg-[#F3ECE1] space-y-20">
      <Head>
        <title>Foodchain Labs</title>
        <link rel="icon" src="/vercel.svg" />
      </Head>
      <Navbar />
      <Hero />
      <Features />
      <Team />
    </div>
  )
}
export default Home