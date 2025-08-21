import "./globals.css";
import Navbar from "../components/ui/Navbar";  // <-- make sure this path is correct

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
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
