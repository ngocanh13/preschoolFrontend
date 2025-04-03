import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import httpClient from '../auth/httpClient';




const AddMenu = () => {
  const [menu, setMenu] = useState('');

  

  const [newMenu, setNewMenu] = useState({
    day: "",
    breakfast: "",
    snack: "",
    lunch: "",
    afternoon: "",
    evening: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleChange = (e) => {
    setNewMenu({ ...newMenu, [e.target.name]: e.target.value });
  };

  const addMenu = () => {
    if (
      newMenu.day &&
      newMenu.breakfast &&
      newMenu.snack &&
      newMenu.lunch &&
      newMenu.afternoon &&
      newMenu.evening
    ) {
      setMenu([...menu, newMenu]);
      setNewMenu({
        day: "",
        breakfast: "",
        snack: "",
        lunch: "",
        afternoon: "",
        evening: "",
      });
      setShowForm(false);
    } else {
      alert("Vui lòng điền đầy đủ thông tin!");
    }
  };

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
        <input
          type="text"
          name="day"
          placeholder="thứ"
          value={newMenu.day}
          onChange={handleChange}
          className="form-control mb-2"
        />
        <input
          type="text"
          name="breakfast"
          placeholder="Bữa sáng"
          value={newMenu.breakfast}
          onChange={handleChange}
          className="form-control mb-2"
        />
        <input
          type="text"
          name="snack"
          placeholder="Bữa phụ sáng"
          value={newMenu.snack}
          onChange={handleChange}
          className="form-control mb-2"
        />
        <input
          type="text"
          name="lunch"
          placeholder="Bữa trưa"
          value={newMenu.lunch}
          onChange={handleChange}
          className="form-control mb-2"
        />
        <input
          type="text"
          name="afternoon"
          placeholder="Bữa chiều"
          value={newMenu.afternoon}
          onChange={handleChange}
          className="form-control mb-2"
        />
        <input
          type="text"
          name="evening"
          placeholder="Bữa phụ chiều"
          value={newMenu.evening}
          onChange={handleChange}
          className="form-control mb-2"
        />
        
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
      <div className="mb-3">
          <input
            type="date"
            placeholder="Ngày bắt đầu"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="form-control mb-2"
          />
          <input
            type="date"
            placeholder="Ngày kết thúc"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="form-control mb-2"
          />
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
          {(menu || []).map((item, index) => (
              <tr key={index}>
                <td>{item.day}</td>
                <td>{item.breakfast}</td>
                <td>{item.snack}</td>
                <td>{item.lunch}</td>
                <td>{item.afternoon}</td>
                <td>{item.evening}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-center">
          <button
            className="btn btn-primary btn-sm px-3 py-2 my-3"
            onClick={addMenu}
          >
            <i className="fas fa-plus me-2"></i>
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddMenu;
