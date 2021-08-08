import { useTranslation } from "next-i18next";
const Footer = () => {
    const { t } = useTranslation("common");
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
            <div className="space-y-4 text-sm text-gray-800">
                <h5 className="font-bold uppercase">{t('about')}</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Deluxe</p>
            </div>
            <div className="space-y-4 text-sm text-gray-800">
                <h5 className="font-bold uppercase">{t('community')}</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Deluxe</p>
            </div>
            <div className="space-y-4 text-sm text-gray-800">
                <h5 className="font-bold uppercase">{t('host')}</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Deluxe</p>
            </div>
            <div className="space-y-4 text-sm text-gray-800">
                <h5 className="font-bold uppercase">{t('support')}</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Deluxe</p>
            </div>
        </div>
    )
}

export default Footer;
