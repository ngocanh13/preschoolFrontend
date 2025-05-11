import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import httpClient from "../auth/httpClient";

const AddStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [classes, setClasses] = useState([]);
  const [student, setStudent] = useState({
    name: "",
    dob: "",
    address: "",
    classId: "",
    dad: "",
    mom: "",
    phoneDad: "",
    phoneMom: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const classRes = await httpClient.get("/classes");
        const classData = Array.isArray(classRes.data)
          ? classRes.data
          : Object.values(classRes.data);
        setClasses(classData);

        if (id) {
          const res = await httpClient.get(`/students/${id}`);
          const data = res.data;

          setStudent({
            name: data.name || "",
            dob: data.dob ? new Date(data.dob).toISOString().split("T")[0] : "",
            address: data.address || "",
            dad: data.dad || "",
            mom: data.mom || "",
            phoneDad: data.phoneDad || "",
            phoneMom: data.phoneMom || "",
            classId: data.classId || data.classEntity?.id || "",
          });
        }
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await httpClient.put(`/students/update/${id}`, student);
        alert("✅ Cập nhật học sinh thành công!");
      } else {
        await httpClient.post("/students/add", student);
        alert("✅ Thêm học sinh thành công!");
      }
      navigate("/classes");
    } catch (error) {
      console.error("Lỗi:", error);
      alert("❌ Thao tác thất bại!");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-primary mb-4 d-inline-block p-2 title-border-radius">
        {id ? "Chỉnh sửa học sinh" : "Thêm học sinh"}
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

      <form onSubmit={handleSubmit}>
        {[
          { label: "Họ và tên", name: "name", type: "text" },
          { label: "Ngày sinh", name: "dob", type: "date" },
          { label: "Địa chỉ", name: "address", type: "text" },
          { label: "Tên bố", name: "dad", type: "text" },
          { label: "Số điện thoại bố", name: "phoneDad", type: "tel" },
          { label: "Tên mẹ", name: "mom", type: "text" },
          { label: "Số điện thoại mẹ", name: "phoneMom", type: "tel" },
        ].map(({ label, name, type }) => (
          <div key={name} className="mb-3 text-start">
            <label className="form-label">{label}</label>
            <input
              type={type}
              name={name}
              className="form-control"
              value={student[name]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        <div className="mb-3 text-start">
          <label className="form-label">Chọn lớp</label>
          <select
            className="form-select"
            name="classId"
            value={student.classId}
            onChange={handleChange}
            required
          >
            <option value="">-- Chọn lớp --</option>
            {classes.map((cls) => (
              <option key={cls.id} value={cls.id}>
                {cls.name}
              </option>
            ))}
          </select>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            {id ? "Cập nhật" : "Thêm học sinh"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
