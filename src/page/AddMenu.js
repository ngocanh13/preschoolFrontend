import React, { useState } from "react";
import { Link } from "react-router-dom";
import httpClient from "../auth/httpClient";

const AddMenu = () => {
  const [menu, setMenu] = useState([]);
  const [newMenu, setNewMenu] = useState({
    dayOfWeek: "",
    breakfast: "",
    second_breakfast: "",
    lunch: "",
    dinner: "",
    second_dinner: "",
  });
  
  const handleChange = (e) => {
    setNewMenu({ ...newMenu, [e.target.name]: e.target.value });
  };

  const handleDaySelect = (day) => {
    setNewMenu({ ...newMenu, dayOfWeek: day });
  };

  const addMenu = () => {
    const {
      dayOfWeek,
      breakfast,
      second_breakfast,
      lunch,
      dinner,
      second_dinner,
    } = newMenu;

    if (
      dayOfWeek &&
      breakfast &&
      second_breakfast &&
      lunch &&
      dinner &&
      second_dinner
    ) {
      setMenu([...menu, newMenu]);
      setNewMenu({
        dayOfWeek: "",
        breakfast: "",
        second_breakfast: "",
        lunch: "",
        dinner: "",
        second_dinner: "",
      });
    } else {
      alert("Vui lòng điền đầy đủ thông tin!");
    }
  };

  const saveMenus = async () => {
    if (menu.length === 0) {
      alert("Không có thực đơn nào để lưu!");
      return;
    }

    try {
      const response = await httpClient.post("/menus/bulk-save", menu);
      if (response.status === 200) {
        alert("Thực đơn đã được lưu thành công!");
        setMenu([]);
      } else {
        alert("Lưu thực đơn không thành công! Mã lỗi: " + response.status);
      }
    } catch (error) {
      alert("Ngày trong thực đơn bị trùng!");
    }
  };

  const weekdays = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6"];

  return (
    <div className="container mt-4">
      <h2 className="text-primary mb-4">Nhập thực đơn</h2>

      <div className="d-flex justify-content-start mb-3">
        <button className="btn btn-primary">
          <Link
            to="/menu"
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

      <div className="card p-3 mb-4">
        <div className="mb-3 text-start">
          <label className="form-label">Chọn ngày trong tuần:</label>
          <div className="d-flex gap-2 flex-wrap">
            {weekdays.map((day) => {
              const isUsed = menu.some((item) => item.dayOfWeek === day);
              return (
                <button
                  key={day}
                  type="button"
                  className={`btn btn-sm ${
                    newMenu.dayOfWeek === day
                      ? "btn btn-primary"
                      : "btn-outline-primary"
                  }`}
                  onClick={() => handleDaySelect(day)}
                  disabled={isUsed}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-2 text-start">
          <label className="form-label">Bữa sáng</label>
          <input
            type="text"
            name="breakfast"
            value={newMenu.breakfast}
            onChange={handleChange}
            className="form-control text-start"
          />
        </div>
        <div className="mb-2 text-start">
          <label className="form-label">Bữa phụ sáng</label>
          <input
            type="text"
            name="second_breakfast"
            value={newMenu.second_breakfast}
            onChange={handleChange}
            className="form-control text-start"
          />
        </div>
        <div className="mb-2 text-start">
          <label className="form-label">Bữa trưa</label>
          <input
            type="text"
            name="lunch"
            value={newMenu.lunch}
            onChange={handleChange}
            className="form-control text-start"
          />
        </div>
        <div className="mb-2 text-start">
          <label className="form-label">Bữa chiều</label>
          <input
            type="text"
            name="dinner"
            value={newMenu.dinner}
            onChange={handleChange}
            className="form-control text-start"
          />
        </div>
        <div className="mb-2 text-start">
          <label className="form-label">Bữa phụ chiều</label>
          <input
            type="text"
            name="second_dinner"
            value={newMenu.second_dinner}
            onChange={handleChange}
            className="form-control text-start"
          />
        </div>

        <div className="text-center">
          <button
            className="btn btn-primary btn-sm px-3 py-2"
            onClick={addMenu}
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
              <th>Ngày</th>
              <th>Bữa Sáng</th>
              <th>Bữa Phụ Sáng</th>
              <th>Bữa Trưa</th>
              <th>Bữa Chiều</th>
              <th>Bữa Phụ Chiều</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={index}>
                <td>{item.dayOfWeek}</td>
                <td>{item.breakfast}</td>
                <td>{item.second_breakfast}</td>
                <td>{item.lunch}</td>
                <td>{item.dinner}</td>
                <td>{item.second_dinner}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="text-center">
          <button
            className="btn btn-primary btn-sm px-3 py-2 my-3"
            onClick={saveMenus}
          >
            <i className="fas fa-save me-2"></i>
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMenu;
