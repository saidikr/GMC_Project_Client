import React from 'react'
import '../header.css'
import './form.css'

const formInputs = [
  { id: 'name', type: 'text', label: 'Your name', placeholder: 'John Doe' },
  {
    id: 'tel',
    type: 'tel',
    label: 'Phone number',
    placeholder: '+01 234 567 8900',
  },
  {
    id: 'email',
    type: 'email',
    label: 'Email address',
    placeholder: 'you@example.com',
  },
  {
    id: 'message',
    type: 'textarea',
    label: 'Your message',
    placeholder: 'How can we help you? Or you us?',
  },
]

const Form = () => (
  <>
  <form className="form">
    <h2 className="form-h2 font-semibold">Send us a message</h2>

    {formInputs.map(input => (
      <label key={input.id} id={input.id} className="form-label">
        {input.type === 'textarea' ? (
          <textarea className="form-textarea" placeholder={input.label} />
        ) : (
          <input
            className="form-input "
            type={input.type}
            placeholder={input.label}
          />
        )}
      </label>
    ))}
    <div className='form-submit relative'><button className="absolute right-5 text-center rounded px-3 bg-btn-color text-black py-3" type="submit">Send Message</button></div>
  </form>
      
</>
      )

export default Form
