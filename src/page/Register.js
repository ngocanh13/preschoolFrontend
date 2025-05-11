import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const RightElement = styled.div`
  background: linear-gradient(to right, #0dcaf04a, #4d65f9a8, #4d65f9, #2e3d95);

  @media (min-width: 768px) {
    .gradient-form {
      height: 100vh !important;
    }
  }
  @media (min-width: 769px) {
    .gradient-custom-2 {
      border-top-right-radius: 0.3rem;
      border-bottom-right-radius: 0.3rem;
    }
  }
`;

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    role: "",
  });

  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (!formData.fullName || !formData.email || !formData.phone || !formData.role || !formData.password) {
      setMessage("Vui lòng điền đầy đủ thông tin!");
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage("Mật khẩu không khớp!");
      return false;
    }

    return true;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Log request data
      const requestData = {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        role: formData.role,
        phone: formData.phone,
      };
      console.log("Sending registration request with data:", requestData);

      const response = await axios.post(
        "http://localhost:8080/users/register",
        requestData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      console.log("Registration response:", response);

      if (response.data) {
        setMessage("Đăng ký thành công!");
        setFormData({
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
          phone: "",
          role: "",
        });
      }
    } catch (err) {
      console.error("Registration error details:", err);
      
      if (err.response) {
        console.log("Error response data:", err.response.data);
        console.log("Error response status:", err.response.status);
        console.log("Error response headers:", err.response.headers);
      }

      setMessage(err.response?.data?.message || "Đăng ký thất bại! Vui lòng thử lại.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                      <h1 className="text-primary display-6 mb-0">
                        <span style={{ color: "#ff4880" }}>Baby</span>
                        <span className="text-secondary">Care</span>
                      </h1>
                      <p className="text-muted">Create your account</p>
                    </div>

                    <form onSubmit={handleRegister}>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="fullNameInput"
                          name="fullName"
                          placeholder="Full Name"
                          value={formData.fullName}
                          onChange={handleChange}
                        />
                        <label htmlFor="fullNameInput">Full Name</label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="emailInput"
                          name="email"
                          placeholder="Email address"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        <label htmlFor="emailInput">Email address</label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          type="tel"
                          className="form-control"
                          id="phoneInput"
                          name="phone"
                          placeholder="Phone number"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                        <label htmlFor="phoneInput">Phone number</label>
                      </div>

                      <div className="form-floating mb-3">
                        <select
                          className="form-select"
                          id="roleSelect"
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                        >
                          <option value="">Select role</option>
                          <option value="teacher">Teacher</option>
                          <option value="parent">Parent</option>
                          <option value="admin">Admin</option>
                        </select>
                        <label htmlFor="roleSelect">Role</label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="passwordInput"
                          name="password"
                          placeholder="Password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                        <label htmlFor="passwordInput">Password</label>
                      </div>

                      <div className="form-floating mb-4">
                        <input
                          type="password"
                          className="form-control"
                          id="confirmPasswordInput"
                          name="confirmPassword"
                          placeholder="Confirm Password"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                        />
                        <label htmlFor="confirmPasswordInput">Confirm Password</label>
                      </div>

                      <div className="text-center mb-4">
                        <button
                          type="submit"
                          className="btn btn-primary px-5 py-3 btn-border-radius"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Loading..." : "Sign Up"}
                        </button>
                      </div>

                      {message && (
                        <p className={`text-center ${message.includes("thành công") ? "text-success" : "text-danger"}`}>
                          {message}
                        </p>
                      )}

                      <div className="text-center">
                        <p className="mb-0">
                          Already have an account?{" "}
                          <a
                            href="#"
                            className="text-primary text-decoration-none fw-bold"
                          >
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
                      Create your account to become part of our growing community.
                    </p>
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
