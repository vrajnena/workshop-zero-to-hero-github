import { Merriweather } from '@next/font/google'
import type { AppProps } from 'next/app'

import '@/styles/globals.css'

const mw = Merriweather({
  subsets: ['latin'],
  variable: '--font-mw',
  weight: ['300', '400', '700', '900'],
  style: ['normal', 'italic']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${mw.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
