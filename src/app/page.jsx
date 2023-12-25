import Hero from "@/components/Hero/Hero";
import ITComponent from "@/components/ITComponent/ITComponent";
import STComponent from "@/components/STComponent/STComponent";

export default function Home() {
  return (
    <>
      <main className="page_section">
        <Hero />
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
    </>
  );
}
