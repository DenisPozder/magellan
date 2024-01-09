import Hero from "@/components/Hero/Hero";
import ReservationSlider from "./components/ReservationSlider/ReservationSlider";
import styles from "./reservations.module.css";
import Loader from "@/components/Loader/Loader";
import Layout from "@/components/layout/Layout";

const page = () => {
  return (
    <>
    <Loader />
    <Layout>
      <div className="page_section">
        <Hero
          paper={"/paper1.png"}
          title1={"Rezervišite vaše"}
          title2={"mesto za putovanje"}
          desc={
            "Ukoliko želite da rezervišete vaše mesto u našem restoranu, to možete uraditi putem formulara kojem možete da pristupite klikom na dugme ispod."
          }
          desc2={"Vidimo se uskoro !"}
          link={false}
        />
        <ReservationSlider />
        <div className={styles.reservations_paper}>
          <img src="/paper4.png" alt="Dekorativni papir 4" />
        </div>
      </div>
      </Layout>
    </>
  );
};

export default page;
