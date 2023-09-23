import Navbar from "../components/navbar"
import SectionTitle from "../components/sectionTitle"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Footer from "../components/footer"
import Team from "../components/team"
import Timeline from "../components/Timeline"
import ContactForm from "../components/ContactForm"
import { useTranslation } from "next-i18next"
import Head from "../components/head"

const Home = () => {
  
  const { t } = useTranslation("common")

  return (
    <>
      <Navbar />

      <Head/>

      <div id="about">
        <SectionTitle title={t("abouttitle")}>{t("abouttext")}</SectionTitle>
      </div>
      
      <div id="for e.v">
        <SectionTitle title={t("for e.v title")}>{t("for e.v text")}</SectionTitle>
      </div>
      <div id="for ch.s">
        <SectionTitle title={t("for ch.s title")}>{t("for ch.s text")}</SectionTitle>
      </div>
      <div id="for inestor">
        <SectionTitle title={t("for inestor title")}>{t("for inestor text")}</SectionTitle>
      </div>

      <div id="team">
        <Team />
      </div>
     
      <SectionTitle title={t("featurestitle")}>
      <div id="features">
        <Timeline />
        </div>
      </SectionTitle>

      <div id="contact">
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
