import React, { Component } from 'react'

export default class ContactForm extends Component {
  render() {
    return ( 
        <>
            <div className="row">
                <div className="col-md-12">
                    <h3>Create Contact</h3>
                    <form>
                        <input type="text" placeholder='Enter Contact Name' className='form-control' /><br/>
                        <input type="text" placeholder='Enter email' className='form-control' /><br/>
                        <input type="text" placeholder='Enter Contact' className='form-control' /><br/>
                        {/* <textarea required rows="5" cols="38" placeholder='Enter Details' /> */}
                        <button className='btn btn-primary' type='submit'> Submit </button>
                    </form>
                </div>
            </div>
        </>
    )
  }
}
