import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const randomTitle = () => {
  const titles = [
    'Ирвин Казино - Официальный Сайт онлайн игр | Irwin Casino',
    'Irwin Casino официальный сайт - играйте онлайн безопасно',
    'Ирвин казино зеркало - Безопасный доступ к лучшим играм',
    'Irwin казино - Онлайн игры на деньги с лицензией',
  ]
  return titles[Math.floor(Math.random() * titles.length)]
}

const randomDescription = () => {
  const descriptions = [
    'Irwin Casino - официальный сайт с надежной платформой для онлайн игр. Быстрая регистрация, безопасный доступ, щедрые бонусы и выигрыши. Ирвин казино зеркало для игроков.',
    'Ирвин казино предлагает лучшие условия для азартных игр онлайн. Официальный портал Irwin casino с честными правилами, защитой игроков и круглосуточной поддержкой.',
    'Irwin casino - надежная платформа для игры. Ирвин казино зеркало обеспечивает доступ к полному каталогу игр. Официальный сайт работает без ограничений.',
  ]
  return descriptions[Math.floor(Math.random() * descriptions.length)]
}

export const metadata: Metadata = {
  title: randomTitle(),
  description: randomDescription(),
  generator: 'v0.app',
  openGraph: {
    title: randomTitle(),
    description: randomDescription(),
    type: 'website',
    url: 'https://irwin7casino.vercel.app',
  },
  alternates: {
    canonical: 'https://irwin7casino.vercel.app',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="description" content={randomDescription()} />
        <meta name="keywords" content="irwin casino, ирвин казино, irwin casino официальный, ирвин казино официальный сайт, irwin casino зеркало, ирвин казино зеркало, irwin casino играть, ирвин казино играть, irwin casino онлайн, ирвин казино онлайн" />
        <meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <link rel="canonical" href="https://irwin7casino.vercel.app" />
        <link rel="alternate" href="https://irwin7casino.vercel.app" hrefLang="ru" />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
