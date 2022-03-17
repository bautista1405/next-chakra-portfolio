import { ChakraProvider } from "@chakra-ui/react"
import { DefaultSeo } from "next-seo"

import theme from "@/theme/index"
import Layout from "@/layouts/global"
import SEO from "next-seo.config"

import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as ga from '../lib/ga/index'

import "@fontsource/poppins/latin-400.css"
import "@fontsource/poppins/latin-500.css"
import "@fontsource/poppins/latin-600.css"
import "@fontsource/poppins/latin-700.css"
import "@/styles/index.css"

const MyApp = ({ Component, pageProps }) => {

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])


  return (
  <>
    <DefaultSeo {...SEO} />

    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  </>
  )}

export default MyApp
