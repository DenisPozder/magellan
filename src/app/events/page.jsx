import Hero from "@/components/Hero/Hero";
import React from "react";
import EventSlider from "./components/EventSlider/EventSlider";
import AllEvents from "./components/AllEvents/AllEvents";
import Loader from "@/components/Loader/Loader";

export const metadata = {
  title: "Događaji - Magellan",
  desctiption: "Ovo je deskripcija karte pića",
};

const page = () => {
  return (
    <>
      <Loader />
      <div className="page_section">
        <Hero
          paper={"/paper1.png"}
          title1={"Dešavanja"}
          title2={"u Magellanu"}
          desc="Pogledajte na jednom mestu najnovija dešavanja i informacije vezane za naš restoran."
          link={"/reservations"}
        />
        <EventSlider />
        <AllEvents />
      </div>
    </>
  );
};

export default page;
