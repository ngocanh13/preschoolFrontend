import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import httpClient from "../auth/httpClient";

const AddTuition = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [tuition, setTuition] = useState({
    feeType: "",
    amount: "",
    dueDate: "",
  });

  useEffect(() => {
    const fetchTuition = async () => {
      if (id) {
        try {
          const res = await httpClient.get(`/tuition/${id}`);
          const data = res.data;
          setTuition({
            feeType: data.feeType || "",
            amount: data.amount || "",
            dueDate: data.dueDate
              ? new Date(data.dueDate).toISOString().split("T")[0]
              : "",
          });
        } catch (error) {
          console.error("Lỗi khi tải dữ liệu học phí:", error);
        }
      }
    };

    fetchTuition();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTuition((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await httpClient.put(`/tuition/update/${id}`, tuition);
        alert("✅ Cập nhật học phí thành công!");
      } else {
        await httpClient.post("/tuition/add", tuition);
        alert("✅ Thêm học phí thành công!");
      }
      navigate("/classfund");
    } catch (error) {
      console.error("Lỗi:", error);
      alert("❌ Thao tác thất bại!");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-primary mb-4 d-inline-block p-2 title-border-radius">
        {id ? "Chỉnh sửa học phí" : "Thêm học phí"}
      </h2>

      <div className="d-flex justify-content-start mb-3">
        <button className="btn btn-primary">
          <Link
            to="/classfund"
            className="btn btn-primary"
            style={{ textDecoration: "none" }}
          >
            <i className="fas fa-arrow-left me-1"></i>
            Quay lại
          </Link>
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {[ 
          { label: "Tên khoản phí", name: "feeType", type: "text" },
          { label: "Số tiền (VNĐ)", name: "amount", type: "number" },
          { label: "Hạn thanh toán", name: "dueDate", type: "date" },
        ].map(({ label, name, type }) => (
          <div key={name} className="mb-3 text-start">
            <label className="form-label">{label}</label>
            <input
              type={type}
              name={name}
              className="form-control"
              value={tuition[name]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            {id ? "Cập nhật" : "Thêm học phí"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTuition;
