import Loader from "@/components/Loader/Loader";
import AboutHero from "./components/AboutHero/AboutHero";
import AboutMap from "./components/AboutMap/AboutMap";

export const metadata = {
  title: "O nama - Magellan",
  desctiption: "Ovo je deskripcija o nama",
};

const page = () => {
  return (
    <>
    <Loader />
      <div className="page_section">
        <AboutHero />
        <AboutMap />
      </div>
    </>
  );
};

export default page;
