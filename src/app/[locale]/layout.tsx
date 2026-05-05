import type { Metadata } from 'next'
import './normalize.css'

import { getTranslations } from 'next-intl/server'

import { MuiThemeProvider } from '@/components/mui-theme-provider'
import { SupabaseAuthProviderWrapper } from '@/components/supabase-auth-provider'

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
      <body>
        <MuiThemeProvider>
          <SupabaseAuthProviderWrapper>{children}</SupabaseAuthProviderWrapper>
        </MuiThemeProvider>
      </body>
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
