import Head from "next/head"
import Hero from "../components/hero"
import Navbar from "../components/navbar"
import SectionTitle from "../components/sectionTitle"

import { benefitOne, benefitTwo } from "../components/data"
import Video from "../components/video"
import Benefits from "../components/benefits"
import Footer from "../components/footer"
import Testimonials from "../components/testimonials"
import Cta from "../components/cta"
import Faq from "../components/faq"

const Home = () => {
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
      <SectionTitle title=" About our Project">
        VOLTIVA is an online platform and mobile application that serves as an
        aggregator for electric vehicle (EV) charging stations. Our platform
        will provide EV drivers with a seamless and user-friendly experience to
        locate, access, and pay for charging services across a wide network of
        both public and private charging stations. By consolidating various
        charging station providers onto a single platform, VOLTIVA eliminates
        the need for users to navigate multiple apps and enables them to find
        available charging stations easily. Additionally, our platform empowers
        home charging station owners to monetize their charging infrastructure
        by offering their chargers to other EV drivers when they are not in use.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <SectionTitle title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
    </>
  )
}

export default Home
