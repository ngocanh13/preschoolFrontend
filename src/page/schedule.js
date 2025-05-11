import img from "../assets/img/event-1.jpg";
import img1 from "../assets/img/event-2.jpg";
import img2 from "../assets/img/event-3.jpg";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import httpClient from "../auth/httpClient";

export default function Schedule() {
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await httpClient.get("/classes");
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

  const handleClassChange = (e) => {
    const classId = e.target.value;
    setSelectedClass(classId);

    const foundClass = classes.find((cls) => cls.id === parseInt(classId));
    if (foundClass) {
      setSchedule(foundClass.schedules || []);
    } else {
      setSchedule([]);
    }
  };

  // Thêm hàm xóa thời khóa biểu của lớp
  const handleDeleteSchedule = async () => {
    if (!selectedClass) {
      alert("Vui lòng chọn lớp cần xóa thời khóa biểu.");
      return;
    }

    if (window.confirm("Bạn có chắc muốn xóa toàn bộ thời khóa biểu của lớp này không?")) {
      try {
        await httpClient.delete(`/schedules/class/${selectedClass}`);
        alert("Đã xóa thành công thời khóa biểu!");
        // Sau khi xóa thì cập nhật lại UI:
        fetchClasses();
        setSchedule([]);
      } catch (error) {
        console.error("Lỗi khi xóa thời khóa biểu:", error);
        alert("Xóa thất bại!");
      }
    }
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
              onChange={handleClassChange}
            >
              <option value="">Chọn lớp</option>
              {(classes || []).map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>

            <div>
              <Link
                to="/addschedule"
                className="btn btn-primary"
                style={{ textDecoration: "none" }}
              >
                <i className="fas fa-plus me-1"></i> Thêm
              </Link>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table table-bordered table-hover">
                  <thead className="table-primary">
                    <tr>
                      {/* <th scope="col">Thứ</th> */}
                      <th scope="col">Thời gian</th>
                      <th scope="col">Lịch trình</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(schedule || []).map((item, index) => (
                      <tr key={index}>
                        {/* <td>{item.dayOfWeek}</td> */}
                        <td>
                          {item.startTime} - {item.endTime}
                        </td>
                        <td>{item.subjectId}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {selectedClass && (
                  <div className="text-end mt-3">
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={handleDeleteSchedule}
                    >
                      <i className="fas fa-trash me-1"></i> Xóa 
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
