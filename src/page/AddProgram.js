import React from "react";
import { Link } from "react-router-dom";

const AddProgram = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <h1 className="text-primary mb-4 d-inline-block p-2 title-border-radius">
            Thêm Khóa Học
          </h1>
          <p>Thêm khóa học mới cho trường mầm non</p>
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
      </div>
      <div className="row g-5 justify-content-center">
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
                    id="programName"
                    placeholder="Nhập tên khóa học"
                  />
                  <label htmlFor="programName">Tên khóa học</label>
                </div>
              </div>

              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Nhập mô tả khóa học"
                    id="programDescription"
                    style={{ height: "150px" }}
                  ></textarea>
                  <label htmlFor="programDescription">Mô tả khóa học</label>
                </div>
              </div>

              <div className="col-12">
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="teacherSelect"
                    aria-label="Chọn giáo viên phụ trách"
                  >
                    <option value="">Chọn giáo viên</option>
                    <option value="1">Nguyễn Thị A - Giáo viên mầm non</option>
                    <option value="2">Trần Thị B - Giáo viên mầm non</option>
                  </select>
                  <label htmlFor="teacherSelect">Giáo viên phụ trách</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="number"
                    className="form-control"
                    id="maxStudents"
                    placeholder="Nhập số học sinh tối đa"
                  />
                  <label htmlFor="maxStudents">Số học sinh tối đa</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="number"
                    className="form-control"
                    id="totalHours"
                    placeholder="Nhập tổng số giờ học"
                  />
                  <label htmlFor="totalHours">Tổng số giờ học</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="number"
                    className="form-control"
                    id="totalSessions"
                    placeholder="Nhập tổng số buổi học"
                  />
                  <label htmlFor="totalSessions">Tổng số buổi học</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="number"
                    className="form-control"
                    id="tuition"
                    placeholder="Nhập học phí"
                  />
                  <label htmlFor="tuition">Học phí (VNĐ)</label>
                </div>
              </div>

              <div className="col-12 text-center">
                <button type="submit" className="btn btn-primary">
                  Thêm khóa học
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProgram;
