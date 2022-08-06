import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ModalCard from "./ModalCard";
import { Link } from "react-router-dom";

function Modal(props) {
  const {id} = useParams();
  const [launch, setLaunch] = useState([]);
  useEffect(() => {
    const url = "https://api.spacexdata.com/v3/launches/"+id;
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => {
        setLaunch(resp)
        console.log(resp);
      }
      );
     
  }, []);

  return (
    <>
    
    <div className="card container my-4" id='modal' >
    <ul className="list-group list-group-flush ">
        <h1 className="text-warning">{launch.mission_name}</h1>
        <hr></hr>
      <li className="list-group-item">Mission ID: {launch.mission_id}</li>
      <li className="list-group-item">Flight Number: {launch.flight_number}</li>
      <li className="list-group-item">Launch Year: {launch.launch_year}</li>
      <li className="list-group-item">Launch Date: {launch.launch_date_local}</li>

      <Link to="/" className="btn btn-danger mb-4">
                  Back
                </Link>
      
      
      
    </ul>
  </div>
    </>
  );
}

export default Modal;
