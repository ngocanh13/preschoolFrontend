import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import httpClient from '../auth/httpClient';
import axios from "axios";

function Classes() {
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState("all");
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await httpClient.get("/classes");
      if (Array.isArray(response.data)) {
        setClasses(response.data);
        setStudents(response.data.flatMap(cls => cls.students || []));
      } else if (response.data && typeof response.data === "object") {
        const classArray = Object.values(response.data);
        setClasses(classArray);
        setStudents(classArray.flatMap(cls => cls.students || []));
      } else {
        console.error("Invalid data format received:", response.data);
        setClasses([]);
        setStudents([]);
      }
    } catch (error) {
      console.error("Lỗi khi lấy danh sách lớp học:", error);
      setClasses([]);
      setStudents([]);
    }
  };

  const handleClassChange = (e) => {
    const classId = e.target.value;
    setSelectedClass(classId);

    if (classId === "all") {
      const allStudents = classes.flatMap(cls => cls.students || []);
      setStudents(allStudents);
    } else {
      const foundClass = classes.find((cls) => cls.id === parseInt(classId));
      if (foundClass) {
        setStudents(foundClass.students || []);
      } else {
        setStudents([]);
      }
    }
  };

  const handleDeleteStudent = async (id) => {
    if (window.confirm("Bạn có chắc muốn xóa học sinh này?")) {
      try {
        await axios.delete(`http://localhost:8080/students/delete/${id}`);
        // Sau khi xóa thành công, cập nhật lại danh sách học sinh
        setStudents(prevStudents => prevStudents.filter(student => student.id !== id));
        console.log(`Đã xóa học sinh có id ${id}`);
      } catch (error) {
        console.error("Lỗi khi xóa học sinh:", error);
        alert("Xóa học sinh thất bại.");
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-primary mb-4 d-inline-block p-2 title-border-radius">
        Học Sinh
      </h2>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <select
          className="form-select w-auto"
          value={selectedClass}
          onChange={handleClassChange}
        >
          <option value="all">Tất cả các lớp</option>
          {(classes || []).map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>

        <div className="d-flex justify-content-end mb-4">
          <Link to="/addstudent" className="btn btn-primary">
            <i className="fas fa-plus me-2"></i>Thêm học sinh
          </Link>
        </div>
      </div>

      <div className="table-responsive shadow rounded">
        <table className="table table-hover border-0 mb-0">
          <thead>
            <tr style={{ backgroundColor: "#007bff", color: "#ffffee" }}>
              <th className="py-3 px-4 border-0">#</th>
              <th className="py-3 px-4 border-0">Họ và Tên</th>
              <th className="py-3 px-4 border-0">Năm sinh</th>
              <th className="py-3 px-4 border-0">Địa chỉ</th>
              <th className="py-3 px-4 border-0">Bố</th>
              <th className="py-3 px-4 border-0">Mẹ</th>
              <th className="py-3 px-4 border-0">SĐT Bố</th>
              <th className="py-3 px-4 border-0">SĐT Mẹ</th>
              <th className="py-3 px-4 border-0">Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            {(students || []).map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.dob}</td>
                <td>{item.address}</td>
                <td>{item.dad}</td>
                <td>{item.mom}</td>
                <td>{item.phoneMom}</td>
                <td>{item.phoneDad}</td>
                <td className="py-3 px-4">
                  <Link to={`/addstudent/${item.id}`} className="btn btn-outline-info btn-sm me-2">
                    <i className="fas fa-edit me-1"></i>Sửa
                  </Link>
                  {/* <button 
                    className="btn btn-outline-warning btn-sm"
                    onClick={() => handleDeleteStudent(item.id)}
                  >
                    <i className="fas fa-trash me-1"></i>Xóa
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Classes;
