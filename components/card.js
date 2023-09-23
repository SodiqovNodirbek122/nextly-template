import React from 'react';
import { useTranslation } from "react-i18next"
import SectionTitle from './sectionTitle';
const Card = () => {
    const { t } = useTranslation("common")
  return (
    <>
    <div className="grid grid-cols-2 gap-4">
      
      <div>
        <p className="text-lg text-gray-800 dark:text-white bg-red-400">
          
        {t("for e.v text")}
        </p>
      </div>
      <div>
        <img
          src="/img/city-driver.svg"
          alt="Rasm"
          className="w-full h-auto"
        />
      </div>
    </div>
    <div id="for ch.s">
    <SectionTitle title={t("for ch.s title")}>
    <div className="grid grid-cols-2 gap-4">
    <div>
        <img
          src="/img/benefit-two.png"
          alt="Rasm"
          className="w-full h-auto"
        />
      </div>
      <div>
        <p className="text-lg text-gray-800 dark:text-white bg-red-400">
          
        {t("for ch.s text")}
        </p>
      </div>
     
    </div>
    </SectionTitle>
  </div>

  </>
  );
};

export default Card;
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  }
}