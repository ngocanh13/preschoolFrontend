import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Classes() {
    const [students] = useState([
        {
            id: 1,
            name: "Nguyễn Văn A",
            age: 5,
            class: "Lớp Mầm",
            parentName: "Nguyễn Văn X",
            phone: "0123456789"
        },
        {
            id: 2, 
            name: "Trần Thị B",
            age: 4,
            class: "Lớp Chồi", 
            parentName: "Trần Văn Y",
            phone: "0987654321"
        },
        {
            id: 3,
            name: "Lê Văn C", 
            age: 6,
            class: "Lớp Lá",
            parentName: "Lê Văn Z",
            phone: "0369852147"
        }
    ]);

    const [selectedClass, setSelectedClass] = useState('all');

    const filteredStudents = selectedClass === 'all' 
        ? students
        : students.filter(student => student.class === selectedClass);

    return (
        <div className="container mt-4">
            <h2 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
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

                {selectedClass !== 'all' && (
                    <div className="d-flex justify-content-end mb-4">
                                        <Link
                                            to="/addmenu"
                                            className="btn btn-primary"
                                            style={{
                                                textDecoration: "none"
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
                        <tr style={{backgroundColor: "#FFE4E1"}}>
                            <th className="py-3 px-4 border-0">#</th>
                            <th className="py-3 px-4 border-0">Họ và Tên</th>
                            <th className="py-3 px-4 border-0">Tuổi</th>
                            <th className="py-3 px-4 border-0">Lớp</th>
                            <th className="py-3 px-4 border-0">Phụ Huynh</th>
                            <th className="py-3 px-4 border-0">Số Điện Thoại</th>
                            <th className="py-3 px-4 border-0">Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.map((student) => (
                            <tr key={student.id}>
                                <td className="py-3 px-4">{student.id}</td>
                                <td className="py-3 px-4">{student.name}</td>
                                <td className="py-3 px-4">{student.age}</td>
                                <td className="py-3 px-4">{student.class}</td>
                                <td className="py-3 px-4">{student.parentName}</td>
                                <td className="py-3 px-4">{student.phone}</td>
                                <td className="py-3 px-4">
                                    <button className="btn btn-outline-primary btn-sm me-2">
                                        <i className="fas fa-edit me-1"></i>Sửa
                                    </button>
                                    <button className="btn btn-outline-danger btn-sm">
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
