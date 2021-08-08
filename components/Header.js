import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  SearchIcon,
  CheckIcon,
  SelectorIcon,
} from "@heroicons/react/solid";

import { useTranslation } from "next-i18next";

// import Link from "next/link";
import { useRouter } from "next/router";
import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";

const Header = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  const locales = router.locales;
  const [language, setLanguage] = useState(router.locale);

  const changeLanguage = (locale) => {
    setLanguage(locale);
    router.push("", undefined, { locale });
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-sm p-5 md:px-10">
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="/assets/images/logo.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={t("start-your-search")}
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      {/* Right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">{t("become-a-host")}</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>

        {/* listbox container */}
        <div className="w-24">
          <Listbox value={language} onChange={changeLanguage}>
            <div className="relative">
              <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-sm cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 border-2 focus-visible:border-indigo-500 sm:text-sm">
                <span className="block truncate">{language}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {locales.map((locale, index) => (
                    <Listbox.Option
                      key={index}
                      className={({ active }) =>
                        `${active ? "text-red-900 bg-red-100" : "text-gray-900"}
                            cursor-default select-none relative py-2 pl-10 pr-4`
                      }
                      value={locale}
                    >
                      {({ selected, active }) => (
                        <div>
                          <span
                            className={`${
                              selected ? "font-medium" : "font-normal"
                            } block truncate`}
                          >
                            {locale}
                          </span>
                          {selected ? (
                            <span
                              className={`${active && "text-red-600"}
                                  absolute inset-y-0 left-0 flex items-center pl-3`}
                            >
                              <CheckIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </div>
    </header>
  );
};

export default Header;
