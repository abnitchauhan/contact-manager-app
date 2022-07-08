import React from 'react'

const Channel = (props) => {
  return (
    
        <div className="col-md-3">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <div className="card-text">
                <p>{props.info}</p>
                </div>
                <button className='btn btn-primary float-end'>Add to Fav.</button>
            </div>
        </div>
    </div>       
  )
}

export default Channel