import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const inter = Noto_Sans_Thai({ 
  weight: ["400","600","700"],
  subsets: ["thai"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
