import React from 'react'
import ContactForm from './ContactForm'
import ContactList from './ContactList'

const Contacts = () => {
  return (
    <div><h2>Contacts </h2>
    <div className="row">
        <div className="col-md-4">
            <ContactForm />
        </div>
        <div className="col-md-8">  
            <ContactList />
        </div>
    </div>
    </div>
  )
}

export default Contacts