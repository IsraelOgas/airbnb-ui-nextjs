import Image from "next/image";
import { useTranslation } from "next-i18next";

const Banner = () => {
  const { t } = useTranslation("common");
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src="/assets/images/banner.webp" layout="fill" objectFit="cover" />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg font-bold">{t("not-sure-where-to-go")}</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">{t('flexible-search')}</button>
      </div>
    </div>
  );
};

export default Banner;
