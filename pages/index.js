import SectionTitle from "../components/sectionTitle"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
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
<<<<<<< HEAD
  const { t } = useTranslation("common")
=======
  const { t } = useTranslation("common");
  const router = useRouter(); // Use the useRouter hook to access route information

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.asPath]); // Use router.asPath to track route changes
>>>>>>> 8c1e2cab890987aef2e77e7bbb34d72a321396a6

  return (
    <>
      <Head />

      <div id="about">
        <SectionTitle title={t("abouttitle")}>
<<<<<<< HEAD
          <About />
=======
          <About/>
>>>>>>> 8c1e2cab890987aef2e77e7bbb34d72a321396a6
        </SectionTitle>
      </div>
      <div id="for e.v">
        <SectionTitle title={t("for e.v title")}>
          <Card />
        </SectionTitle>
      </div>
<<<<<<< HEAD
      <Forinvestor />
=======
      <Forinvestor/>
>>>>>>> 8c1e2cab890987aef2e77e7bbb34d72a321396a6

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
