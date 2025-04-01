import img from "../assets/img/menu1.png";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import httpClient from "../auth/httpClient";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const startDate = new Date("2023-01-01"); // Set the start date
  const endDate = new Date("2023-12-31"); // Set the end date

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await httpClient.get("/api/menu");
      if (response.data && Array.isArray(response.data)) {
        setMenu(response.data);
      } else if (response.data && typeof response.data === 'object') {
        setMenu(Object.values(response.data));
      } else {
        console.error("Invalid data format received:", response.data);
      }
    } catch (error) {
      console.error("Lỗi khi lấy thực đơn:", error);
      setMenu([]);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-primary mb-4 d-inline-block p-2 title-border-radius">
        Menu của trẻ
      </h2>

      <div className="d-flex justify-content-end mb-4">
        <Link
          to="/addmenu"
          className="btn btn-primary"
          style={{
            textDecoration: "none",
          }}
        >
          <i className="fas fa-plus me-2"></i>Thêm thực đơn
        </Link>
      </div>
      <div className="mt-4">
        <h4 className="text-secondary">Ngày tháng</h4>
        <p>{`${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`}</p>
      </div>

      <div className="table-responsive shadow rounded">
        <table className="table table-bordered table-hover">
          <thead className="table-primary">
            <tr>
              <th scope="col">
                <i className="fas fa-utensils me-3"></i>
              </th>
              <th scope="col">Bữa Sáng</th>
              <th scope="col">Bữa Phụ Sáng</th>
              <th scope="col">Bữa Trưa</th>
              <th scope="col">Bữa Chiều</th>
              <th scope="col">Bữa Phụ Chiều</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
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
      </div>
    </div>
  );
};
export default Menu;
