import React from 'react';
import styled from "styled-components";

const RightElement = styled.div`
  background: #fccb90;
  background: -webkit-linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
  background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);

  @media (min-width: 768px) {
    .gradient-form {
      height: 100vh !important;
    }
  }
  @media (min-width: 769px) {
    .gradient-custom-2 {
      border-top-right-radius: .3rem;
      border-bottom-right-radius: .3rem;
    }
  }
`;

export default function Register() {
  return (
    <section className="h-100 gradient-form" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-4 text-black shadow">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center mb-5">
                      <h1 className="text-primary display-5 fw-bold">
                        Baby<span className="text-secondary">Care</span>
                      </h1>
                      <p className="text-muted">Create your account</p>
                    </div>

                    <form>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control" 
                          id="fullNameInput"
                          placeholder="Full Name"
                        />
                        <label htmlFor="fullNameInput">
                          <i className="fas fa-user me-2"></i>
                          Full Name
                        </label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="emailInput" 
                          placeholder="Email address"
                        />
                        <label htmlFor="emailInput">
                          <i className="fas fa-envelope me-2"></i>
                          Email address
                        </label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          type="tel"
                          className="form-control"
                          id="phoneInput"
                          placeholder="Phone number"
                        />
                        <label htmlFor="phoneInput">
                          <i className="fas fa-phone me-2"></i>
                          Phone number
                        </label>
                      </div>

                      <div className="form-floating mb-3">
                        <select className="form-select" id="roleSelect">
                          <option value="">Select role</option>
                          <option value="teacher">Teacher</option>
                          <option value="parent">Parent</option>
                          <option value="admin">Admin</option>
                        </select>
                        <label htmlFor="roleSelect">
                          <i className="fas fa-user-tag me-2"></i>
                          Role
                        </label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="passwordInput"
                          placeholder="Password"
                        />
                        <label htmlFor="passwordInput">
                          <i className="fas fa-lock me-2"></i>
                          Password
                        </label>
                      </div>

                      <div className="form-floating mb-4">
                        <input
                          type="password"
                          className="form-control"
                          id="confirmPasswordInput"
                          placeholder="Confirm Password"
                        />
                        <label htmlFor="confirmPasswordInput">
                          <i className="fas fa-lock me-2"></i>
                          Confirm Password
                        </label>
                      </div>

                      <div className="text-center mb-4">
                        <button
                          type="button"
                          className="btn btn-primary px-5 py-3 btn-border-radius"
                          style={{
                            backgroundColor: "#FF4880",
                            color: "white"
                          }}
                          onMouseEnter={(e) => e.target.style.backgroundColor = "var(--bs-secondary)"}
                          onMouseLeave={(e) => e.target.style.backgroundColor = "#FF4880"}
                        >
                          Sign Up
                        </button>
                      </div>

                      <div className="text-center">
                        <p className="mb-0">
                          Already have an account?{" "}
                          <a href="#!" className="text-primary text-decoration-none fw-bold">
                            Login
                          </a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>

                <RightElement className="col-lg-6 d-flex align-items-center gradient-custom-2 rounded-end">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h2 className="mb-4 fw-bold">Join BabyCare Today</h2>
                    <p className="mb-4">
                      Create your account to become part of our growing community. Whether you're a parent, teacher, or administrator, BabyCare provides the tools and resources you need for early childhood development.
                    </p>
                    <div className="d-flex gap-3 mb-4">
                      <div>
                        <h4 className="fw-bold">1000+</h4>
                        <p className="small mb-0">Happy Parents</p>
                      </div>
                      <div>
                        <h4 className="fw-bold">500+</h4>
                        <p className="small mb-0">Expert Teachers</p>
                      </div>
                      <div>
                        <h4 className="fw-bold">100+</h4>
                        <p className="small mb-0">Activities</p>
                      </div>
                    </div>
                  </div>
                </RightElement>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
