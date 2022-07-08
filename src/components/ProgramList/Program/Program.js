import React from 'react'

const Program = (props) => {
  return (
   <>
    <div className="col-md-4">
           
           <div className="card">
               <div className="card-header">
                   Featured
                   <span className="badge bg-warning float-end">
                   {props.category}
                   </span>
               </div>
               
               <div className="card-body">
                   <h5 className="card-title">{props.name}</h5>
                   <p className="card-text">{props.desc}</p>
                   <a href="/" className="btn btn-primary">Watch it !</a>
               </div>
               <div className="card-footer text-muted">
                   {props.time}
               </div>
               </div>
           </div>
   </>
  )
}

export default Program