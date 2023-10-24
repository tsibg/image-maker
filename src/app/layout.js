import { Inter } from "next/font/google";
import styles from "./home.module.css";

import "./globals.css";
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
          <div className={styles.container}>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
