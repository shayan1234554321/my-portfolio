import { Body } from "@/components/layout/helper";
import "./globals.css";
import Head from "next/head";
import { StateContext } from "@/context/GlobalContext";

export const metadata = {
  title: "Shayan Ali Bakhsh Portfolio",
  description:
    "Shayan Ali Bakhsh portfolio website. A web developer and Mobile Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Shayan Ali Bakhsh Portfolio</title>
        <meta
          property="og:description"
          content="Shayan Ali Bakhsh portfolio website. A web developer and Mobile Developer"
        />
        <meta property="og:title" content="Shayan Ali Bakhsh Portfolio" />
      </Head>
      <StateContext>
        <Body>
          <h1 style={{ display: "none" }}>Shayan Ali Bakhsh Portfolio</h1>
          {children}
        </Body>
      </StateContext>
    </html>
  );
}
