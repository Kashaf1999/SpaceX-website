import React from "react";

function ModalRocketCard(props) {
  return (
    <div className="card container my-4" id="modal">
      <ul className="list-group list-group-flush ">
        <h1>Details</h1>
        <li className="list-group-item">Rocket Name: {props.rocket_name}</li>
        <li className="list-group-item">Rocket ID: {props.rocket_id}</li>
        <li className="list-group-item">Rocket TYPE: {props.rocket_type}</li>
        <li className="list-group-item">Total Cost: {props.cost_per_launch}$</li>
      </ul>
    </div>
  );
}

export default ModalRocketCard;
