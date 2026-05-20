import { Body } from "@/components/layout/helper";
import "./globals.css";
import { StateContext } from "@/context/GlobalContext";

export const metadata = {
  title: "Shayan Ali Bakhsh Portfolio",
  description:
    "Shayan Ali Bakhsh portfolio website. A web developer and Mobile Developer",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Shayan Ali Bakhsh Portfolio",
    description: "Shayan Ali Bakhsh portfolio website. A web and Mobile Developer",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StateContext>
        <Body>
          <h1 style={{ display: "none" }}>Shayan Ali Bakhsh Portfolio</h1>
          {children}
        </Body>
      </StateContext>
    </html>
  );
}
