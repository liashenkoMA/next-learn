import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Изучаю nextjs, TS, scss',
  description: 'Разбираюсь в nextjs, как он работает. Смотрю отличия от react реализуя разный простенький функционал, чтобы набить руку. Экспериментирую. Изучаю scss и TS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
