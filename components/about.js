import React from 'react';
import { useTranslation } from "react-i18next"
const About = () => {
    const { t } = useTranslation("common")
  return (
    <div>
      <div className="col-span-1 pb-10">
        <img
          src="/img/benefit-one.png"
          alt="Rasm"
          className="w-full h-auto"
        />
      </div>
      <div className="col-span-2 ">
        <p className="text-lg text-gray-800 dark:text-white bg-red-400">
          
          {t("abouttext")}
        </p>
      </div>
    </div>
  );
};

export default About;
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  }
}

