import Head from "next/head";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";

import nearby_locations from "../public/assets/data/nearby_locations.json";
import anywhere_locations from "../public/assets/data/anywhere_locations.json";

const Home = ({ nearby_locations, anywhere_locations }) => {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <div className="">
      <Head>
        <title>AirBnB UI NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <h1>{t("error-with-status",{ 'statusCode' : '404'})}</h1> */}

      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      {/* Main */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* Pull data from SV - API endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {nearby_locations?.map(({ id, img, location, distance }, index) => (
              <SmallCard
                key={id}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {anywhere_locations?.map(({ id, title, img }, index) => (
              <MediumCard key={id} title={title} img={img} />
            ))}
          </div>
        </section>

        <LargeCard img="/assets/images/card_image.webp" title="The Greatest Outdoors" description="Wishlists curated by Airbnb." buttonText="Get Inspired"/>
      </main>

      <Footer/>
    </div>
  );
};

export const getStaticProps = async ({ locale }) => {
  // const nearby_locations = await fetch("https://jsonkeeper.com/b/4G1G").then((res) =>
  //   <res className="j"></res>son()
  // );

  return {
    props: {
      nearby_locations,
      anywhere_locations,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default Home;
