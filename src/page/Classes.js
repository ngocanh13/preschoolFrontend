import React, { useState } from "react";
import { Link } from "react-router-dom";

function Classes() {
  const [students] = useState([
    {
      id: 1,
      name: "Nguyễn Văn A",
      year: "2020",
      class: "Lớp Mầm",
      parentf: "Nguyễn Văn X",
      parentm: "Nguyễn Văn X",
      phonef: "0123456789",
      phonem: "0123456789",
    },
    {
      id: 2,
      name: "Trần Thị B",
      year: "2021",
      class: "Lớp Chồi",
      parentf: "Trần Văn Y",
      parentm: "Nguyễn Văn X",
      phonef: "0987654321",
      phonem: "0123456789",

    },
    {
      id: 3,
      name: "Lê Văn C",
      year: "2022",
      class: "Lớp Lá",
      parentf: "Lê Văn Z",
      parentm: "Nguyễn Văn X",
      phonef: "0369852147",
      phonem: "0123456789",

    },
  ]);

  const [selectedClass, setSelectedClass] = useState("all");

  const filteredStudents =
    selectedClass === "all"
      ? students
      : students.filter((student) => student.class === selectedClass);

  return (
    <div className="container mt-4">
      <h2 className="text-primary mb-4 d-inline-block p-2 title-border-radius">
        học sinh
      </h2>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <select
          className="form-select w-auto"
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
        >
          <option value="all">Tất cả các lớp</option>
          <option value="Lớp Mầm">Lớp Mầm</option>
          <option value="Lớp Chồi">Lớp Chồi</option>
          <option value="Lớp Lá">Lớp Lá</option>
        </select>

        {selectedClass !== "all" && (
          <div className="d-flex justify-content-end mb-4">
            <Link
              to="/addstudent"
              className="btn btn-primary"
              style={{
                textDecoration: "none",
                
              }}
            >
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
              <th className="py-3 px-4 border-0">năm sinh</th>
              <th className="py-3 px-4 border-0">Lớp</th>
              <th className="py-3 px-4 border-0">bố</th>
              <th className="py-3 px-4 border-0">mẹ</th>
              <th className="py-3 px-4 border-0">Số Điện Thoại bố </th>
              <th className="py-3 px-4 border-0">Số Điện Thoại mẹ </th>
              <th className="py-3 px-4 border-0">Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id}>
                <td className="py-3 px-4">{student.id}</td>
                <td className="py-3 px-4">{student.name}</td>
                <td className="py-3 px-4">{student.year}</td>
                <td className="py-3 px-4">{student.class}</td>
                <td className="py-3 px-4">{student.parentf}</td>
                <td className="py-3 px-4">{student.parentm}</td>

                <td className="py-3 px-4">{student.phonef}</td>
                <td className="py-3 px-4">{student.phonem}</td>

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
