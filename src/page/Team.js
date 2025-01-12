import img from '../assets/img/team-1.jpg'
import img1 from '../assets/img/team-2.jpg'
import img2 from '../assets/img/team-3.jpg'
import img3 from '../assets/img/team-4.jpg'

export default function Team() {
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
      <h1 className="display-2 text-white mb-4">Our Team</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item text-white" aria-current="page">
            Our Team
          </li>
        </ol>
      </nav>
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
            <img src={img} className="img-fluid w-100" alt="" />
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
            <img src={img1} className="img-fluid w-100" alt="" />
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
            <img src={img2} className="img-fluid w-100" alt="" />
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
            <img src={img3} className="img-fluid w-100" alt="" />
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
</>

    )
}
