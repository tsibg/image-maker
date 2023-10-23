import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./home.module.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Image Generator",
  description: "Next App Image Generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.background}></div>

        <main className={styles.main}>
          <h1 className={styles.title}>
            <Link href="/">Image Maker.</Link>
          </h1>
          {children}
        </main>
      </body>
    </html>
  );
}
