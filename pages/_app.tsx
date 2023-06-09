import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps, router }: AppProps) {
  return <RecoilRoot><Component {...pageProps} /></RecoilRoot>
}
