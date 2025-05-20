import React, { useState } from "react";
import { Link } from "react-router-dom";
import httpClient from '../auth/httpClient';

const AddProgram = () => {
  const [program, setProgram] = useState({
    programName: "",
    programDescription: "", 
    totalSessions: null,
    tuition: null
  });

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProgram({ ...program, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setImagePreview(fileReader.result);
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Log dữ liệu trước khi gửi request
    console.log("Program data before sending:", program);

    // Kiểm tra dữ liệu trước khi gửi
    if (!program.programName || !program.programDescription || !program.totalSessions || !program.tuition) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    // Chuyển totalSessions và tuition sang số
    const programData = {
      ...program,
      totalSessions: parseInt(program.totalSessions),
      tuition: parseInt(program.tuition)
    };

    // Chuyển dữ liệu của chương trình thành JSON và thêm vào FormData
    formData.append("program", JSON.stringify(programData));

    // Thêm ảnh vào FormData nếu có
    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      // Log FormData trước khi gửi
      for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }

      const response = await httpClient.post("/programs/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Server response:", response);

      if (response.status === 200 || response.status === 201) {
        alert("Ngoại khóa đã được thêm thành công!");
        setProgram({
          programName: "",
          programDescription: "",
          totalSessions: null,
          tuition: null
        });
        setImageFile(null);
        setImagePreview(null);
      } else {
        alert("Thêm ngoại khóa không thành công! Mã lỗi: " + response.status);
      }
    } catch (error) {
      console.error("Error details:", error.response?.data);
      alert("Đã xảy ra lỗi khi thêm ngoại khóa! Chi tiết: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
          <h1 className="text-primary mb-4 d-inline-block p-2 title-border-radius">Thêm ngoại khóa</h1>
          <p>Thêm ngoại khóa mới cho trường mầm non</p>
        </div>

        <div className="d-flex justify-content-start mb-3">
          <Link to="/programs" className="btn btn-primary text-white text-decoration-none">
            <i className="fas fa-arrow-left me-1"></i> Quay lại
          </Link>
        </div>

        <div className="row g-5 justify-content-center">
          <div className="bg-light rounded p-4">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="row g-4">
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="programName"
                      name="programName"
                      value={program.programName}
                      onChange={handleChange}
                      placeholder="Nhập tên ngoại khóa"
                      required
                    />
                    <label htmlFor="programName">Tên ngoại khóa</label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      name="programDescription"
                      value={program.programDescription}
                      onChange={handleChange}
                      placeholder="Nhập mô tả ngoại khóa"
                      id="programDescription"
                      style={{ height: "150px" }}
                      required
                    ></textarea>
                    <label htmlFor="programDescription">Mô tả ngoại khóa</label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="file"
                      className="form-control"
                      id="image"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                    <label htmlFor="image">Ảnh minh họa</label>
                  </div>
                </div>

                {imagePreview && (
                  <div className="col-12 text-center">
                    <img src={imagePreview} alt="Preview" style={{ maxWidth: "200px", marginTop: "10px" }} />
                  </div>
                )}

                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="totalSessions"
                      name="totalSessions"
                      value={program.totalSessions || ""}
                      onChange={handleChange}
                      placeholder="Nhập tổng số buổi ngoại khóa"
                      required
                      min="1"
                    />
                    <label htmlFor="totalSessions">Tổng số buổi ngoại khóa</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="tuition"
                      name="tuition"
                      value={program.tuition || ""}
                      onChange={handleChange}
                      placeholder="Chi phí"
                      required
                      min="0"
                    />
                    <label htmlFor="tuition">Chi phí (VNĐ)</label>
                  </div>
                </div>

                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-primary">
                    Thêm ngoại khóa
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProgram;
