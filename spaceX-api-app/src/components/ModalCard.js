import React from 'react'


function ModalCard(props) {
  return (
    <div className="card container my-4" id='modal' >
    <ul className="list-group list-group-flush ">
        <h1>Details</h1>
      <li className="list-group-item">Name: {props.mission_name}</li>
      <li className="list-group-item">Flight Number: {props.flight_number}</li>
      <li className="list-group-item">Launch Year: {props.launch_year}</li>
      <li className="list-group-item">Article Link: {props.article_link}</li>
      
    </ul>
  </div>
  )
}

export default ModalCard
