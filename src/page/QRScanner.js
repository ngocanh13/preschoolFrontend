import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const QRScanner = () => {
    const [selectedClass, setSelectedClass] = useState('all');
    const [students] = useState([
        {
            id: 1,
            name: "Nguyễn Văn A",
            class: "Lớp Mầm", 
            status: 'present',
            time: null
        },
        {
            id: 2,
            name: "Trần Thị B",
            class: "Lớp Chồi",
            status: 'absent', 
            time: new Date().toLocaleTimeString()
        },
        {
            id: 3,
            name: "Lê Văn C", 
            class: "Lớp Lá",
            status: 'excused',
            time: new Date().toLocaleTimeString()
        },
        {
          id: 4,
          name: "Nguyễn Văn A",
          class: "Lớp Mầm", 
          status: null,
          time: null
      },
    ]);

    const handleAttendance = (studentId, status) => {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        
        students.forEach(student => {
            if (student.id === studentId) {
                student.status = status;
                student.time = timeString;
            }
        });
    };

    const getStatusBadge = (status) => {
        switch (status) {
            case 'present':
                return <span className="badge bg-info rounded-pill">Có mặt</span>;
            case 'absent': 
                return <span className="badge bg-danger rounded-pill">Vắng mặt</span>;
            case 'excused':
                return <span className="badge bg-warning rounded-pill">Nghỉ có phép</span>;
            default:
                return <span className="badge bg-secondary rounded-pill">Chưa điểm danh</span>;
        }
    };

    const filteredStudents = selectedClass === 'all'
        ? students
        : students.filter(student => student.class === selectedClass);

    return (
        <div className="container mt-4">
            <h2 className="text-primary mb-4 d-inline-block p-2 title-border-radius">
                Điểm Danh
            </h2>

            <div className="d-flex justify-content-start mb-4">
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
            </div>

            <div className="table-responsive shadow rounded">
                <table className="table table-hover border-0 mb-0">
                    <thead>
                        <tr style={{backgroundColor: "#007bff", color: "#ffffee"}}>
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
                                        className="btn btn-outline-info btn-sm me-2"
                                        onClick={() => handleAttendance(student.id, 'present')}
                                        disabled={student.status === 'present'}
                                    >
                                        <i className="fas fa-check me-1"></i>
                                        Có mặt
                                    </button>
                                    <button
                                        className="btn btn-outline-danger btn-sm me-2"
                                        onClick={() => handleAttendance(student.id, 'absent')}
                                        disabled={student.status === 'absent'}
                                    >
                                        <i className="fas fa-times me-1"></i>
                                        Vắng mặt
                                    </button>
                                    <button
                                        className="btn btn-outline-warning btn-sm"
                                        onClick={() => handleAttendance(student.id, 'excused')}
                                        disabled={student.status === 'excused'}
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
