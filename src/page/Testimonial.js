import img from '../assets/img/testimonial-2.jpg'

export default function testimonial() {
    return(
        <>
  <div
    className="modal fade"
    id="searchModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-fullscreen">
      <div className="modal-content rounded-0">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Search by keyword
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body d-flex align-items-center">
          <div className="input-group w-75 mx-auto d-flex">
            <input
              type="search"
              className="form-control p-3"
              placeholder="keywords"
              aria-describedby="search-icon-1"
            />
            <span id="search-icon-1" className="input-group-text p-3">
              <i className="fa fa-search" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="container-fluid page-header py-5 wow fadeIn"
    data-wow-delay="0.1s"
    style={{
      visibility: "visible",
      animationDelay: "0.1s",
      animationName: "fadeIn"
    }}
  >
    <div className="container text-center py-5">
      <h1 className="display-2 text-white mb-4">Testimonial</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item text-white" aria-current="page">
            Testimonial
          </li>
        </ol>
      </nav>
    </div>
  </div>
  <div className="container-fluid testimonial py-5">
    <div className="container py-5">
      <div
        className="mx-auto text-center wow fadeIn"
        data-wow-delay="0.1s"
        style={{
          maxWidth: 700,
          visibility: "visible",
          animationDelay: "0.1s",
          animationName: "fadeIn"
        }}
      >
        <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
          Our Testimonials
        </h4>
        <h1 className="mb-5 display-3">Parents Say About Us</h1>
      </div>
      <div
        className="owl-carousel testimonial-carousel wow fadeIn owl-loaded owl-drag"
        data-wow-delay="0.3s"
        style={{
          visibility: "visible",
          animationDelay: "0.3s",
          animationName: "fadeIn"
        }}
      >
        <div className="owl-stage-outer">
          <div
            className="owl-stage"
            style={{
              transition: "1.5s",
              width: 3451,
              transform: "translate3d(-739px, 0px, 0px)"
            }}
          >
            <div
              className="owl-item cloned"
              style={{ width: 443, marginRight: 50 }}
            >
              <div className="testimonial-item img-border-radius bg-light border border-primary p-4">
                <div className="p-4 position-relative">
                  <i
                    className="fa fa-quote-right fa-2x text-primary position-absolute"
                    style={{ top: 15, right: 15 }}
                  />
                  <div className="d-flex align-items-center">
                    <div className="border border-primary bg-white rounded-circle">
                      <img
                        src={img}
                        className="rounded-circle p-2"
                        style={{
                          width: 80,
                          height: 80,
                          borderStyle: "dotted",
                          borderColor: "var(--bs-primary)"
                        }}
                        alt=""
                      />
                    </div>
                    <div className="ms-4">
                      <h4 className="text-dark">Client Name</h4>
                      <p className="m-0 pb-3">Profession</p>
                      <div className="d-flex pe-5">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="border-top border-primary mt-4 pt-3">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing Ipsum has
                      been the industry's standard dummy text ever since the
                      1500s,
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="owl-item cloned"
              style={{ width: 443, marginRight: 50 }}
            >
              <div className="testimonial-item img-border-radius bg-light border border-primary p-4">
                <div className="p-4 position-relative">
                  <i
                    className="fa fa-quote-right fa-2x text-primary position-absolute"
                    style={{ top: 15, right: 15 }}
                  />
                  <div className="d-flex align-items-center">
                    <div className="border border-primary bg-white rounded-circle">
                      <img
                        src={img}
                        className="rounded-circle p-2"
                        style={{
                          width: 80,
                          height: 80,
                          borderStyle: "dotted",
                          borderColor: "var(--bs-primary)"
                        }}
                        alt=""
                      />
                    </div>
                    <div className="ms-4">
                      <h4 className="text-dark">Client Name</h4>
                      <p className="m-0 pb-3">Profession</p>
                      <div className="d-flex pe-5">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="border-top border-primary mt-4 pt-3">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing Ipsum has
                      been the industry's standard dummy text ever since the
                      1500s,
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="owl-item active center"
              style={{ width: 443, marginRight: 50 }}
            >
              <div className="testimonial-item img-border-radius bg-light border border-primary p-4">
                <div className="p-4 position-relative">
                  <i
                    className="fa fa-quote-right fa-2x text-primary position-absolute"
                    style={{ top: 15, right: 15 }}
                  />
                  <div className="d-flex align-items-center">
                    <div className="border border-primary bg-white rounded-circle">
                      <img
                        src={img}
                        className="rounded-circle p-2"
                        style={{
                          width: 80,
                          height: 80,
                          borderStyle: "dotted",
                          borderColor: "var(--bs-primary)"
                        }}
                        alt=""
                      />
                    </div>
                    <div className="ms-4">
                      <h4 className="text-dark">Client Name</h4>
                      <p className="m-0 pb-3">Profession</p>
                      <div className="d-flex pe-5">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="border-top border-primary mt-4 pt-3">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing Ipsum has
                      been the industry's standard dummy text ever since the
                      1500s,
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="owl-item active"
              style={{ width: 443, marginRight: 50 }}
            >
              <div className="testimonial-item img-border-radius bg-light border border-primary p-4">
                <div className="p-4 position-relative">
                  <i
                    className="fa fa-quote-right fa-2x text-primary position-absolute"
                    style={{ top: 15, right: 15 }}
                  />
                  <div className="d-flex align-items-center">
                    <div className="border border-primary bg-white rounded-circle">
                      <img
                        src={img}
                        className="rounded-circle p-2"
                        style={{
                          width: 80,
                          height: 80,
                          borderStyle: "dotted",
                          borderColor: "var(--bs-primary)"
                        }}
                        alt=""
                      />
                    </div>
                    <div className="ms-4">
                      <h4 className="text-dark">Client Name</h4>
                      <p className="m-0 pb-3">Profession</p>
                      <div className="d-flex pe-5">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="border-top border-primary mt-4 pt-3">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing Ipsum has
                      been the industry's standard dummy text ever since the
                      1500s,
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item" style={{ width: 443, marginRight: 50 }}>
              <div className="testimonial-item img-border-radius bg-light border border-primary p-4">
                <div className="p-4 position-relative">
                  <i
                    className="fa fa-quote-right fa-2x text-primary position-absolute"
                    style={{ top: 15, right: 15 }}
                  />
                  <div className="d-flex align-items-center">
                    <div className="border border-primary bg-white rounded-circle">
                      <img
                        src={img}
                        className="rounded-circle p-2"
                        style={{
                          width: 80,
                          height: 80,
                          borderStyle: "dotted",
                          borderColor: "var(--bs-primary)"
                        }}
                        alt=""
                      />
                    </div>
                    <div className="ms-4">
                      <h4 className="text-dark">Client Name</h4>
                      <p className="m-0 pb-3">Profession</p>
                      <div className="d-flex pe-5">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="border-top border-primary mt-4 pt-3">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing Ipsum has
                      been the industry's standard dummy text ever since the
                      1500s,
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="owl-item cloned"
              style={{ width: 443, marginRight: 50 }}
            >
              <div className="testimonial-item img-border-radius bg-light border border-primary p-4">
                <div className="p-4 position-relative">
                  <i
                    className="fa fa-quote-right fa-2x text-primary position-absolute"
                    style={{ top: 15, right: 15 }}
                  />
                  <div className="d-flex align-items-center">
                    <div className="border border-primary bg-white rounded-circle">
                      <img
                        src={img}
                        className="rounded-circle p-2"
                        style={{
                          width: 80,
                          height: 80,
                          borderStyle: "dotted",
                          borderColor: "var(--bs-primary)"
                        }}
                        alt=""
                      />
                    </div>
                    <div className="ms-4">
                      <h4 className="text-dark">Client Name</h4>
                      <p className="m-0 pb-3">Profession</p>
                      <div className="d-flex pe-5">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="border-top border-primary mt-4 pt-3">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing Ipsum has
                      been the industry's standard dummy text ever since the
                      1500s,
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="owl-item cloned"
              style={{ width: 443, marginRight: 50 }}
            >
              <div className="testimonial-item img-border-radius bg-light border border-primary p-4">
                <div className="p-4 position-relative">
                  <i
                    className="fa fa-quote-right fa-2x text-primary position-absolute"
                    style={{ top: 15, right: 15 }}
                  />
                  <div className="d-flex align-items-center">
                    <div className="border border-primary bg-white rounded-circle">
                      <img
                        src={img}
                        className="rounded-circle p-2"
                        style={{
                          width: 80,
                          height: 80,
                          borderStyle: "dotted",
                          borderColor: "var(--bs-primary)"
                        }}
                        alt=""
                      />
                    </div>
                    <div className="ms-4">
                      <h4 className="text-dark">Client Name</h4>
                      <p className="m-0 pb-3">Profession</p>
                      <div className="d-flex pe-5">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="border-top border-primary mt-4 pt-3">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing Ipsum has
                      been the industry's standard dummy text ever since the
                      1500s,
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-nav disabled">
          <div className="owl-prev">prev</div>
          <div className="owl-next">next</div>
        </div>
        <div className="owl-dots">
          <div className="owl-dot active">
            <span />
          </div>
          <div className="owl-dot">
            <span />
          </div>
          <div className="owl-dot">
            <span />
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    )
}
