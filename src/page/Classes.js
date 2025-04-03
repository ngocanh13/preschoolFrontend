import React, { useState, useEffect } from "react"; 
import { data, Link } from "react-router-dom";
import httpClient from '../auth/httpClient';
import axios from "axios";



function Classes() {
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState('');
  const [selectedClass, setSelectedClass] = useState("all");
  
  useEffect(() => {
    (async () => {
      await fetchClasses();
      await fetchStudents();
    })()
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await httpClient.get("/classes/");
      if (Array.isArray(response.data)) {
        setClasses(response.data); 
      } else if (response.data && typeof response.data === 'object') {
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

  const fetchStudents = async () => {
    try {
      const response = await httpClient.get("/students/"); // Fixed API endpoint
      setStudents(response.data.data || []); 
    } catch (error) {
      console.error("Lỗi khi lấy danh sách học sinh:", error);
      setStudents([]);
    }
  };

  const filteredStudents =
    selectedClass === "all"
      ? students
      : students.filter((student) => student.classId?.name === selectedClass); 
  console.log('class ->', classes)

  return (
    <div className="container mt-4">
      <h2 className="text-primary mb-4 d-inline-block p-2 title-border-radius">
        Học Sinh
      </h2>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <select
          className="form-select w-auto"
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
        >
          <option value="all">Tất cả các lớp</option>
          {(classes || []).map((item) => ( 
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>

        {selectedClass !== "all" && (
          <div className="d-flex justify-content-end mb-4">
            <Link to="/addstudent" className="btn btn-primary">
              <i className="fas fa-plus me-2"></i>Thêm học sinh
            </Link>
          </div>
        )}
      </div>

      <div className="table-responsive shadow rounded">
        <table className="table table-hover border-0 mb-0">
          <thead>
            <tr style={{ backgroundColor: "#007bff", color: "#ffffee" }}>
              <th className="py-3 px-4 border-0">#</th>
              <th className="py-3 px-4 border-0">Họ và Tên</th>
              <th className="py-3 px-4 border-0">Năm sinh</th>
              <th className="py-3 px-4 border-0">Lớp</th>
              <th className="py-3 px-4 border-0">Bố</th>
              <th className="py-3 px-4 border-0">Mẹ</th>
              <th className="py-3 px-4 border-0">SĐT Bố</th>
              <th className="py-3 px-4 border-0">SĐT Mẹ</th>
              <th className="py-3 px-4 border-0">Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            {(filteredStudents || []).map((student) => ( // Added null check with fallback empty array
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.dob}</td>
                <td>{student.classId?.name}</td> {/* Added optional chaining */}
                <td>{student.fatherName}</td>
                <td>{student.motherName}</td>
                <td>{student.fatherPhone}</td>
                <td>{student.motherPhone}</td>
                <td className="py-3 px-4">
                  <button className="btn btn-outline-info btn-sm me-2">
                    <i className="fas fa-edit me-1"></i>Sửa
                  </button>
                  <button className="btn btn-outline-warning btn-sm">
                    <i className="fas fa-trash me-1"></i>Xóa
                  </button>
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
