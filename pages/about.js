import Header from "../components/Header";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function About() {
  return (
    <div>
      <Header />
      About
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default About;
