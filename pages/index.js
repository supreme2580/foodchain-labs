import Head from "next/head"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

const Home = () => {
  return(
    <div className="space-y-32">
      <Head>
        <title>Foodchain Labs</title>
        <link rel="icon" src="/vercel.svg" />
      </Head>
      <Navbar />
      <Hero />
    </div>
  )
}
export default Home