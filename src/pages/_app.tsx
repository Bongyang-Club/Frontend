import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import Header from "@/components/header";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-[#F5F5F5]">
      <Head>
        <title>Bongyang-Club</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
