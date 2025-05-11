import img from "../assets/img/menu1.png";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import httpClient from "../auth/httpClient";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const startDate = new Date("2023-01-01");
  const endDate = new Date("2023-12-31");

  useEffect(() => {
    (async () => {
      await fetchMenus();
    })();
  }, []);

  const fetchMenus = async () => {
    try {
      const response = await httpClient.get("/menus");
      if (Array.isArray(response.data)) {
        setMenu(response.data);
      } else if (response.data && typeof response.data === "object") {
        setMenu(Object.values(response.data));
      } else {
        console.error("Invalid data format received:", response.data);
        setMenu([]);
      }
    } catch (error) {
      console.error("Lỗi khi lấy danh sách thực đơn :", error);
      setMenu([]);
    }
  };

  const deleteAllMenus = async () => {
    try {
      await httpClient.delete("/menus/delete-all");
      setMenu([]); // Clear the menu state after deletion
    } catch (error) {
      console.error("Lỗi khi xóa tất cả thực đơn :", error);
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
      {/* <div className="mt-4">
        <h4 className="text-secondary">Ngày tháng</h4>
        <p>{`${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`}</p>
      </div> */}

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
            {(menu || []).map((item, index) => (
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
        <div className="text-end mt-3">
          <button className="btn btn-outline-danger btn-sm" onClick={deleteAllMenus}>
            <i className="fas fa-trash me-1"></i>Xóa tất cả
          </button>
        </div>
      </div>
    </div>
  );
};
export default Menu;
