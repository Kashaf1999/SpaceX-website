import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import NewsItem from './NewsItem';

function Navbar() {
  const [message, setMessage] = useState("");
  const [launch1, setLaunch1] = useState([]);

  useEffect(() => {
    const url = "https://api.spacexdata.com/v3/launches";
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setLaunch1(resp));
  }, []);

  
    

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navCol">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            SpaceX Application
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Launches
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/Rocket">
                  Rockets
                </NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2 search"
                type="search"
                placeholder="Search"
                
                aria-label="Search"
                id="SearchCard"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
