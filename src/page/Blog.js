import img from '../assets/img/blog-1.jpg'
import img1 from '../assets/img/program-teacher.jpg'
import img2 from '../assets/img/blog-2.jpg'
import img3 from '../assets/img/blog-3.jpg'


export default function Blog() {
    return(
        <>
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
      <h1 className="display-2 text-white mb-4">Our Blog</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item text-white" aria-current="page">
            Our Blog
          </li>
        </ol>
      </nav>
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
              <img
                src={img}
                className="img-fluid w-100"
                alt="Image"
              />
            </div>
            <div className="d-flex justify-content-between px-4 py-3 bg-light border-bottom border-primary blog-date-comments">
              <small className="text-dark">
                <i className="fas fa-calendar me-1 text-dark" /> 29 Nov 2023
              </small>
              <small className="text-dark">
                <i className="fas fa-comment-alt me-1 text-dark" /> Comments
                (15)
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
              <img
                src={img2}
                className="img-fluid w-100"
                alt="Image"
              />
            </div>
            <div className="d-flex justify-content-between px-4 py-3 bg-light border-bottom border-primary blog-date-comments">
              <small className="text-dark">
                <i className="fas fa-calendar me-1 text-dark" /> 29 Nov 2023
              </small>
              <small className="text-dark">
                <i className="fas fa-comment-alt me-1 text-dark" /> Comments
                (15)
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
              <img
                src={img3}
                className="img-fluid w-100"
                alt="Image"
              />
            </div>
            <div className="d-flex justify-content-between px-4 py-3 bg-light border-bottom border-primary blog-date-comments">
              <small className="text-dark">
                <i className="fas fa-calendar me-1 text-dark" /> 29 Nov 2023
              </small>
              <small className="text-dark">
                <i className="fas fa-comment-alt me-1 text-dark" /> Comments
                (15)
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
</>

    )
}