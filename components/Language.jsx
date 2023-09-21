import { useRouter } from "next/router"
import React, { useState } from "react"

function Language() {
  const router = useRouter()
  const [langToggle, setLangToggle] = useState(false)
  const languages = [{ code: "en" }, { code: "ru" }, { code: "uz" }]
  const changeLanguage = async (lang) => {
    //  try {
    //    await requests.app.changeLanguage({
    //      locale: lang,
    //      ...(isLogged && { user_id: user?.id }),
    //    })
    //  } catch (error) {
    //    console.log(error)
    //  }
    router.push(router.asPath, router.asPath, { locale: lang })
    //  Cookies.set("NEXT_LOCALE", lang, { expires: 3 })
    // save lang to cookie
  }
  return (
    <div
      className="relative"
      onClick={() => setLangToggle(!langToggle)}
      onMouseEnter={() => setLangToggle(!langToggle)}
      onMouseLeave={() => setLangToggle(false)}
    >
      <div
        className={
          "flex items-center relative text-voltiva-500  cursor-pointer"
        }
      >
        <span className="ml-1 sm:font-bold uppercase sm:text-lg text-xs">
          {router.locale}
        </span>
      </div>
      {langToggle && (
        <ul className="z-50  absolute top-full sm:left-0 bg-white shadow-catalog sm:w-16 w-12">
          {languages &&
            languages?.map((language, index) => (
              <li
                key={index}
                onClick={() => changeLanguage(language.code)}
                className={`${
                  router.locale === language.code
                    ? "bg-customYellow text-voltiva-500"
                    : "bg-customGrey-hover text-gray-500 text-customBlue1-hover"
                } cursor-pointer text-xs p-1.5 sm:px-2 flex flex-row justify-between items-center `}
              >
                {/* <img
                    className="sm:w-7 w-5 sm:h-5 h-4 object-cover sm:rounded-lg mr-1"
                    src={`/${language.code}.svg`}
                    alt=""
                  /> */}
                <span>{language.code}</span>
              </li>
            ))}
        </ul>
      )}
    </div>
  )
}

export default Language
