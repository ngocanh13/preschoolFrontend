import { Link } from "react-router-dom";
import httpClient from "../auth/httpClient";
import React, { useEffect, useState } from "react";

const AddSchedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [newSchedule, setNewSchedule] = useState({
    clazz: { id: null },
    subjectId: "",
    startTime: "",
    endTime: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [classes, setClasses] = useState([]);
  const [startTimeOptions, setStartTimeOptions] = useState([]);
  const [endTimeOptions, setEndTimeOptions] = useState([]);

  useEffect(() => {
    fetchClasses();
    generateTimeOptions();
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
      console.error("Error fetching classes:", error);
      setClasses([]);
    }
  };

  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
        times.push(time);
      }
    }
    setStartTimeOptions(times);
    setEndTimeOptions(times);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "classId") {
      setNewSchedule({ ...newSchedule, clazz: { id: value } });
    } else {
      setNewSchedule({ ...newSchedule, [name]: value });
    }
  };

  const addSchedule = () => {
    if (
      newSchedule.subjectId &&
      newSchedule.startTime &&
      newSchedule.endTime &&
      newSchedule.clazz.id
    ) {
      if (newSchedule.startTime >= newSchedule.endTime) {
        alert("Giờ bắt đầu phải trước giờ kết thúc!");
        return;
      }

      setSchedule([...schedule, newSchedule]);
      setNewSchedule({
        clazz: { id: newSchedule.clazz.id },
        subjectId: "",
        startTime: "",
        endTime: "",
      });
      setShowForm(false);
    } else {
      alert("Vui lòng điền đầy đủ thông tin!");
    }
  };

  const saveSchedules = async () => {
    if (schedule.length === 0) {
      alert("Không có lịch nào để lưu!");
      return;
    }

    try {
      const response = await httpClient.post("/schedules/add-bulk", schedule);
      if (response.status === 200) {
        alert("Lịch đã được lưu thành công!");
        setSchedule([]);
      } else {
        alert("Lưu lịch không thành công! Mã lỗi: " + response.status);
      }
    } catch (error) {
      alert("Đã xảy ra lỗi khi lưu lịch! Chi tiết: " + error.message);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-primary mb-4">Nhập lịch</h2>

      <div className="d-flex justify-content-start mb-3">
        <button className="btn btn-primary">
          <Link
            to="/schedule"
            className="btn btn-primary"
            style={{ textDecoration: "none" }}
          >
            <i className="fas fa-arrow-left me-1"></i>
            Quay lại
          </Link>
        </button>
      </div>

      <div className="card p-3 mb-4">
        <div className="mb-2 text-start">
          <label className="form-label">Lịch trình</label>
          <input
            type="text"
            name="subjectId"
            value={newSchedule.subjectId}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-2 text-start">
          <label className="form-label">Thời gian bắt đầu</label>
          <select
            name="startTime"
            value={newSchedule.startTime}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Chọn thời gian bắt đầu</option>
            {startTimeOptions.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-2 text-start">
          <label className="form-label">Thời gian kết thúc</label>
          <select
            name="endTime"
            value={newSchedule.endTime}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Chọn thời gian kết thúc</option>
            {endTimeOptions.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div className="text-center">
          <button
            className="btn btn-primary btn-sm px-3 py-2"
            onClick={addSchedule}
          >
            <i className="fas fa-plus me-2"></i>
            Thêm
          </button>
        </div>
      </div>

      <div className="table-responsive shadow rounded">
        <table className="table table-bordered table-hover">
          <thead className="table-primary">
            <tr>
              <th>Lịch Trình</th>
              <th>Thời Gian Bắt Đầu</th>
              <th>Thời Gian Kết Thúc</th>
            </tr>
          </thead>
          <tbody>
            {(schedule || []).map((item, index) => (
              <tr key={index}>
                <td>{item.subjectId}</td>
                <td>{item.startTime}</td>
                <td>{item.endTime}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mb-2 text-start">
          <label className="form-label">Chọn lớp</label>
          <select
            name="classId"
            value={newSchedule.clazz.id || ""}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Chọn lớp</option>
            {classes.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className="text-center">
          <button
            className="btn btn-primary btn-sm px-3 py-2 my-3"
            onClick={saveSchedules}
          >
            <i className="fas fa-save me-2"></i>
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSchedule;
