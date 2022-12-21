import React from 'react'

import Form from './Form'
import Info from './Info'

import './contact-section.css'

const ContactSection = () => (
  <>
    <div className="grid grid-cols-3">
      <div className='col-span-2'><Form/></div>
      <div><Info /></div>
    </div>
  </>
)

export default ContactSection
