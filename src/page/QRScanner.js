import React, { useEffect, useState } from "react";
import httpClient from "../auth/httpClient";
import { toast } from "react-toastify";

const QRScanner = () => {
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedClass, setSelectedClass] = useState("all");
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [filteredStudents, setFilteredStudents] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await httpClient.get("/classes");
      if (Array.isArray(response.data)) {
        setClasses(response.data);
        const allStudents = response.data.flatMap((cls) =>
          (cls.students || []).map((student) => ({
            ...student,
            classId:
              typeof student.classId === "object"
                ? student.classId
                : { id: cls.id, name: cls.name },
          }))
        );
        setStudents(allStudents);
        filterStudents(allStudents, "all", selectedDate);
      } else {
        console.error("Invalid data format received:", response.data);
      }
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  };

  const filterStudents = (allStudents, classId, date) => {
    let filtered = allStudents;

    if (classId !== "all") {
      const selectedClassId = parseInt(classId);
      filtered = filtered.filter((s) => {
        if (typeof s.classId === "object" && s.classId !== null) {
          return s.classId.id === selectedClassId;
        }
        return s.classId === selectedClassId;
      });
    }

    filtered = filtered.map((student) => {
      const attendanceToday = student.attendents?.find((a) => a.date === date);
      return {
        ...student,
        status: attendanceToday?.status || null,
        attendents: attendanceToday ? [attendanceToday] : [],
      };
    });

    setFilteredStudents(filtered);
  };

  const handleClassChange = (classId) => {
    setSelectedClass(classId);
    filterStudents(students, classId, selectedDate);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    filterStudents(students, selectedClass, date);
  };

  const handleAttendance = (studentId, newStatus) => {
    setFilteredStudents(
      filteredStudents.map((student) => {
        if (student.id === studentId) {
          const currentTime = new Date().toTimeString().split(" ")[0];
          return {
            ...student,
            status: newStatus,
            attendents: [
              {
                id: student.attendents?.[0]?.id,
                student: { id: student.id },
                status: newStatus,
                date: selectedDate,
                time: currentTime,
              },
            ],
          };
        }
        return student;
      })
    );
  };

  const saveAttendance = async () => {
    try {
      const attendanceRecords = filteredStudents
        .filter((student) => student.attendents?.length > 0)
        .map((student) => student.attendents[0]);

      for (let record of attendanceRecords) {
        await httpClient.post("/attendances/add", record);
      }

      toast.success("Điểm danh thành công!");
    } catch (error) {
      console.error("Error saving attendance:", error);
      toast.error("Lỗi khi lưu điểm danh");
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "PRESENT":
        return <span className="badge bg-info rounded-pill">Có mặt</span>;
      case "ABSENT":
        return <span className="badge bg-danger rounded-pill">Vắng mặt</span>;
      case "EXCUSED":
        return <span className="badge bg-warning rounded-pill">Nghỉ phép</span>;
      default:
        return (
          <span className="badge bg-secondary rounded-pill">
            Chưa điểm danh
          </span>
        );
    }
  };

  // ✅ Tính tổng học sinh có mặt, vắng mặt và nghỉ phép
  const totalPresent = filteredStudents.filter(
    (student) => student.status === "PRESENT"
  ).length;
  const totalAbsent = filteredStudents.filter(
    (student) => student.status === "ABSENT"
  ).length;
  const totalExcused = filteredStudents.filter(
    (student) => student.status === "EXCUSED"
  ).length;

  return (
    <div className="container mt-4">
      <h2 className="text-primary mb-4 d-inline-block p-2 title-border-radius">
        Điểm Danh
      </h2>

      <div className="d-flex justify-content-start mb-4">
        <select
          className="form-select w-auto me-2"
          value={selectedClass}
          onChange={(e) => handleClassChange(e.target.value)}
        >
          <option value="all">Tất cả các lớp</option>
          {classes.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>

        <input
          type="date"
          className="form-control w-auto"
          value={selectedDate}
          onChange={(e) => handleDateChange(e.target.value)}
        />
      </div>
      <div className="d-flex flex-wrap gap-3 mb-4" style={{ maxWidth: "400px" }}>
  <div className="p-3 bg-light border rounded shadow-sm text-center" style={{ width: "120px" }}>
    <h3>{totalPresent}</h3>
    <h6 className="text-success">Có mặt</h6>
  </div>
  <div className="p-3 bg-light border rounded shadow-sm text-center" style={{ width: "120px" }}>
    <h3>{totalAbsent}</h3>
    <h6 className="text-danger">Vắng mặt</h6>
  </div>
  <div className="p-3 bg-light border rounded shadow-sm text-center" style={{ width: "120px" }}>
    <h3>{totalExcused}</h3>
    <h6 className="text-warning">Nghỉ phép</h6>
  </div>
</div>

      <div className="table-responsive shadow rounded">
        <table className="table table-hover border-0 mb-0">
          <thead>
            <tr style={{ backgroundColor: "#007bff", color: "#ffffee" }}>
              <th className="py-3 px-4 border-0 text-center">#</th>
              <th className="py-3 px-4 border-0">Họ và tên</th>
              <th className="py-3 px-4 border-0">Lớp</th>
              <th className="py-3 px-4 border-0 text-center">Trạng thái</th>
              <th className="py-3 px-4 border-0 text-center">Thời gian</th>
              {/* <th className="py-3 px-4 border-0 text-center">Thao tác</th> */}
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id}>
                <td className="py-3 px-4 text-center">{student.id}</td>
                <td className="py-3 px-4">{student.name}</td>
                <td className="py-3 px-4">{student.classId?.name || "-"}</td>
                <td className="py-3 px-4 text-center">
                  {getStatusBadge(student.status)}
                </td>
                <td className="py-3 px-4 text-center">
                  {student.attendents?.[0]?.time || "-"}
                </td>
                {/* <td className="py-3 px-4 text-center"> */}
                {/* Đã comment phần thao tác */}
                {/* <button
                    className={`btn ${student.status === "PRESENT" ? "btn-info" : "btn-outline-info"} btn-sm me-2`}
                    onClick={() => handleAttendance(student.id, "PRESENT")}
                  >
                    <i className="fas fa-check me-1"></i>Có mặt
                  </button>
                  <button
                    className={`btn ${student.status === "ABSENT" ? "btn-danger" : "btn-outline-danger"} btn-sm me-2`}
                    onClick={() => handleAttendance(student.id, "ABSENT")}
                  >
                    <i className="fas fa-times me-1"></i>Vắng mặt
                  </button>
                  <button
                    className={`btn ${student.status === "EXCUSED" ? "btn-warning" : "btn-outline-warning"} btn-sm`}
                    onClick={() => handleAttendance(student.id, "EXCUSED")}
                  >
                    <i className="fas fa-exclamation me-1"></i>Nghỉ phép
                  </button> */}
                {/* </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <div className="text-end">
        <button className="btn btn-primary btn-sm px-3 py-2 my-3" onClick={saveAttendance}>
          <i className="fas fa-save me-2"></i>Lưu
        </button>
      </div> */}
    </div>
  );
};

export default QRScanner;
