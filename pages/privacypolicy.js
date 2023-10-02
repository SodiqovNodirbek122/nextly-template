import React from "react"
import SectionTitle from "../components/sectionTitle"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Head from "next/head"

function PrivacypolicyPage() {
  const { t } = useTranslation("common", "privacypolicy")
  return (
    <>
      <Head>
        <title>{t("privacypolicy:privacypolicy")} </title>
      </Head>
      <SectionTitle title={t("privacypolicy:privacypolicy")} align="left">
        <div className="markdown prose w-full break-words dark:prose-invert light">
          <p>{t("privacypolicy:p1")}</p>
          <ol>
            <li>
              <p>
                <strong>{t("privacypolicy:p2")}</strong>
              </p>
              <ul>
                <li>{t("privacypolicy:p3")}</li>
                <li>{t("privacypolicy:p4")}</li>
              </ul>
            </li>
            <li>
              <p>
                <strong>{t("privacypolicy:p5")}</strong>
              </p>
              <ul>
                <li>{t("privacypolicy:p6")}</li>
                <li>{t("privacypolicy:p7")}</li>
              </ul>
            </li>
            <li>
              <p>
                <strong>{t("privacypolicy:p8")}</strong>
              </p>
              <ul>
                <li>{t("privacypolicy:p9")}</li>
                <li>{t("privacypolicy:p10")}</li>
              </ul>
            </li>
            <li>
              <p>
                <strong>{t("privacypolicy:p11")}</strong>
              </p>
              <ul>
                <li>{t("privacypolicy:p12")}</li>
                <li>{t("privacypolicy:p13")}</li>
              </ul>
            </li>
            <li>
              <p>
                <strong>{t("privacypolicy:p14")}</strong>
              </p>
              <ul>
                <li>{t("privacypolicy:p15")}</li>
                <li>{t("privacypolicy:p16")}</li>
              </ul>
            </li>
            {/* <li>
              <p>
                <strong>{t("p17")}</strong>
              </p>
              <ul>
                <li>
                  Ilovamiz maxfiylik siyosati yoki shaxsiy ma'lumotlaringiz
                  haqida savollar bo'lsa, bizga ["Aloqa"](ilova manzil) orqali
                  murojaat qila olishingiz mumkin.
                </li>
              </ul>
            </li> */}
          </ol>
          {/* <p>
            <strong>Axloq</strong>
          </p>
          <p>
            Ushbu maxfiylik siyosati o'zgartirilishi mumkin. O'zgartirilgan
            maxfiylik siyosatini bilish uchun ilovamizni boshqaruvchi taraflar
            bilan bog'lanishingizni tavsiya qilamiz.
          </p>
          <p>Oxirgi yangilanish: 1-oktyabr, 2023</p> */}
        </div>
      </SectionTitle>
    </>
  )
}

export default PrivacypolicyPage
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "privacypolicy"])),
    },
  }
}
