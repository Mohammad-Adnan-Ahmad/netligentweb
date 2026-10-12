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
                <title>Contact Netligent Technologies | IT Training Institute Bhopal</title>
                <meta name="description" content="Contact Netligent Technologies in Bhopal for IT courses, career counselling, course enquiries and training in Data Science, Cyber Security, AI, Full Stack and DevOps." />
                <meta name="keywords" content="Best IT Training Institute in Bhopal, contact Netligent, IT training insttute, institute phone number, training institute address, Best IT training institute" />
              {/* ✅ Canonical URL */}
                <link rel="canonical" href="https://www.netligent.com/contact-us" />
              </Helmet>

            <ContactHero/>
            <ContactDetails/>
            <ContactForm/>
            {/* <FAQs/> */}
        </>
  )
}

export default ContactUsPage