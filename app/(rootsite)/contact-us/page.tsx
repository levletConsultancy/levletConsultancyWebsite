import ContactPage from '@/components/pages/ContactPage'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Levlet Consultancy Ltd',
  description: 'Book a consultation with Levlet Consultancy Ltd. Choose a Saturday that works for you and let us know what you would like to discuss.',
}


const page = () => {
  return (
    <main>
      <ContactPage />
    </main>
  )
}

export default page
