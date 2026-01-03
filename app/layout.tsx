import "./globals.css";
import { Navbar } from "../components/ui";
import { Quicksand } from "next/font/google";
import localFont from "next/font/local";

// Google font
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

// Local font (make sure it's in public/fonts or app/fonts)
const sandyKids = localFont({
  src: "/fonts/SandyKids.ttf", // if inside public/fonts
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
    <html lang="en">
      <body
        className={`${quicksand.variable} ${sandyKids.variable} font-quicksand antialiased`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
