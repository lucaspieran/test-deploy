import React, { ReactNode } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="relative">
        <div className="fixed z-10 w-full">
          <Navbar />
        </div>
        <div className="relative z-0">{children}</div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
