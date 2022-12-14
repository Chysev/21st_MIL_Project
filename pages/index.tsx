import dynamic from "next/dynamic"

// Dynamic Component
const Layer1 = dynamic(() => import("../components/LandingPage/Layer1"), { ssr: false })
const Layer2 = dynamic(() => import("../components/LandingPage/Layer2"), { ssr: false })
const Layer3 = dynamic(() => import("../components/LandingPage/Layer3"), { ssr: false })

const Home = () => {
  return (
    <>

      <title>PINOY TAPE | Home</title>
      <Layer1 />
      <Layer2 />
      <Layer3 />
    </>
  )
}

export default Home
