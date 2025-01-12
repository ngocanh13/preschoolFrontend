import img from "../assets/img/program-1.jpg";
import img1 from "../assets/img/program-teacher.jpg";
import img2 from "../assets/img/program-2.jpg";
import img3 from "../assets/img/program-3.jpg";
import img4 from "../assets/img/event-1.jpg";
import img5 from "../assets/img/event-2.jpg";
import img6 from "../assets/img/event-3.jpg";
import img7 from "../assets/img/blog-1.jpg";
import img8 from "../assets/img/blog-2.jpg";
import img9 from "../assets/img/blog-3.jpg";
import img10 from "../assets/img/team-1.jpg";
import img11 from "../assets/img/team-2.jpg";
import img12 from "../assets/img/team-3.jpg";
import img13 from "../assets/img/team-4.jpg";
import img14 from "../assets/img/testimonial-2.jpg";

export default function Home() {
  return (
    <>
      <div
        className="container-fluid py-5 hero-header wow fadeIn"
        data-wow-delay="0.1s"
        style={{
          visibility: "visible",
          animationDelay: "0.1s",
          animationName: "fadeIn",
        }}
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-7 col-md-12">
              <h1 className="mb-3 text-primary">We Care Your Baby</h1>
              <h1 className="mb-5 display-1 text-white">
                The Best Play Area For Your Kids
              </h1>
              <a
                href=""
                className="btn btn-primary px-4 py-3 px-md-5  me-4 btn-border-radius"
              >
                Get Started
              </a>
              <a
                href=""
                className="btn btn-primary px-4 py-3 px-md-5 btn-border-radius"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5 about bg-light">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div
              className="col-lg-5 wow fadeIn"
              data-wow-delay="0.1s"
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeIn",
              }}
            >
              <div className="video border">
                <button
                  type="button"
                  className="btn btn-play"
                  data-bs-toggle="modal"
                  data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                  data-bs-target="#videoModal"
                >
                  <span />
                </button>
              </div>
            </div>
            <div
              className="col-lg-7 wow fadeIn"
              data-wow-delay="0.3s"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeIn",
              }}
            >
              <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
                About Us
              </h4>
              <h1 className="text-dark mb-4 display-5">
                We Learn Smart Way To Build Bright Futute For Your Children
              </h1>
              <p className="text-dark mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s.
              </p>
              <div className="row mb-4">
                <div className="col-lg-6">
                  <h6 className="mb-3">
                    <i className="fas fa-check-circle me-2" />
                    Sport Activites
                  </h6>
                  <h6 className="mb-3">
                    <i className="fas fa-check-circle me-2 text-primary" />
                    Outdoor Games
                  </h6>
                  <h6 className="mb-3">
                    <i className="fas fa-check-circle me-2 text-secondary" />
                    Nutritious Foods
                  </h6>
                </div>
                <div className="col-lg-6">
                  <h6 className="mb-3">
                    <i className="fas fa-check-circle me-2" />
                    Highly Secured
                  </h6>
                  <h6 className="mb-3">
                    <i className="fas fa-check-circle me-2 text-primary" />
                    Friendly Environment
                  </h6>
                  <h6>
                    <i className="fas fa-check-circle me-2 text-secondary" />
                    Qualified Teacher
                  </h6>
                </div>
              </div>
              <a
                href=""
                className="btn btn-primary px-5 py-3 btn-border-radius"
              >
                More Details
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="videoModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Youtube Video
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              {/* 16:9 aspect ratio */}
              <div className="ratio ratio-16x9">
                <iframe
                  className="embed-responsive-item"
                  src=""
                  id="video"
                  allowFullScreen=""
                  allowscriptaccess="always"
                  allow="autoplay"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid service py-5">
        <div className="container py-5">
          <div
            className="mx-auto text-center wow fadeIn"
            data-wow-delay="0.1s"
            style={{
              maxWidth: 700,
              visibility: "visible",
              animationDelay: "0.1s",
              animationName: "fadeIn",
            }}
          >
            <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
              What We Do
            </h4>
            <h1 className="mb-5 display-3">
              Thanks To Get Started With Our School
            </h1>
          </div>
          <div className="row g-5">
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeIn"
              data-wow-delay="0.1s"
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeIn",
              }}
            >
              <div className="text-center border-primary border bg-white service-item">
                <div className="service-content d-flex align-items-center justify-content-center p-4">
                  <div className="service-content-inner">
                    <div className="p-4">
                      <i className="fas fa-gamepad fa-6x text-primary" />
                    </div>
                    <a href="#" className="h4">
                      Study &amp; Game
                    </a>
                    <p className="my-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Natus, culpa qui officiis animi Lorem ipsum dolor sit
                      amet, consectetur adipisicing elit.
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary text-white px-4 py-2 my-2 btn-border-radius"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeIn"
              data-wow-delay="0.3s"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeIn",
              }}
            >
              <div className="text-center border-primary border bg-white service-item">
                <div className="service-content d-flex align-items-center justify-content-center p-4">
                  <div className="service-content-inner">
                    <div className="p-4">
                      <i className="fas fa-sort-alpha-down fa-6x text-primary" />
                    </div>
                    <a href="#" className="h4">
                      A to Z Programs
                    </a>
                    <p className="my-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Natus, culpa qui officiis animi Lorem ipsum dolor sit
                      amet, consectetur adipisicing elit.
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary text-white px-4 py-2 my-2 btn-border-radius"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeIn"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeIn",
              }}
            >
              <div className="text-center border-primary border bg-white service-item">
                <div className="service-content d-flex align-items-center justify-content-center p-4">
                  <div className="service-content-inner">
                    <div className="p-4">
                      <i className="fas fa-users fa-6x text-primary" />
                    </div>
                    <a href="#" className="h4">
                      Expert Teacher
                    </a>
                    <p className="my-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Natus, culpa qui officiis animi Lorem ipsum dolor sit
                      amet, consectetur adipisicing elit.
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary text-white px-4 py-2 my-2 btn-border-radius"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeIn"
              data-wow-delay="0.7s"
              style={{
                visibility: "visible",
                animationDelay: "0.7s",
                animationName: "fadeIn",
              }}
            >
              <div className="text-center border-primary border bg-white service-item">
                <div className="service-content d-flex align-items-center justify-content-center p-4">
                  <div className="service-content-inner">
                    <div className="p-4">
                      <i className="fas fa-user-nurse fa-6x text-primary" />
                    </div>
                    <a href="#" className="h4">
                      Mental Health
                    </a>
                    <p className="my-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Natus, culpa qui officiis animi Lorem ipsum dolor sit
                      amet, consectetur adipisicing elit.
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary text-white px-4 py-2 my-2 btn-border-radius"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid program  py-5">
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
        Our Programs
      </h4>
      <h1 className="mb-5 display-3">We Offer An Exclusive Program For Kids</h1>
    </div>
    <div className="row g-5 justify-content-center">
      <div
        className="col-md-6 col-lg-6 col-xl-4 wow fadeIn"
        data-wow-delay="0.1s"
        style={{
          visibility: "visible",
          animationDelay: "0.1s",
          animationName: "fadeIn"
        }}
      >
        <div className="program-item rounded">
          <div className="program-img position-relative">
            <div className="overflow-hidden img-border-radius">
              <img
                src={img}
                className="img-fluid w-100"
                alt="Image"
              />
            </div>
            <div className="px-4 py-2 bg-primary text-white program-rate">
              $60.99
            </div>
          </div>
          <div className="program-text bg-white px-4 pb-3">
            <div className="program-text-inner">
              <a href="#" className="h4">
                English For Today
              </a>
              <p className="mt-3 mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                sed purus consectetur,
              </p>
            </div>
          </div>
          <div className="program-teacher d-flex align-items-center border-top border-primary bg-white px-4 py-3">
            <img
              src={img1}
              className="img-fluid rounded-circle p-2 border border-primary bg-white"
              alt="Image"
              style={{ width: 70, height: 70 }}
            />
            <div className="ms-3">
              <h6 className="mb-0 text-primary">Mary Mordern</h6>
              <small>Arts Designer</small>
            </div>
          </div>
          <div className="d-flex justify-content-between px-4 py-2 bg-primary rounded-bottom">
            <small className="text-white">
              <i className="fas fa-wheelchair me-1" /> 30 Sits
            </small>
            <small className="text-white">
              <i className="fas fa-book me-1" /> 11 Lessons
            </small>
            <small className="text-white">
              <i className="fas fa-clock me-1" /> 60 Hours
            </small>
          </div>
        </div>
      </div>
      <div
        className="col-md-6 col-lg-6 col-xl-4 wow fadeIn"
        data-wow-delay="0.3s"
        style={{
          visibility: "visible",
          animationDelay: "0.3s",
          animationName: "fadeIn"
        }}
      >
        <div className="program-item rounded">
          <div className="program-img position-relative">
            <div className="overflow-hidden img-border-radius">
              <img
                src={img2}
                className="img-fluid w-100"
                alt="Image"
              />
            </div>
            <div className="px-4 py-2 bg-primary text-white program-rate">
              $60.99
            </div>
          </div>
          <div className="program-text bg-white px-4 pb-3">
            <div className="program-text-inner">
              <a href="#" className="h4">
                Graphics Arts
              </a>
              <p className="mt-3 mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                sed purus consectetur,
              </p>
            </div>
          </div>
          <div className="program-teacher d-flex align-items-center border-top border-primary bg-white px-4 py-3">
            <img
              src={img1}
              className="img-fluid rounded-circle p-2 border border-primary bg-white"
              alt=""
              style={{ width: 70, height: 70 }}
            />
            <div className="ms-3">
              <h6 className="mb-0 text-primary">Mary Mordern</h6>
              <small>Arts Designer</small>
            </div>
          </div>
          <div className="d-flex justify-content-between px-4 py-2 bg-primary rounded-bottom">
            <small className="text-white">
              <i className="fas fa-wheelchair me-1" /> 30 Sits
            </small>
            <small className="text-white">
              <i className="fas fa-book me-1" /> 11 Lessons
            </small>
            <small className="text-white">
              <i className="fas fa-clock me-1" /> 60 Hours
            </small>
          </div>
        </div>
      </div>
      <div
        className="col-md-6 col-lg-6 col-xl-4 wow fadeIn"
        data-wow-delay="0.5s"
        style={{
          visibility: "visible",
          animationDelay: "0.5s",
          animationName: "fadeIn"
        }}
      >
        <div className="program-item rounded">
          <div className="program-img position-relative">
            <div className="overflow-hidden img-border-radius">
              <img
                src={img3}
                className="img-fluid w-100"
                alt="Image"
              />
            </div>
            <div className="px-4 py-2 bg-primary text-white program-rate">
              $60.99
            </div>
          </div>
          <div className="program-text bg-white px-4 pb-3">
            <div className="program-text-inner">
              <a href="#" className="h4">
                General Science
              </a>
              <p className="mt-3 mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                sed purus consectetur,
              </p>
            </div>
          </div>
          <div className="program-teacher d-flex align-items-center border-top border-primary bg-white px-4 py-3">
            <img
              src={img1}
              className="img-fluid rounded-circle p-2 border border-primary bg-white"
              alt=""
              style={{ width: 70, height: 70 }}
            />
            <div className="ms-3">
              <h6 className="mb-0 text-primary">Mary Mordern</h6>
              <small>Arts Designer</small>
            </div>
          </div>
          <div className="d-flex justify-content-between px-4 py-2 bg-primary rounded-bottom">
            <small className="text-white">
              <i className="fas fa-wheelchair me-1" /> 30 Sits
            </small>
            <small className="text-white">
              <i className="fas fa-book me-1" /> 11 Lessons
            </small>
            <small className="text-white">
              <i className="fas fa-clock me-1" /> 60 Hours
            </small>
          </div>
        </div>
      </div>
      <div
        className="d-inline-block text-center wow fadeIn"
        data-wow-delay="0.1s"
        style={{
          visibility: "visible",
          animationDelay: "0.1s",
          animationName: "fadeIn"
        }}
      >
        <a
          href="#"
          className="btn btn-primary px-5 py-3 text-white btn-border-radius"
        >
          Vew All Programs
        </a>
      </div>
    </div>
  </div>
</div>

<div className="container-fluid events py-5 bg-light">
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
        Our Events
      </h4>
      <h1 className="mb-5 display-3">Our Upcoming Events</h1>
    </div>
    <div className="row g-5 justify-content-center">
      <div
        className="col-md-6 col-lg-6 col-xl-4 wow fadeIn"
        data-wow-delay="0.1s"
        style={{
          visibility: "visible",
          animationDelay: "0.1s",
          animationName: "fadeIn"
        }}
      >
        <div className="events-item bg-primary rounded">
          <div className="events-inner position-relative">
            <div className="events-img overflow-hidden rounded-circle position-relative">
              <img
                src={img4}
                className="img-fluid w-100 rounded-circle"
                alt="Image"
              />
              <div className="event-overlay">
                <a href="img/event-1.jpg" data-lightbox="event-1">
                  <i className="fas fa-search-plus text-white fa-2x" />
                </a>
              </div>
            </div>
            <div className="px-4 py-2 bg-secondary text-white text-center events-rate">
              29 Nov
            </div>
            <div className="d-flex justify-content-between px-4 py-2 bg-secondary">
              <small className="text-white">
                <i className="fas fa-calendar me-1 text-primary" /> 10:00am -
                12:00pm
              </small>
              <small className="text-white">
                <i className="fas fa-map-marker-alt me-1 text-primary" /> New
                York
              </small>
            </div>
          </div>
          <div className="events-text p-4 border border-primary bg-white border-top-0 rounded-bottom">
            <a href="#" className="h4">
              Music &amp; drawing workshop
            </a>
            <p className="mb-0 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
              purus consectetur,
            </p>
          </div>
        </div>
      </div>
      <div
        className="col-md-6 col-lg-6 col-xl-4 wow fadeIn"
        data-wow-delay="0.3s"
        style={{
          visibility: "visible",
          animationDelay: "0.3s",
          animationName: "fadeIn"
        }}
      >
        <div className="events-item bg-primary rounded">
          <div className="events-inner position-relative">
            <div className="events-img overflow-hidden rounded-circle position-relative">
              <img
                src={img5}
                className="img-fluid w-100 rounded-circle"
                alt="Image"
              />
              <div className="event-overlay">
                <a href="img/event-3.jpg" data-lightbox="event-1">
                  <i className="fas fa-search-plus text-white fa-2x" />
                </a>
              </div>
            </div>
            <div className="px-4 py-2 bg-secondary text-white text-center events-rate">
              29 Nov
            </div>
            <div className="d-flex justify-content-between px-4 py-2 bg-secondary">
              <small className="text-white">
                <i className="fas fa-calendar me-1 text-primary" /> 10:00am -
                12:00pm
              </small>
              <small className="text-white">
                <i className="fas fa-map-marker-alt me-1 text-primary" /> New
                York
              </small>
            </div>
          </div>
          <div className="events-text p-4 border border-primary bg-white border-top-0 rounded-bottom">
            <a href="#" className="h4">
              Why need study
            </a>
            <p className="mb-0 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
              purus consectetur,
            </p>
          </div>
        </div>
      </div>
      <div
        className="col-md-6 col-lg-6 col-xl-4 wow fadeIn"
        data-wow-delay="0.5s"
        style={{
          visibility: "visible",
          animationDelay: "0.5s",
          animationName: "fadeIn"
        }}
      >
        <div className="events-item bg-primary rounded">
          <div className="events-inner position-relative">
            <div className="events-img overflow-hidden rounded-circle position-relative">
              <img
                src={img6}
                className="img-fluid w-100 rounded-circle"
                alt="Image"
              />
              <div className="event-overlay">
                <a href="img/event-3.jpg" data-lightbox="event-1">
                  <i className="fas fa-search-plus text-white fa-2x" />
                </a>
              </div>
            </div>
            <div className="px-4 py-2 bg-secondary text-white text-center events-rate">
              29 Nov
            </div>
            <div className="d-flex justify-content-between px-4 py-2 bg-secondary">
              <small className="text-white">
                <i className="fas fa-calendar me-1 text-primary" /> 10:00am -
                12:00pm
              </small>
              <small className="text-white">
                <i className="fas fa-map-marker-alt me-1 text-primary" /> New
                York
              </small>
            </div>
          </div>
          <div className="events-text p-4 border border-primary bg-white border-top-0 rounded-bottom">
            <a href="#" className="h4">
              Child health consciousness
            </a>
            <p className="mb-0 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
              purus consectetur,
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="container-fluid blog py-5">
  <div className="container py-5">
    <div
      className="mx-auto text-center wow fadeIn"
      data-wow-delay="0.1s"
      style={{
        maxWidth: 600,
        visibility: "visible",
        animationDelay: "0.1s",
        animationName: "fadeIn"
      }}
    >
      <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
        Latest News &amp; Blog
      </h4>
      <h1 className="mb-5 display-3">Read Our Latest News &amp; Blog</h1>
    </div>
    <div className="row g-5 justify-content-center">
      <div
        className="col-md-6 col-lg-6 col-xl-4 wow fadeIn"
        data-wow-delay="0.1s"
        style={{
          visibility: "visible",
          animationDelay: "0.1s",
          animationName: "fadeIn"
        }}
      >
        <div className="blog-item rounded-bottom">
          <div className="blog-img overflow-hidden position-relative img-border-radius">
            <img src={img7} className="img-fluid w-100" alt="Image" />
          </div>
          <div className="d-flex justify-content-between px-4 py-3 bg-light border-bottom border-primary blog-date-comments">
            <small className="text-dark">
              <i className="fas fa-calendar me-1 text-dark" /> 29 Nov 2023
            </small>
            <small className="text-dark">
              <i className="fas fa-comment-alt me-1 text-dark" /> Comments (15)
            </small>
          </div>
          <div className="blog-content d-flex align-items-center px-4 py-3 bg-light">
            <div className="overflow-hidden rounded-circle rounded-top border border-primary">
              <img
                src={img1}
                className="img-fluid rounded-circle p-2 rounded-top"
                alt="Image"
                style={{
                  width: 70,
                  height: 70,
                  borderStyle: "dotted",
                  borderColor: "var(--bs-primary) !important"
                }}
              />
            </div>
            <div className="ms-3">
              <h6 className="text-primary">Mary Mordern</h6>
              <p className="text-muted">Baby Care</p>
            </div>
          </div>
          <div className="px-4 pb-4 bg-light rounded-bottom">
            <div className="blog-text-inner">
              <a href="#" className="h4">
                How to pay attention to your child?
              </a>
              <p className="mt-3 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                sed purus
              </p>
            </div>
            <div className="text-center">
              <a
                href="#"
                className="btn btn-primary text-white px-4 py-2 mb-3 btn-border-radius"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-md-6 col-lg-6 col-xl-4 wow fadeIn"
        data-wow-delay="0.3s"
        style={{
          visibility: "visible",
          animationDelay: "0.3s",
          animationName: "fadeIn"
        }}
      >
        <div className="blog-item rounded-bottom">
          <div className="blog-img overflow-hidden position-relative img-border-radius">
            <img src={img8} className="img-fluid w-100" alt="Image" />
          </div>
          <div className="d-flex justify-content-between px-4 py-3 bg-light border-bottom border-primary blog-date-comments">
            <small className="text-dark">
              <i className="fas fa-calendar me-1 text-dark" /> 29 Nov 2023
            </small>
            <small className="text-dark">
              <i className="fas fa-comment-alt me-1 text-dark" /> Comments (15)
            </small>
          </div>
          <div className="blog-content d-flex align-items-center px-4 py-3 bg-light">
            <div className="overflow-hidden rounded-circle rounded-top border border-primary">
              <img
                src={img1}
                className="img-fluid rounded-circle p-2 rounded-top"
                alt=""
                style={{
                  width: 70,
                  height: 70,
                  borderStyle: "dotted",
                  borderColor: "var(--bs-primary) !important"
                }}
              />
            </div>
            <div className="ms-3">
              <h6 className="text-primary">Mary Mordern</h6>
              <p className="text-muted">Baby Care</p>
            </div>
          </div>
          <div className="px-4 pb-4 bg-light rounded-bottom">
            <div className="blog-text-inner">
              <a href="#" className="h4">
                Play outdoor sports with your child
              </a>
              <p className="mt-3 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                sed purus
              </p>
            </div>
            <div className="text-center">
              <a
                href="#"
                className="btn btn-primary text-white px-4 py-2 mb-3 btn-border-radius"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-md-6 col-lg-6 col-xl-4 wow fadeIn"
        data-wow-delay="0.5s"
        style={{
          visibility: "visible",
          animationDelay: "0.5s",
          animationName: "fadeIn"
        }}
      >
        <div className="blog-item rounded-bottom">
          <div className="blog-img overflow-hidden position-relative img-border-radius">
            <img src={img9} className="img-fluid w-100" alt="Image" />
          </div>
          <div className="d-flex justify-content-between px-4 py-3 bg-light border-bottom border-primary blog-date-comments">
            <small className="text-dark">
              <i className="fas fa-calendar me-1 text-dark" /> 29 Nov 2023
            </small>
            <small className="text-dark">
              <i className="fas fa-comment-alt me-1 text-dark" /> Comments (15)
            </small>
          </div>
          <div className="blog-content d-flex align-items-center px-4 py-3 bg-light">
            <div className="overflow-hidden rounded-circle rounded-top border border-primary">
              <img
                src={img1}
                className="img-fluid rounded-circle p-2 rounded-top"
                alt=""
                style={{
                  width: 70,
                  height: 70,
                  borderStyle: "dotted",
                  borderColor: "var(--bs-primary) !important"
                }}
              />
            </div>
            <div className="ms-3">
              <h6 className="text-primary">Mary Mordern</h6>
              <p className="text-muted">Baby Care</p>
            </div>
          </div>
          <div className="px-4 pb-4 bg-light rounded-bottom">
            <div className="blog-text-inner">
              <a href="#" className="h4">
                How to make time for your kids?
              </a>
              <p className="mt-3 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                sed purus
              </p>
            </div>
            <div className="text-center">
              <a
                href="#"
                className="btn btn-primary text-white px-4 py-2 mb-3 btn-border-radius"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="container-fluid team py-5">
  <div className="container py-5">
    <div
      className="mx-auto text-center wow fadeIn"
      data-wow-delay="0.1s"
      style={{
        maxWidth: 600,
        visibility: "visible",
        animationDelay: "0.1s",
        animationName: "fadeIn"
      }}
    >
      <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
        Our Team
      </h4>
      <h1 className="mb-5 display-3">Meet With Our Expert Teacher</h1>
    </div>
    <div className="row g-5 justify-content-center">
      <div
        className="col-md-6 col-lg-4 col-xl-3 wow fadeIn"
        data-wow-delay="0.1s"
        style={{
          visibility: "visible",
          animationDelay: "0.1s",
          animationName: "fadeIn"
        }}
      >
        <div className="team-item border border-primary img-border-radius overflow-hidden">
          <img src={img10} className="img-fluid w-100" alt="" />
          <div className="team-icon d-flex align-items-center justify-content-center">
            <a
              className="share btn btn-primary btn-md-square text-white rounded-circle me-3"
              href=""
            >
              <i className="fas fa-share-alt" />
            </a>
            <a
              className="share-link btn btn-primary btn-md-square text-white rounded-circle me-3"
              href=""
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="share-link btn btn-primary btn-md-square text-white rounded-circle me-3"
              href=""
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="share-link btn btn-primary btn-md-square text-white rounded-circle"
              href=""
            >
              <i className="fab fa-instagram" />
            </a>
          </div>
          <div className="team-content text-center py-3">
            <h4 className="text-primary">Linda Carlson</h4>
            <p className="text-muted mb-2">English Teacher</p>
          </div>
        </div>
      </div>
      <div
        className="col-md-6 col-lg-4 col-xl-3 wow fadeIn"
        data-wow-delay="0.3s"
        style={{
          visibility: "visible",
          animationDelay: "0.3s",
          animationName: "fadeIn"
        }}
      >
        <div className="team-item border border-primary img-border-radius overflow-hidden">
          <img src={img11} className="img-fluid w-100" alt="" />
          <div className="team-icon d-flex align-items-center justify-content-center">
            <a
              className="share btn btn-primary btn-md-square text-white rounded-circle me-3"
              href=""
            >
              <i className="fas fa-share-alt" />
            </a>
            <a
              className="share-link btn btn-primary btn-md-square text-white rounded-circle me-3"
              href=""
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="share-link btn btn-primary btn-md-square text-white rounded-circle me-3"
              href=""
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="share-link btn btn-primary btn-md-square text-white rounded-circle"
              href=""
            >
              <i className="fab fa-instagram" />
            </a>
          </div>
          <div className="team-content text-center py-3">
            <h4 className="text-primary">Linda Carlson</h4>
            <p className="text-muted mb-2">English Teacher</p>
          </div>
        </div>
      </div>
      <div
        className="col-md-6 col-lg-4 col-xl-3 wow fadeIn"
        data-wow-delay="0.5s"
        style={{
          visibility: "visible",
          animationDelay: "0.5s",
          animationName: "fadeIn"
        }}
      >
        <div className="team-item border border-primary img-border-radius overflow-hidden">
          <img src={img12} className="img-fluid w-100" alt="" />
          <div className="team-icon d-flex align-items-center justify-content-center">
            <a
              className="share btn btn-primary btn-md-square text-white rounded-circle me-3"
              href=""
            >
              <i className="fas fa-share-alt" />
            </a>
            <a
              className="share-link btn btn-primary btn-md-square text-white rounded-circle me-3"
              href=""
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="share-link btn btn-primary btn-md-square text-white rounded-circle me-3"
              href=""
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="share-link btn btn-primary btn-md-square text-white rounded-circle"
              href=""
            >
              <i className="fab fa-instagram" />
            </a>
          </div>
          <div className="team-content text-center py-3">
            <h4 className="text-primary">Linda Carlson</h4>
            <p className="text-muted mb-2">English Teacher</p>
          </div>
        </div>
      </div>
      <div
        className="col-md-6 col-lg-4 col-xl-3 wow fadeIn"
        data-wow-delay="0.7s"
        style={{
          visibility: "visible",
          animationDelay: "0.7s",
          animationName: "fadeIn"
        }}
      >
        <div className="team-item border border-primary img-border-radius overflow-hidden">
          <img src={img13} className="img-fluid w-100" alt="" />
          <div className="team-icon d-flex align-items-center justify-content-center">
            <a
              className="share btn btn-primary btn-md-square text-white rounded-circle me-3"
              href=""
            >
              <i className="fas fa-share-alt" />
            </a>
            <a
              className="share-link btn btn-primary btn-md-square text-white rounded-circle me-3"
              href=""
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="share-link btn btn-primary btn-md-square text-white rounded-circle me-3"
              href=""
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="share-link btn btn-primary btn-md-square text-white rounded-circle"
              href=""
            >
              <i className="fab fa-instagram" />
            </a>
          </div>
          <div className="team-content text-center py-3">
            <h4 className="text-primary">Linda Carlson</h4>
            <p className="text-muted mb-2">English Teacher</p>
          </div>
        </div>
      </div>
    </div>
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
            width: 3499,
            transform: "translate3d(-777px, 0px, 0px)"
          }}
        >
          <div
            className="owl-item cloned"
            style={{ width: "338.667px", marginRight: 50 }}
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
                      src={img14}
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
            style={{ width: "338.667px", marginRight: 50 }}
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
                      src={img14}
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
            className="owl-item cloned active"
            style={{ width: "338.667px", marginRight: 50 }}
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
                      src={img14}
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
            style={{ width: "338.667px", marginRight: 50 }}
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
                      src={img14}
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
            style={{ width: "338.667px", marginRight: 50 }}
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
                      src={img14}
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
            className="owl-item"
            style={{ width: "338.667px", marginRight: 50 }}
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
                      src={img14}
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
            style={{ width: "338.667px", marginRight: 50 }}
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
                      src={img14}
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
            style={{ width: "338.667px", marginRight: 50 }}
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
                      src={img14}
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
            style={{ width: "338.667px", marginRight: 50 }}
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
                      src={img14}
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
      <div className="owl-dots disabled">
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
  );
}
