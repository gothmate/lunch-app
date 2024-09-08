import type { Metadata } from "next"
import { Inter } from "next/font/google"
import styles from '@/app/page.module.sass'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lunch-App",
  description: "Created by Gate7 Enterprises",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} ${styles.body}`}>
        <main className={styles.main}>
          {children}
        </main>
      </body>
    </html>
  )
}
