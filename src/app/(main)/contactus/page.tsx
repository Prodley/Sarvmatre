import { ContactFormUi } from '@/components/contact-form-ui'
import { ContactFormLayout } from '@/components/contact-formlayout'
import { ContactMap } from '@/components/contact-map'
import Cform from '@/components/contactform'
import { Contacthead } from '@/components/contacthead'
import { Faqs } from '@/components/faqs'
import React from 'react'

const page = () => {
  return (
    <div>
        <Contacthead/>
        <ContactMap/>
        {/* <ContactForm/> */}
        {/* <Cform/> */}
        {/* <ContactFormUi/> */}
        <ContactFormLayout/>
        <Faqs/>
    </div>
  )
}

export default page
