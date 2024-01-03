import AllWines from "./components/AllWines/AllWines"
import WinesHero from "./components/WinesHero/WinesHero"
import WinesSlider from "./components/WinesSlider/WinesSlider"


export const metadata = {
  title: "Vinska karta - Magellan",
  desctiption: "Ovo je deskripcija vinske karte"
}

const page = () => {
  return (
    <>
      <WinesHero />
      <WinesSlider />
      <AllWines />
    </>
  )
}

export default page