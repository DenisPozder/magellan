import Hero from "@/components/Hero/Hero";
import ITComponent from "@/components/ITComponent/ITComponent";
import Loader from "@/components/Loader/Loader";
import STComponent from "@/components/STComponent/STComponent";
import Layout from "@/components/layout/Layout";

export default function Home() {
  return (
    <>
      <Loader />
      <Layout>
      <main className="page_section">
        <Hero
          paper={"/paper1.png"}
          title1={"Putujte kroz"}
          title2={"svet ukusa."}
          desc={
            "U prijatnoj atmosferi našeg restorana, krenite na put oko sveta. Sigurni smo da čak i najzahtevnije sladokusce nećemo ostaviti ravnodušnim."
          }
          link={"/reservations"}
        />
        <ITComponent
          image={"/menuImg.jpg"}
          link={"#"}
          firstTitle={"Teletina"}
          secondTitle={"'Sous Vide'"}
          price={"2500 RSD"}
          desc={"Servirana sa 'robuchon' krompirom u sopstvenom sosu."}
          linkTitle={"jelovnik"}
        />
        <STComponent />
        <ITComponent
          link={"#"}
          image={"/cocktailImg.jpg"}
          firstTitle={"Negroni"}
          secondTitle={"Koktel"}
          price={"900 RSD"}
          desc={"Gin, Campari & Martini bitter"}
          linkTitle={"karta pića"}
        />
      </main>
      </Layout>
    </>
  );
}
