import Image from "next/image"
import Container from "./container"
import heroImg from "../public/img/rafiki.svg"

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Online platform and Mobile application
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              VOLTIVA is an online platform and mobile application that serves
              as an aggregator for electric vehicle (EV) charging stations. Our
              platform will provide EV drivers with a seamless and user-friendly
              experience to locate, access, and pay for charging services across
              a wide network of both public and private charging stations.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              // loading="eager"
              // placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Hero
