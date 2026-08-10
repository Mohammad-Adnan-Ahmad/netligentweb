import React from 'react'
import { Helmet } from 'react-helmet-async'
import ContactHero from '../../components/ContactUsComponents/ContactHero'
import FAQs from '../../components/ContactUsComponents/FAQs'
import ContactDetails from '../../components/ContactUsComponents/ContactDetail'
import ContactForm from '../../components/ContactUsComponents/ContactForm'

function ContactUsPage() {
  return (
        <>
              <Helmet>
                <title>Contact - Netligent Technologies</title>
                <meta name="description" content="Top IT courses with placement support." />
                <meta name="keywords" content="Best IT Training Institute in Bhopal, contact Netligent, IT training insttute, institute phone number, training institute address, Best IT training institute" />
              </Helmet>

            <ContactHero/>
            <ContactDetails/>
            <ContactForm/>
            {/* <FAQs/> */}
        </>
  )
}

export default ContactUsPage