import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const RightElement = styled.div`
  background: #0dcaf047;
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

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8080/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Email hoặc mật khẩu không đúng!");
      }

      const data = await response.json();
      const token = data.token;

      localStorage.setItem("token", token);
      localStorage.setItem("userRole", "admin"); // hardcode role nếu chỉ có admin

      navigate("/programs");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section
      className="gradient-form d-flex align-items-center justify-content-center"
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
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
                      <p className="text-muted">
                        Welcome back! Please login to continue
                      </p>
                    </div>

                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleLogin();
                      }}
                    >
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
                          Email
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
                          mật khẩu
                        </label>
                      </div>

                      {/* <div className="d-flex justify-content-between mb-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="rememberMe"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="rememberMe"
                          >
                            Remember me
                          </label>
                        </div>
                        <a
                          href="#!"
                          className="text-primary text-decoration-none"
                        >
                          Forgot password?
                        </a>
                      </div> */}

                      <div className="text-center mb-4">
                        <button
                          type="submit"
                          className="btn btn-primary px-5 py-3 btn-border-radius"
                        >
                          Log in
                        </button>
                      </div>

                      {/* <div className="text-center">
                        <p className="mb-0">
                          Don't have an account?{" "}
                          <Link
                            to="/register"
                            className="text-primary text-decoration-none fw-bold"
                          >
                            Sign Up
                          </Link>
                        </p>
                      </div> */}

                      {error && (
                        <div className="alert alert-danger mt-3" role="alert">
                          {error}
                        </div>
                      )}
                    </form>
                  </div>
                </div>

                <RightElement className="col-lg-6 d-flex align-items-center gradient-custom-2 rounded-end">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h2 className="mb-4 fw-bold">Chào mừng đến với BabyCare</h2>
                    <p className="mb-4">
                      Tham gia cộng đồng các bậc phụ huynh và giáo viên tận tâm
                      trong việc mang lại sự chăm sóc và giáo dục tốt nhất cho
                      trẻ nhỏ. Nền tảng của chúng tôi cung cấp các công cụ và
                      tài nguyên toàn diện nhằm hỗ trợ sự phát triển toàn diện
                      trong giai đoạn đầu đời của trẻ.
                    </p>
                    <div className="d-flex gap-3 mb-4">
                      <div>
                        <h4 className="fw-bold">1000+</h4>
                        <p className="small mb-0">Phụ huynh hài lòng</p>
                      </div>
                      <div>
                        <h4 className="fw-bold">500+</h4>
                        <p className="small mb-0">Giáo viên chuyên môn</p>
                      </div>
                      <div>
                        <h4 className="fw-bold">100+</h4>
                        <p className="small mb-0">Hoạt động</p>
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
