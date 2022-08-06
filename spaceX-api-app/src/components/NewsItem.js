import React from "react";
import { Link } from "react-router-dom";

function NewsItem({space}) {
  return (
    <div className="container ">
      <>
        <div className="card mb-3 mx-auto customcard">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="http://craftsnippets.com/articles_images/placeholder/placeholder.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{space.mission_name}</h5>
                <p className="card-text">{space.details}</p>
                <p className="card-text">Launch Year:{space.launch_date}</p>
                <Link to={`/Modal/${space.flight_number}`} type="button" class="btn btn-primary" onClick={space.functionclick}>
                  Launch Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default NewsItem;
