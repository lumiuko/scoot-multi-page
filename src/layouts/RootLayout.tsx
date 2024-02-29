import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import Navbar from '../components/Navbar'
import SignupBanner from '../components/SignupBanner'
import Footer from '../components/Footer'

export default function RootLayout() {
  const location = useLocation()

  useEffect(() => {
    scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <Navbar />
      <Outlet />
      <SignupBanner />
      <Footer />
    </>
  )
}
