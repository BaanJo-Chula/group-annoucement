import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import { salapao, imbthai } from "../fonts/fonts";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${salapao.variable} ${imbthai.variable} font-sans`}>
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
