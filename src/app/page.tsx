import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
    </div>
  )
}

export default page
