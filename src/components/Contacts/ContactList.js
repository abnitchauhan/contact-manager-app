import React from 'react';
import {Link} from 'react-router-dom';
const ContactList = () => {
  return (
    <> 
    <div className="list-group">
        <div className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">
                    <Link to={`/contacts/1`}>Abnit</Link>
                </h5>
                <small>Contact Id: 1</small>
            </div>
            <p className="mb-1">
                Abnit From HP
            </p>
        </div>
    </div>
    </>
  )
}

export default ContactList