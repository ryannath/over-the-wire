import '/styles/globals.scss'
import type { AppLayoutProps, AppProps } from 'next/app'
import MainLayout from '../components/layouts/MainLayout'
import { ReactNode } from 'react'

function MyApp({ Component, pageProps }: AppLayoutProps) {

  const getLayout = Component.getLayout || ((page: ReactNode) => <MainLayout>{page}</MainLayout>)
  let content = <Component {...pageProps}/>
  if (Component.getLayout) {
    content = Component.getLayout(content);
  }
  return <MainLayout>{content}</MainLayout>
}

export default MyApp
