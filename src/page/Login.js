import styled from "styled-components";

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
  return (
    <section className="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        style={{ width: 185 }}
                        alt="logo"
                      />
                      <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                    </div>
                    <form>
                      <p>Please login to your account</p>
                      <div data-mdb-input-init="" className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example11"
                          className="form-control"
                          placeholder="Phone number or email address"
                        />
                        {/* <label className="form-label" htmlFor="form2Example11">
                          Username
                        </label> */}
                      </div>
                      <div data-mdb-input-init="" className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example22"
                          className="form-control"
                          placeholder="***************"
                        />
                        {/* <label className="form-label" htmlFor="form2Example22">
                          Password
                        </label> */}
                      </div>
                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          data-mdb-button-init=""
                          data-mdb-ripple-init=""
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="button"
                        >
                          Log in
                        </button>
                        {/* <a className="text-muted" href="#!">
                          Forgot password?
                        </a> */}
                      </div>
                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <button
                          type="button"
                          data-mdb-button-init=""
                          data-mdb-ripple-init=""
                          className="btn btn-outline-danger"
                        >
                          Create new
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <RightElement className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">We are more than just a company</h4>
                    <p className="small mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </RightElement>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}