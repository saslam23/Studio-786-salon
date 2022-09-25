import React from 'react'

export default function Home() {
  return (
      <>
      <div className="banner-layout">
      <img className="banner-image" src="/assets/eyebrow-threading-2.jpg" alt="banner"/>  
      <div className="banner-info">
      <p className="banner-info-heading">Studio 786 Salon</p>
      <p>Studio 786 Salon is a premier Beauty Salon in the Wheaton area. Since 2016, we’ve offered a wide range of services and products 
              to give you the elegant and fabulous look that you deserve. Scroll on to book an appointment or enjoy our walk-in services.</p>
              <a target="_blank" style={{outline:'none', textDecoration:'none', color:'black', fontSize:'20px'}} href="https://calendly.com/studio786salon"> <button style={{outline:'none',minWidth:'270px', maxWidth:'270px', height:'60px', borderRadius:'5px'}}>
        Book an Appointment
        </button></a>
      </div>
      </div>
      </>
  )
}

