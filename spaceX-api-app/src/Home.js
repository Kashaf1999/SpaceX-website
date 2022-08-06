import React, { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import News from "./components/News";
import NewsItem from "./components/NewsItem";

function Home() {
  const [loading, setLoading] = useState(false);
  const [btnReload, setBtnReload] = useState(false);
  const [launch, setLaunch] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setLoading(true);
        setLaunch(resp);
      })
      .catch(() => {
        document.getElementById("error").innerHTML =
          '  We\'re Sorry , " The  API Failed To Load " Please Refresh The Page ';
        setBtnReload(true);
      });
  });

  return (
    <div className="App">
      <Navbar />
      <img
        src="https://www.logo.wine/a/logo/SpaceX/SpaceX-White-Dark-Background-Logo.wine.svg"
        className="d-block mx-auto"
        style={{ width: "350px" }}
      />
      <News heading="SpaceX Launch" />
      {btnReload ? (
        <button
          type="button"
          className="btn btn-primary d-block mx-auto"
          onClick={() => window.location.reload()}
        >
          Refresh Page
        </button>
      ) : (
        " "
      )}
      {launch.map((space) => (
        <NewsItem space={space} />
      ))}
      {loading ? "" : <Loader />}
    </div>
  );
}

export default Home;
