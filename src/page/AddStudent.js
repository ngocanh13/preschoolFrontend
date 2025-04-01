import React from "react";
import { Link } from "react-router-dom";

const AddStudent = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-primary mb-4 d-inline-block p-2 title-border-radius">
        Thêm học sinh
      </h2>
      <div className="d-flex justify-content-start mb-3">
        <button className="btn btn-primary">
          <Link
            to="/classes"
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
          <label className="form-label">Họ và tên</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nhập họ và tên"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Ngày sinh</label>
          <input type="date" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Giới tính</label>
          <select className="form-select">
            <option value="">Chọn giới tính</option>
            <option value="male">Nam</option>
            <option value="female">Nữ</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Địa chỉ</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nhập địa chỉ"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Số điện thoại phụ huynh</label>
          <input
            type="tel"
            className="form-control"
            placeholder="Nhập số điện thoại"
          />
        </div>

        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary">
            Thêm học sinh 
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
