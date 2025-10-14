import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: '採用情報 | 株式会社グッドフェローズ',
  description: '再エネ100%の未来へ。変革に挑む戦友を募集しています。No Re-new, No Future',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={notoSansJP.className}>
        {children}
      </body>
    </html>
  )
}
