import React, { useEffect, useState } from "react";
import ModalRocketCard from "./ModalRocketCard";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function Rocket() {
    const [rocket, setRocket] = useState([]);
    const {id} = useParams();
      useEffect(()=>{
        const url ="https://api.spacexdata.com/v3/rockets"+id;
        fetch(url)
        .then((resp1) =>resp1.json())
        .then((resp1) => {
          setRocket(resp1)
          console.log(resp1);
        }
        )
      },[])
      return (
                <>
              <div className="card container my-4" id="modal">
      <ul className="list-group list-group-flush ">
        <h1>Details</h1>
        <li className="list-group-item">Rocket Name: {rocket.rocket_name}</li>
        <li className="list-group-item">Rocket ID: {rocket.rocket_id}</li>
        <li className="list-group-item">Rocket TYPE: {rocket.rocket_type}</li>
        <li className="list-group-item">Total Cost: {rocket.cost_per_launch}$</li>

        <Link to="/" className="btn btn-danger mb-4">
                  Back
                </Link>
      </ul>
    </div>
                </>       
      
      );
  }

export default Rocket;

