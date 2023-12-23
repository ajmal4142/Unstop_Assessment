import React from "react";
import { useLocation } from "react-router-dom";

const EmptyFiles = () => {
  const location = useLocation();
  return (
    <div className="container text-center mt-3">
      {location.pathname === "/assessment" ? (
        <div>
          <h4>Assessments are empty</h4>
          <a className="link-opacity-75-hover" href="/">
            Go to home
          </a>
        </div>
      ) : location.pathname === "/dashboard" ? (
        <div>
          <h4>My Dashboard is empty</h4>
          <a className="link-opacity-75-hover" href="/">
            Go to home
          </a>
        </div>
      ) : location.pathname === "/library" ? (
        <div>
          <h4>My Library is empty</h4>
          <a className="link-opacity-75-hover" href="/">
            Go to home
          </a>
        </div>
      ) : location.pathname === "/status" ? (
        <div>
          <h4>My status is empty</h4>
          <a className="link-opacity-75-hover" href="/">
            Go to home
          </a>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default EmptyFiles;
