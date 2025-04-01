import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import httpClient from '../auth/httpClient';

 // Adjust the import path for httpClient

const QRScanner = () => {
  const [classes, setClasses] = useState('');
  const [selectedClass, setSelectedClass] = useState("all");
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Nguyễn Văn A",
      class: "Lớp Mầm",
      status: "present",
      time: null,
    },
    {
      id: 2,
      name: "Trần Thị B",
      class: "Lớp Chồi",
      status: "absent",
      time: new Date().toLocaleTimeString(),
    },
    {
      id: 3,
      name: "Lê Văn C",
      class: "Lớp Lá",
      status: "excused",
      time: new Date().toLocaleTimeString(),
    },
    {
      id: 4,
      name: "Nguyễn Văn A",
      class: "Lớp Mầm",
      status: null,
      time: null,
    },
  ]);
  
  useEffect(() => {
    (async () => {
      await fetchClasses();
    })();
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

  const handleAttendance = (studentId, newStatus) => {
    const now = new Date();
    const timeString = now.toLocaleTimeString();

    setStudents(
      students.map((student) => {
        if (student.id === studentId) {
          // Toggle status if clicking same button
          const status = student.status === newStatus ? null : newStatus;
          return {
            ...student,
            status: status,
            time: status ? timeString : null,
          };
        }
        return student;
      })
    );
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "present":
        return <span className="badge bg-info rounded-pill">Có mặt</span>;
      case "absent":
        return <span className="badge bg-danger rounded-pill">Vắng mặt</span>;
      case "excused":
        return (
          <span className="badge bg-warning rounded-pill">Nghỉ có phép</span>
        );
      default:
        return (
          <span className="badge bg-secondary rounded-pill">
            Chưa điểm danh
          </span>
        );
    }
  };

  const filteredStudents =
    selectedClass === "all"
      ? students
      : students.filter((student) => student.class === selectedClass);

  return (
    <div className="container mt-4">
      <h2 className="text-primary mb-4 d-inline-block p-2 title-border-radius">
        Điểm Danh
      </h2>

      <div className="d-flex justify-content-start mb-4">
        <select
          className="form-select w-auto me-2"
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
        <select
          className="form-select w-auto"
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
        >
          <option value="all">thứ 2</option>
          <option value="Lớp Mầm">thứ 3</option>
          <option value="Lớp Chồi">thứ 4</option>
          <option value="Lớp Lá">thứ 5</option>
          <option value="Lớp Lá">thứ 6</option>
        </select>
      </div>

      <div className="table-responsive shadow rounded">
        <table className="table table-hover border-0 mb-0">
          <thead>
            <tr style={{ backgroundColor: "#007bff", color: "#ffffee" }}>
              <th className="py-3 px-4 border-0 text-center">#</th>
              <th className="py-3 px-4 border-0">Họ và Tên</th>
              <th className="py-3 px-4 border-0">Lớp</th>
              <th className="py-3 px-4 border-0 text-center">Trạng thái</th>
              <th className="py-3 px-4 border-0 text-center">Thời gian</th>
              <th className="py-3 px-4 border-0 text-center">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id}>
                <td className="py-3 px-4 text-center">{student.id}</td>
                <td className="py-3 px-4">{student.name}</td>
                <td className="py-3 px-4">{student.class}</td>
                <td className="py-3 px-4 text-center">
                  {getStatusBadge(student.status)}
                </td>
                <td className="py-3 px-4 text-center">{student.time || "-"}</td>
                <td className="py-3 px-4 text-center">
                  <button
                    className={`btn ${
                      student.status === "present"
                        ? "btn-info"
                        : "btn-outline-info"
                    } btn-sm me-2`}
                    onClick={() => handleAttendance(student.id, "present")}
                  >
                    <i className="fas fa-check me-1"></i>
                    Có mặt
                  </button>
                  <button
                    className={`btn ${
                      student.status === "absent"
                        ? "btn-danger"
                        : "btn-outline-danger"
                    } btn-sm me-2`}
                    onClick={() => handleAttendance(student.id, "absent")}
                  >
                    <i className="fas fa-times me-1"></i>
                    Vắng mặt
                  </button>
                  <button
                    className={`btn ${
                      student.status === "excused"
                        ? "btn-warning"
                        : "btn-outline-warning"
                    } btn-sm`}
                    onClick={() => handleAttendance(student.id, "excused")}
                  >
                    <i className="fas fa-clock me-1"></i>
                    Nghỉ có phép
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QRScanner;
