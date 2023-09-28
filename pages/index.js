import Navbar from "../components/navbar"
import SectionTitle from "../components/sectionTitle"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Footer from "../components/footer"
import Team from "../components/team"
import Timeline from "../components/Timeline"
import ContactForm from "../components/ContactForm"
import { useTranslation } from "next-i18next"
import Head from "../components/head"
import About from "../components/about"
import Card from "../components/card"
import Forinvestor from "../components/forinvestor"
import { useEffect } from "react";
import { useRouter } from "next/router"; // Import the useRouter hook

const Home = () => {
  const { t } = useTranslation("common");
  const router = useRouter(); // Use the useRouter hook to access route information

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.asPath]); // Use router.asPath to track route changes

  return (
    <>
      <Navbar />

      <Head/>

      <div id="about">
        <SectionTitle title={t("abouttitle")}>
          <About/>
        </SectionTitle>
      </div>
      <div id="for e.v">
        <SectionTitle title={t("for e.v title")}>
          <Card/>
        </SectionTitle>
      </div>
      <Forinvestor/>

      <div id="team">
        <Team />
      </div>
     
      <SectionTitle title={t("featurestitle")}>
        <div id="features">
          <Timeline />
        </div>
      </SectionTitle>

      <div id="forum">
        <ContactForm />
      </div>

      <Footer />
    </>
  )
}

export default Home
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  }
}
