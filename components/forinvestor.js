import React from 'react';
import { useTranslation } from "react-i18next"
import SectionTitle from './sectionTitle';
const Forinvestor = () => {
    const { t } = useTranslation("common")
  return (
    <div id="for investor ">
    <SectionTitle title={t("for investor title")}>
    <div className="grid grid-cols-2 gap-4">
      
      <div>
        <p className="text-lg text-gray-800 dark:text-white ">
        {t("for investor text")}
        </p>
      </div>
      <div>
        <img
          src="/img/charging.svg"
          alt="Rasm"
          className="w-full h-auto"
        />
      </div>
    </div>
    </SectionTitle>
  </div>
  );
};

export default Forinvestor;
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  }
}