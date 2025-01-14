import Link from "next/link"
import ThemeChanger from "./DarkSwitch"
import Image from "next/image"
import { Disclosure } from "@headlessui/react"
import { useTheme } from "next-themes"
import Language from "./Language"
import { useTranslation } from "next-i18next"

const Navbar = () => {
  const navigation = [
    "about",
    "for e.v",
    "for ch.s",
    "for investor",
    "team",
    "features",
    "forum",
  ]
  const { theme, setTheme } = useTheme()
  const { t } = useTranslation()

  return (
    <div className="w-full sticky bg-white dark:bg-trueGray-600 top-0 z-[99999]">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <Image
                    src={`/img/${
                      theme === "dark" ? "logo-dark" : "voltiva"
                    }.svg`}
                    alt="N"
                    width="100"
                    height="50"
                    className="w-28"
                  />
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-voltiva-500 focus:text-voltiva-500 focus:bg-voltiva-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        href={`#${item}`}
                        className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-voltiva-500 focus:text-voltiva-500 focus:bg-voltiva-100 dark:focus:bg-gray-800 focus:outline-none"
                      >
                        {t(item)}
                      </Link>
                    ))}
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>
        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((item, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href={`#${item}`}
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-voltiva-500 focus:text-voltiva-500 focus:bg-voltiva-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {t(item)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <ThemeChanger />
          <Language />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
