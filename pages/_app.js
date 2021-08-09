import "tailwindcss/tailwind.css";
import "../styles/global.css";
import Router from "next/router";

import { appWithTranslation } from "next-i18next";
import ProgressBar from "@badrap/bar-of-progress";

const bar = new ProgressBar({
  size: 4,
  color: "#fe595e",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", bar.start);
Router.events.on("routeChangeComplete", bar.finish);
Router.events.on("routeChangeError", bar.finish);

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default appWithTranslation(MyApp);
