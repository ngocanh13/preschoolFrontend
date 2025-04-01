import img from "../assets/img/event-1.jpg";
import img1 from "../assets/img/event-2.jpg";
import img2 from "../assets/img/event-3.jpg";
import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import httpClient from "../auth/httpClient";



export default function Schedule() {
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState("Lớp Mầm");

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await httpClient.get("/classes/");
      if (Array.isArray(response.data)) {
        setClasses(response.data);
      } else if (response.data && typeof response.data === "object") {
        setClasses(Object.values(response.data));
      } else {
        console.error("Invalid data format received:", response.data);
        setClasses([]);
      }
    } catch (error) {
      console.error("Lỗi khi lấy danh sách lớp học:", error);
      setClasses([]);
    }
  };

  const schedules = {
    "Lớp Mầm": [
      { time: "7:00 - 7:30", activity: "Đón trẻ - Điểm danh" },
      { time: "7:30 - 8:00", activity: "Thể dục buổi sáng" },
      { time: "8:00 - 8:30", activity: "Bữa sáng" },
      { time: "9:00 - 10:00", activity: "Học Toán" },
      { time: "10:00 - 10:30", activity: "Bữa phụ sáng" },
      { time: "10:30 - 11:30", activity: "Tiếng Anh" },
      { time: "11:30 - 12:15", activity: "Ăn trưa" },
      { time: "12:15 - 14:00", activity: "Ngủ trưa" },
      { time: "14:00 - 14:30", activity: "Bữa chiều" },
      { time: "14:30 - 15:30", activity: "Hoạt động nhóm" },
      { time: "15:30 - 16:00", activity: "Bữa phụ chiều" },
      { time: "16:00 - 16:30", activity: "Hoạt động ngoài trời - Trả trẻ" },
    ],
    "Lớp Chồi": [
      { time: "7:00 - 7:30", activity: "Đón trẻ - Điểm danh" },
      { time: "7:30 - 8:00", activity: "Thể dục buổi sáng" },
      { time: "8:00 - 8:30", activity: "Bữa sáng" },
      { time: "9:00 - 10:00", activity: "Học Tiếng Việt" },
      { time: "10:00 - 10:30", activity: "Bữa phụ sáng" },
      { time: "10:30 - 11:30", activity: "Mỹ thuật" },
      { time: "11:30 - 12:15", activity: "Ăn trưa" },
      { time: "12:15 - 14:00", activity: "Ngủ trưa" },
      { time: "14:00 - 14:30", activity: "Bữa chiều" },
      { time: "14:30 - 15:30", activity: "Kể chuyện" },
      { time: "15:30 - 16:00", activity: "Bữa phụ chiều" },
      { time: "16:00 - 16:30", activity: "Hoạt động ngoài trời - Trả trẻ" },
    ],
    "Lớp Lá": [
      { time: "7:00 - 7:30", activity: "Đón trẻ - Điểm danh" },
      { time: "7:30 - 8:00", activity: "Thể dục buổi sáng" },
      { time: "8:00 - 8:30", activity: "Bữa sáng" },
      { time: "9:00 - 10:00", activity: "Học Toán" },
      { time: "10:00 - 10:30", activity: "Bữa phụ sáng" },
      { time: "10:30 - 11:30", activity: "Kỹ năng sống" },
      { time: "11:30 - 12:15", activity: "Ăn trưa" },
      { time: "12:15 - 14:00", activity: "Ngủ trưa" },
      { time: "14:00 - 14:30", activity: "Bữa chiều" },
      { time: "14:30 - 15:30", activity: "Hoạt động nhóm" },
      { time: "15:30 - 16:00", activity: "Bữa phụ chiều" },
      { time: "16:00 - 16:30", activity: "Hoạt động ngoài trời - Trả trẻ" },
    ],
  };

  return (
    <>
      <div className="container-fluid events py-5 bg-light">
        <div className="container py-5">
          <div
            className="mx-auto text-center wow fadeIn"
            data-wow-delay="0.1s"
            style={{
              maxWidth: 700,
              visibility: "visible",
              animationDelay: "0.1s",
              animationName: "fadeIn",
            }}
          >
            <h4 className="text-primary mb-4 d-inline-block p-2 title-border-radius">
              Thời khóa biểu
            </h4>
            <h1 className="mb-5 display-3">Thời khóa biểu hàng ngày</h1>
          </div>

          <div className="d-flex justify-content-between align-items-center mb-4">
            <select
              className="form-select w-auto"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              {(classes || []).map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>

            <div>
              <button className="btn btn-primary me-2">
                <i className="fas fa-plus me-1"></i>Thêm
              </button>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table table-bordered table-hover">
                  <thead className="table-primary">
                    <tr>
                      <th scope="col">Thời gian</th>
                      <th scope="col">Hoạt động</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedules[selectedClass].map((item, index) => (
                      <tr key={index}>
                        <th scope="row">{item.time}</th>
                        <td>{item.activity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="text-end mt-3">
                  <button className="btn btn-outline-info btn-sm me-2">
                    <i className="fas fa-edit me-1"></i>Sửa
                  </button>
                  <button className="btn btn-outline-danger btn-sm">
                    <i className="fas fa-trash me-1"></i>Xóa
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
