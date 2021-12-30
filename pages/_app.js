import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { Loader } from '../components/Loader'

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

    // TODO: Remove timeout if necessary
    const handleRouteChangeComplete = (url) => {
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }

    const handleRouteChangeError = (err, url) => {
      setTimeout(() => {
        setLoading(false)
      }, 2000)
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
        <Component {...pageProps} />
      )}
    </>
  )
}

export default MyApp
