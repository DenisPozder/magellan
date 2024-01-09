import Loader from "@/components/Loader/Loader";
import AboutHero from "./components/AboutHero/AboutHero";
import AboutMap from "./components/AboutMap/AboutMap";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "O nama - Magellan",
  desctiption: "Ovo je deskripcija o nama",
};

const page = () => {
  return (
    <>
    <Loader />
    <Layout>
      <div className="page_section">
        <AboutHero />
        <AboutMap />
      </div>
      </Layout>
    </>
  );
};

export default page;
