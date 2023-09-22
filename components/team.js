import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook

function Team() {
  const team = [
    {
      name: "Azizbek Daminov",
      avatar: "/img/team/aziz aka.jpeg",
      position: "CEO/Co-founder",
    },
    {
      name: "Begzod Erkinov",
      avatar: "/img/team/begzod aka.jpeg",
      position: "PHP Backend Developer",
    },
    {
      name: "Ali Muxtorov",
      avatar: "/img/team/ali aka.jpeg",
      position: "PHP Backend Developer",
    },
    {
      name: "Ibrohim Sobirov",
      avatar: "/img/team/ibrohim flutter.jpg",
      position: "Flutter Developer",
    },
    {
      name: "Ibrohim Sa'dullayev",
      avatar: "/img/team/ibrohim bekend.jpeg",
      position: "PHP Backend Developer",
    },
    {
      name: "Nodirbek Sodiqov",
      avatar: "/img/team/nodirbek.jpeg",
      position: "Frontend Developer",
    },
  ];

  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    prevArrow: false,
    nextArrow: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { t } = useTranslation("common");

  return (
    <section className="bg-white dark:bg-trueGray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-voltiva-800 lg:leading-tight lg:text-4xl dark:text-white">
            {t("teamtitle")}
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            {t("teamtext")}
          </p>
        </div>
        <Slider {...settings}>
          {team.map((item, key) => (
            <div key={key} className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full object-cover"
                src={item.avatar}
                alt={item.name + " Avatar"}
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">{item.name}</a>
              </h3>
              <p>{item.position}</p>
              <ul className="flex justify-center mt-4 space-x-4">
                {/* Social media links here... */}
              </ul>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Team;

// Assuming you have your translation setup correctly, you can keep the following getStaticProps function as is
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
