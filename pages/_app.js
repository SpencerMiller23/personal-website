import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { Loader } from '../components/Loader'
import Layout from '../components/layout'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  // Adds event listeners to handle page loading animations
  // Useful link: https://nextjs.org/docs/api-reference/next/router
  useEffect(() => {
    const handleRouteChange = (url) => {
      setLoading(true)
    }

    const handleRouteChangeComplete = (url) => {
      setLoading(false)
    }

    const handleRouteChangeError = (err, url) => {
      setLoading(false)
    }

    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)
    router.events.on('routeChangeError', handleRouteChangeError)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  })

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  )
}

export default MyApp
