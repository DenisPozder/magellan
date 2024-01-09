import Hero from "@/components/Hero/Hero";
import DrinksImage from "./components/DrinksImage/DrinksImage";
import DrinksItems from "./components/DrinksItems/DrinksItems";
import Loader from "@/components/Loader/Loader";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "Karta pića - Magellan",
  desctiption: "Ovo je deskripcija karte pića",
};

const DrinksExamples = [
  {
    title: "Kafe i topli napitci",
    category: "coffee",
    drinks: [
      {
        title: "Expresso",
        price: 230,
      },
      {
        title: "Espresso Organic 100% Arabica",
        price: 380,
      },
      {
        title: "Expresso sa mlekom",
        price: 260,
      },
      {
        title: "Expresso sa sojinim mlekom",
        price: 290,
      },
      {
        title: "Capuccino",
        price: 270,
      },
      {
        title: "Nescaffe",
        price: 270,
      },
      {
        title: "Decafeinated coffee",
        price: 280,
      },
      {
        title: "Caffe Latte",
        price: 290,
      },
      {
        title: "Caffe Latte sa sojinim mlekom",
        price: 310,
      },
      {
        title: "Ahmad čaj",
        price: 270,
      },
      {
        title: "Kakao",
        price: 280,
      },
    ],
  },
  {
    title: "Voda",
    category: "water",
    drinks: [
      {
        title: "Aqua Viva",
        price: 240,
        neto: 0.25,
      },
      {
        title: "Aqua Viva",
        price: 350,
        neto: 0.75,
      },
      {
        title: "Evian",
        price: 350,
        neto: 0.33,
      },
      {
        title: "Evian",
        price: 750,
        neto: 0.75,
      },
      {
        title: "Aqua Panna",
        price: 310,
        neto: 0.25,
      },
      {
        title: "Aqua Panna",
        price: 560,
        neto: 0.75,
      },
      {
        title: "Knjaz Miloš",
        price: 240,
        neto: 0.25,
      },
      {
        title: "Knjaz Miloš",
        price: 360,
        neto: 0.25,
      },
      {
        title: "San Pellegrino",
        price: 310,
        neto: 0.25,
      },
      {
        title: "San Pellegrino",
        price: 560,
        neto: 0.75,
      },
    ],
  },
];

const DrinksExamples2 = [
  {
    title: "Sveže ceđeno voće",
    category: "voće",
    drinks: [
      {
        title: "Ceđena pomorandža ",
        price: 390,
        neto: 0.25,
      },
      {
        title: "Ceđeni grejpfrut",
        price: 420,
        neto: 0.25,
      },
      {
        title: "Vitaminski miks",
        subTitle: "(limun, grejpfrut, pomorandža)",
        price: 420,
        neto: 0.25,
      },
      {
        title: "Zeleni miks",
        subTitle: "(celer, đumbir, spanać, jabuka)",
        price: 530,
        neto: 0.25,
      },
      {
        title: "Crveni miks",
        subTitle: "(cvekla, šargarepa, jabuka)",
        price: 480,
        neto: 0.25,
      },
      {
        title: "Limunada",
        price: 280,
        neto: 0.25,
      },
      {
        title: "Limunana",
        price: 310,
        neto: 0.25,
      },
    ],
  },
  {
    title: "Sokovi",
    category: "sokovi",
    drinks: [
      {
        title: "Coca Cola",
        price: 260,
        neto: 0.25,
      },
      {
        title: "Coca Cola Zero",
        price: 260,
        neto: 0.25,
      },
      {
        title: "Fanta",
        price: 260,
        neto: 0.25,
      },
      {
        title: "Sprite",
        price: 260,
        neto: 0.25,
      },
      {
        title: "Schweppes Tonic Water",
        price: 260,
        neto: 0.25,
      },
      {
        title: "Schweppes Bitter Lemon",
        price: 260,
        neto: 0.25,
      },
      {
        title: "Cockta",
        price: 260,
        neto: 0.275,
      },
      {
        title: "Ice Tea Peach",
        price: 280,
        neto: 0.33,
      },
      {
        title: "Jabuka 100%",
        price: 390,
        neto: 0.25,
      },
      {
        title: "Kajsija 100%",
        price: 420,
        neto: 0.25,
      },
      {
        title: "Jagoda 100%",
        price: 450,
        neto: 0.25,
      },
      {
        title: "Crna ribizla 100%",
        price: 480,
        neto: 0.25,
      },
      {
        title: "Malina 100%",
        price: 500,
        neto: 0.25,
      },
      {
        title: "Tonic Fever Tree",
        subTitle: "(Elderflower, Mediterranean, Ginger Ale)",
        price: 520,
        neto: 0.20,
      },
    ],
  },
  {
    title: "Energetska pića",
    category: "negazirano",
    drinks: [
      {
        title: "Redd Bull",
        price: 500,
        neto: 0.25,
      },
    ],
  },
];

const DrinksExamples3 = [
  {
    title: "Piva",
    category: "piva",
    drinks: [
      {
        title: "Zaječarsko crno",
        price: 330,
        neto: 0.33,
      },
      {
        title: "Heineken",
        price: 370,
        neto: 0.25,
      },
      {
        title: "Paulaner wheat ",
        price: 420,
        neto: 0.33,
      },
      {
        title: "Fever Tree Ginger Beer ",
        price: 520,
        neto: 0.25,
      },
      {
        title: "Dogma Svetionik APA",
        price: 540,
        neto: 0.33,
      },
      {
        title: "Sol",
        price: 650,
        neto: 0.33,
      },
    ],
  },
  {
    title: "Grappa",
    category: "grappa",
    drinks: [
      {
        title: "Nonino Il Moscato",
        price: 650,
        neto: 0.04,
        percentage: "41%",
      },
      {
        title: "Nonino Riserva Antica Cuvee 5",
        price: 1100,
        neto: 0.04,
        percentage: "43%",
      },
      {
        title: "Nonino Riserva 8",
        price: 2100,
        neto: 0.04,
        percentage: "43%",
      },
      {
        title: "Nonino Riserva 22",
        price: 3700,
        neto: 0.04,
        percentage: "43%",
      },
      {
        title: "Nonino Gran Riserva 27",
        price: 5900,
        neto: 0.04,
        percentage: "45%",
      },
      {
        title: "Berta Oltre il D iLidia ",
        price: 1350,
        neto: 0.04,
        percentage: "43%",
      },
      {
        title: "Berta Rondena Amarone ",
        price: 2300,
        neto: 0.04,
        percentage: "43%",
      },
      {
        title: "Berta Paolo",
        price: 4250,
        neto: 0.04,
        percentage: "43%",
      },
      {
        title: "Sassicaia ",
        price: 2100,
        neto: 0.04,
        percentage: "40%",
      },
    ],
  },
];

const DrinksExamples4 = [
  {
    title: "Whiskey",
    category: "viski",
    drinks: [
      {
        title: "Johnnie Walker Red Label ",
        price: 400,
        neto: 0.04,
        percentage: "40%",
      },
      {
        title: "Johnnie Walker Black Label",
        price: 750,
        neto: 0.04,
        percentage: "40%",
      },
      {
        title: "Johnnie Walker Double Black",
        price: 800,
        neto: 0.04,
        percentage: "40%",
      },
      {
        title: "Johnnie Walker Gold Label Reserve",
        price: 900,
        neto: 0.04,
        percentage: "40%",
      },
      {
        title: "Johnnie Walker Platinum Label ",
        price: 1700,
        neto: 0.04,
        percentage: "40%",
      },
      {
        title: "Johnnie Walker Blue Label",
        price: 3000,
        neto: 0.04,
        percentage: "43%",
      },
      {
        title: "Johnnie Walker Blue Label King George",
        price: 6500,
        neto: 0.04,
        percentage: "40%",
      },
      {
        title: "J&B",
        price: 300,
        neto: 0.04,
        percentage: "40%",
      },
      {
        title: "Ballantine's ",
        price: 350,
        neto: 0.04,
        percentage: "40%",
      },
      {
        title: "Ballantine's 21",
        price: 2600,
        neto: 0.04,
        percentage: "43%",
      },
      {
        title: "Ballantine's 30",
        price: 6000,
        neto: 0.04,
        percentage: "43%",
      },
      {
        title: "Chivas Regal 12",
        price: 750,
        neto: 0.04,
        percentage: "40%",
      },
      {
        title: "Chivas Regal 18",
        price: 1400,
        neto: 0.04,
        percentage: "40%",
      },
      {
        title: "Chivas Regal 25",
        price: 5150,
        neto: 0.04,
        percentage: "40%",
      },
      {
        title: "Chivas Royal Salute 21",
        price: 2650,
        neto: 0.04,
        percentage: "40%",
      },
    ],
  },
  {
    title: "Malt Whiskey",
    category: "malt viski",
    drinks: [
      {
        title: "Expresso",
        price: 230,
        neto: 0.25,
        percentage: "41%",
      },
      {
        title: "Expresso",
        price: 230,
        neto: 0.25,
        percentage: "41%",
      },
      {
        title: "Expresso",
        price: 230,
        neto: 0.25,
        percentage: "41%",
      },
      {
        title: "Expresso",
        price: 230,
        neto: 0.25,
        percentage: "41%",
      },
      {
        title: "Expresso",
        price: 230,
        neto: 0.25,
        percentage: "41%",
      },
      {
        title: "Expresso",
        price: 230,
        neto: 0.25,
        percentage: "41%",
      },
      {
        title: "Expresso",
        price: 230,
        neto: 0.25,
        percentage: "41%",
      },
      {
        title: "Expresso",
        price: 230,
        neto: 0.25,
        percentage: "41%",
      },
      {
        title: "Expresso",
        price: 230,
        neto: 0.25,
        percentage: "41%",
      },
      {
        title: "Expresso",
        price: 230,
        neto: 0.25,
        percentage: "41%",
      },
      {
        title: "Expresso",
        price: 230,
        neto: 0.25,
        percentage: "41%",
      },
      {
        title: "Expresso",
        price: 230,
        neto: 0.25,
        percentage: "41%",
      },
    ],
  },
];

const page = () => {
  return (
    <>
    <Loader />
    <Layout>
      <div className="page_section">
        <Hero
          paper={"/paper1.png"}
          title1={"Magellan"}
          title2={"karta pića"}
          desc={
            "Raznovrsna karta pića restorana oduševljava širokim spektrom pažljivo odabranih vina, osvežavajućih koktela i vrhunskih alkoholnih pića."
          }
          link={"/reservations"}
        />
        <DrinksImage image="/coffee.jpg" />
        <DrinksItems
          paper1={"/paper2.png"}
          paper2={"/paper3.png"}
          data={DrinksExamples}
        />
        <DrinksImage image="/drinks.jpg" />
        <DrinksItems
          paper1={"/paper4.png"}
          paper2={"/paper1.png"}
          data={DrinksExamples2}
        />
        <DrinksImage image="/beer.jpg" />
        <DrinksItems
          paper1={"/paper2.png"}
          paper2={"/paper3.png"}
          data={DrinksExamples3}
        />
        <DrinksImage image="/wiskey.jpg" />
        <DrinksItems paper1={"/paper2.png"} data={DrinksExamples4} />
      </div>
      </Layout>
    </>
  );
};

export default page;
