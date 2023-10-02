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

const Home = () => {
  const { t } = useTranslation("common")

  return (
    <>
      <Head />

      <div id="about">
        <SectionTitle title={t("abouttitle")}>
          <About />
        </SectionTitle>
      </div>
      <div id="for e.v">
        <SectionTitle title={t("for e.v title")}>
          <Card />
        </SectionTitle>
      </div>
      <Forinvestor />

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
