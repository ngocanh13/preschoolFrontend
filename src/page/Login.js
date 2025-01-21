import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from 'react-router-dom';


const RightElement = styled.div`
background: #fccb90;
/* fallback for old browsers */


/* Chrome 10-25, Safari 5.1-6 */
background: -webkit-linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Thông tin đăng nhập mẫu
    const adminAccount = {
      email: "admin@babycare.com",
      password: "admin123",
      role: "admin"
    };

    const teacherAccount = {
      email: "teacher@babycare.com", 
      password: "teacher123",
      role: "teacher"
    };

    // Kiểm tra thông tin đăng nhập
    if (email === adminAccount.email && password === adminAccount.password) {
      // Lưu thông tin người dùng vào localStorage
      localStorage.setItem('userRole', adminAccount.role);
      navigate('/');
    } else if (email === teacherAccount.email && password === teacherAccount.password) {
      localStorage.setItem('userRole', teacherAccount.role);
      navigate('/');
    } else {
      setError('Email hoặc mật khẩu không đúng!');
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
                      <h1 className="text-primary display-5 fw-bold">
                        Baby<span className="text-secondary">Care</span>
                      </h1>
                      <p className="text-muted">Welcome back! Please login to continue</p>
                    </div>

                    <form onSubmit={(e) => {
                      e.preventDefault();
                      handleLogin();
                    }}>
                      <div className="form-floating mb-4">
                        <input
                          type="email" 
                          className="form-control"
                          id="emailInput"
                          placeholder="Email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="emailInput">
                          <i className="fas fa-envelope me-2"></i>
                          Email address
                        </label>
                      </div>

                      <div className="form-floating mb-4">
                        <input
                          type="password"
                          className="form-control"
                          id="passwordInput"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="passwordInput">
                          <i className="fas fa-lock me-2"></i>
                          Password
                        </label>
                      </div>

                      <div className="d-flex justify-content-between mb-4">
                        <div className="form-check">
                          <input 
                            className="form-check-input"
                            type="checkbox"
                            id="rememberMe"
                          />
                          <label className="form-check-label" htmlFor="rememberMe">
                            Remember me
                          </label>
                        </div>
                        <a href="#!" className="text-primary text-decoration-none">
                          Forgot password?
                        </a>
                      </div>

                      <div className="text-center mb-4">
                        <button
                          type="submit"
                          className="btn btn-primary px-5 py-3 btn-border-radius"
                          style={{
                            backgroundColor: "#FF4880",
                            color: "white"
                          }}
                          onMouseEnter={(e) => e.target.style.backgroundColor = "var(--bs-secondary)"}
                          onMouseLeave={(e) => e.target.style.backgroundColor = "#FF4880"}
                        >
                          Log in
                        </button>
                      </div>

                      <div className="text-center">
                        <p className="mb-0">
                          Don't have an account?{" "}
                          <Link to="/register" className="text-primary text-decoration-none fw-bold">
                            Sign Up
                          </Link>
                        </p>
                      </div>

                      {error && (
                        <div className="alert alert-danger mb-3" role="alert">
                          {error}
                        </div>
                      )}
                    </form>
                  </div>
                </div>

                <RightElement className="col-lg-6 d-flex align-items-center gradient-custom-2 rounded-end">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h2 className="mb-4 fw-bold">Welcome to BabyCare</h2>
                    <p className="mb-4">
                      Join our community of parents and educators dedicated to providing the best care and education for children. Our platform offers comprehensive tools and resources to support early childhood development.
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