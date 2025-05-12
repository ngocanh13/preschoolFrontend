import React from "react";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div className="container mt-5 text-center">
      <div className="alert alert-danger">
        <h2 className="mb-4">
          <i className="fas fa-exclamation-triangle me-2"></i>
          Unauthorized Access
        </h2>
        <p className="mb-4">
          Sorry, you don't have permission to access this page.
        </p>
        <Link to="/login" className="btn btn-primary">
          <i className="fas fa-home me-2"></i>
          Return to login
        </Link>
      </div>
    </div>
  );
};

export default Unauthorized;
