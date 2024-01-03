import AboutHero from "./components/AboutHero/AboutHero"
import AboutMap from "./components/AboutMap/AboutMap"


export const metadata = {
  title: "O nama - Magellan",
  desctiption: "Ovo je deskripcija o nama"
}

const page = () => {
  return (
    <div>
      <AboutHero />
      <AboutMap />
    </div>
  )
}

export default page