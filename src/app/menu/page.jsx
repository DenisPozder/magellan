import Hero from "@/components/Hero/Hero";
import Loader from "@/components/Loader/Loader";
import Layout from "@/components/layout/Layout";
import React from "react";

export const metadata = {
  title: "Jelovnik - Magellan",
  desctiption: "Ovo je deskripcija jelovnika",
};

const page = () => {
  return (
    <>
    <Loader />
    <Layout>
      <div className="page_section">
        <Hero
          paper={"/paper1.png"}
          title1={"Magellan"}
          title2={"meni"}
          desc={
            "Započnite svoje kulinarsko putovanje širom sveta uz naš raznovrstan meni koji je pažljivo sačinjen od raznovrsnih jela iz celog sveta."
          }
          link={"/reservations"}
        />
      </div>
      </Layout>
    </>
  );
};

export default page;
