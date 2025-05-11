import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ClassFund = () => {
  const [tuitionList, setTuitionList] = useState([]);

  // Gọi API khi component được load
  useEffect(() => {
    axios
      .get("http://localhost:8080/tuition")
      .then((res) => {
        setTuitionList(res.data);
      })
      .catch((err) => {
        console.error("Lỗi khi tải học phí:", err);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-primary mb-4 d-inline-block p-2 title-border-radius">
        Danh sách học phí
      </h2>

      <div className="d-flex justify-content-end mb-4">
        <Link to="/addtuition" style={{ textDecoration: "none" }}>
          <button className="btn btn-primary">
            <i className="fas fa-plus me-2"></i>
            Thêm học phí
          </button>
        </Link>
      </div>

      <div className="table-responsive shadow rounded">
        <table className="table table-hover border-0 mb-0">
          <thead>
            <tr style={{ backgroundColor: "#007bff", color: "#ffffee" }}>
              <th className="py-3 px-4 border-0">Khoản cần đóng</th>
              <th className="py-3 px-4 border-0">Số tiền</th>
              <th className="py-3 px-4 border-0">Hạn thanh toán</th>
              <th className="py-3 px-4 border-0">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {tuitionList.map((fee) => (
              <tr key={fee.id}>
                <td className="py-3 px-4">{fee.feeType}</td>
                <td className="py-3 px-4">
                  {fee.amount.toLocaleString("vi-VN")} VNĐ
                </td>
                <td className="py-3 px-4">
                  {new Date(fee.dueDate).toLocaleDateString("vi-VN")}
                </td>
                <td className="py-3 px-4">
                  <Link
                    to={`/addtuition/${fee.id}`}
                    className="btn btn-outline-info btn-sm me-2"
                  >
                    <i className="fas fa-edit me-1"></i>Sửa
                  </Link>

                  {/* <button className="btn btn-outline-warning btn-sm">
                    <i className="fas fa-trash me-1"></i>Xóa
                  </button> */}
                </td>
              </tr>
            ))}
            {tuitionList.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  Không có dữ liệu học phí.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClassFund;
