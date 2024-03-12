import { Inter } from "next/font/google";
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import "./globals.css";
import Loading from "./loading";
import { LoadingProvider } from './context/loadingContext';
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BetSell | Transforming sports betting with NFTs",
  description: "  Discover a new era of sports betting with BetSell, the first and only bet marketplace. Explore, trade and redeem digital sports tickets securely on the blockchain",
};

export default function RootLayout({ children }) {
  return (
    <>   
    <html lang="en">
      <body className={inter.className}>
      <Loading />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
    </>
  );
}

