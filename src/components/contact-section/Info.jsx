import React from 'react'

import './info.css'



const Info = () => (
  <section className="info">
    <h2 className="font-semibold text-2xl mb-6">Contact information</h2>

    {/* <div className="info-details-container">{renderContactDetails()}</div>
    <div className="info-icons-container">{renderIcons()}</div> */}
    <div>
            <p>Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no sit erat lorem et magna ipsum dolore amet erat.</p>
            <p className="mb-2"><i className="fa fa-map-marker-alt text-site-color mr-3" />123 Street, New York, USA</p>
            <p className="mb-2"><i className="fa fa-envelope text-site-color mr-3" />info@example.com</p>
            <p className="mb-0"><i className="fa fa-phone-alt text-site-color mr-3" />+012 345 67890</p>
    </div>
  </section>
)

export default Info
