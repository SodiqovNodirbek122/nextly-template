
import Hero from "../components/hero"
import Navbar from "../components/navbar"
import SectionTitle from "../components/sectionTitle"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Footer from "../components/footer"
import Team from "../components/team"
import Timeline from "../components/Timeline"
import ContactForm from "../components/ContactForm"
import { useTranslation } from "next-i18next"

const Home = () => {
  
  const { t } = useTranslation("common")

  return (
    <>
   

      <Navbar />
      <div id="home">
      <Hero />
      </div>
      <div id="about">
        <SectionTitle title={t("hometitle")}>{t("hometext")}</SectionTitle>
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
