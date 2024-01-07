import Hero from "@/components/Hero/Hero";
import AllWines from "./components/AllWines/AllWines";
import WinesSlider from "./components/WinesSlider/WinesSlider";
import Loader from "@/components/Loader/Loader";

export const metadata = {
  title: "Vinska karta - Magellan",
  desctiption: "Ovo je deskripcija vinske karte",
};

const page = () => {
  return (
    <>
      <Loader />
      <div className="page_section">
        <Hero
          paper={"/paper1.png"}
          title1={"Vrhunska selekcija"}
          title2={"svetskih vina"}
          desc={
            "Ova pažljivo odabrana kolekcija pruža nezaboravno iskustvo uživanja u vrhunskim vinima iz različitih vinogradarskih regija"
          }
          link={"/reservations"}
        />
        <WinesSlider />
        <AllWines />
      </div>
    </>
  );
};

export default page;
