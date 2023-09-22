import Head from "next/head"
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
      <Head>
        <title>
          Voltiva - online platform and mobile application that serves as an
          aggregator for electric vehicle (EV) charging stations
        </title>
        <meta
          name="description"
          content="VOLTIVA is an online platform and mobile application that serves as an aggregator for electric vehicle (EV) charging stations. Our platform will provide EV drivers with a seamless and user-friendly experience to locate, access, and pay for charging services across a wide network of both public and private charging stations. By consolidating various charging station providers onto a single platform, VOLTIVA eliminates the need for users to navigate multiple apps and enables them to find available charging stations easily. Additionally, our platform empowers home charging station owners to monetize their charging infrastructure by offering their chargers to other EV drivers when they are not in use."
        />
        <link rel="icon" href="/Union.svg" />
      </Head>

      <Navbar />
      <Hero />
      <div id="about">
        <SectionTitle title={t("hometitle")}>{t("hometext")}</SectionTitle>
      </div>

      <div id="Team">
        <Team />
      </div>

      <SectionTitle title="Our features">
        <Timeline />
      </SectionTitle>

      <ContactForm />
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
