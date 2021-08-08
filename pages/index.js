import { useRouter } from "next/router";
import Link from "next/link";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Head from "next/head";

import Banner from "../components/Banner";
import Header from "../components/Header";

const Home = () => {
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
      {/*  */}
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Home;
