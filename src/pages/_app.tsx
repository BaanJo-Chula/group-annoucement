import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import { Icon } from "@iconify/react";
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
