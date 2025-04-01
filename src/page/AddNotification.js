import React from "react";
import { Link } from "react-router-dom";

const AddNotification = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-primary mb-4 d-inline-block p-2 title-border-radius">
        Thêm Thông Báo
      </h2>
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

      <form>
        <div className="mb-3">
          <label className="form-label">Ngày thông báo</label>
          <input type="date" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Tiêu đề</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nhập tiêu đề thông báo"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Nội dung</label>
          <textarea
            className="form-control"
            rows="4"
            placeholder="Nhập nội dung thông báo"
          ></textarea>
        </div>

        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary">
            Thêm khóa học
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNotification;
