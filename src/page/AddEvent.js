import React from "react";
import { Link } from "react-router-dom";

const AddEvent = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <h1 className="text-primary mb-4 d-inline-block p-2 title-border-radius">
            Thêm Sự Kiện
          </h1>
          <p>Thêm sự kiện mới cho trường mầm non</p>
        </div>

        <div className="d-flex justify-content-start mb-3">
          <button className="btn btn-primary">
            <Link
              to="/"
              className="btn btn-primary"
              style={{
                textDecoration: "none",
              }}
            >
              <i className="fas fa-arrow-left me-1"></i>
              Quay lại
            </Link>
          </button>
        </div>

        <div
          className="bg-light rounded p-4 wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <form>
            <div className="row g-4">
              <div className="col-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="eventName"
                    placeholder="Nhập tên sự kiện"
                  />
                  <label htmlFor="eventName">Tên sự kiện</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-floating">
                  <input type="date" className="form-control" id="eventDate" />
                  <label htmlFor="eventDate">Ngày</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-floating">
                  <input type="time" className="form-control" id="eventTime" />
                  <label htmlFor="eventTime">Thời gian</label>
                </div>
              </div>

              <div className="col-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="eventLocation"
                    placeholder="Nhập địa điểm"
                  />
                  <label htmlFor="eventLocation">Địa điểm</label>
                </div>
              </div>

              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Nhập mô tả sự kiện"
                    id="eventDescription"
                    style={{ height: "150px" }}
                  ></textarea>
                  <label htmlFor="eventDescription">Mô tả sự kiện</label>
                </div>
              </div>

              <div className="col-12 text-center">
                <button
                  type="submit"
                  className="btn "
                  style={{ backgroundColor: "#FF4880", color: "white" }}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "var(--bs-secondary)")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#FF4880")
                  }
                >
                  Thêm sự kiện
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
