import "./globals.css";
import Navbar from "../components/ui/Navbar";
import { Quicksand } from "next/font/google";
import localFont from "next/font/local";


const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

const sandyKids = localFont({
  src: "./fonts/SandyKids.ttf",  // correct path for Next.js public assets
  variable: "--font-sandyKids",
  display: "swap",
});

export const metadata = {
  title: "Sandton Prep School",
  description: "Learning made brighter.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${quicksand.variable} ${sandyKids.variable}`}>
      <body className="font-quicksand">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
