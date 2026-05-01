import type { Metadata } from 'next'
import './normalize.css';

import { getTranslations } from 'next-intl/server';

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  )
}

export async function generateMetadata({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>
}>): Promise<Metadata> {
  const { locale } = await params

  const t = await getTranslations({
    locale,
    namespace: 'generic.metadata',
  })

  return {
    title: t('title'),
    description: t('description'),
  }
}
