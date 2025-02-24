import React from 'react';
import { Link } from 'react-router-dom';

const Notification = () => {
    
    return (
        <div className="container mt-4">
            <h2 className="text-primary mb-4 d-inline-block p-2 title-border-radius">
                Thông báo
            </h2>
            
            <div className="d-flex justify-content-end mb-4">
                <Link to="/addnotification" style={{ textDecoration: "none" }}>
                    <button 
                        className="btn btn-primary"
                        style={{
                            textDecoration: "none"
                        }}
                        >
                        <i className="fas fa-plus me-2"></i>
                        Thêm thông báo mới
                    </button>
                </Link>
            </div>

            <div className="table-responsive shadow rounded">
                <table className="table table-hover border-0 mb-0">
                    <thead>
                        <tr style={{backgroundColor: "#007bff", color: "#ffffee"}}>
                            <th className="py-3 px-4 border-0 rounded-start">Ngày</th>
                            <th className="py-3 px-4 border-0">Tiêu đề</th>
                            <th className="py-3 px-4 border-0">Nội dung</th>
                            <th className="py-3 px-4 border-0 rounded-end">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-3 px-4">20/11/2023</td>
                            <td className="py-3 px-4">
                                <h6 className="mb-0">Thông báo nghỉ lễ</h6>
                            </td>
                            <td className="py-3 px-4">Trường sẽ nghỉ lễ vào ngày 20/11/2023</td>
                            <td className="py-3 px-4">
                                <button className="btn btn-outline-info btn-sm me-2">
                                    <i className="fas fa-edit me-1"></i>Sửa
                                </button>
                                <button className="btn btn-outline-warning btn-sm">
                                    <i className="fas fa-trash me-1"></i>Xóa
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-3 px-4">15/11/2023</td>
                            <td className="py-3 px-4">
                                <h6 className="mb-0">Thông báo họp phụ huynh</h6>
                            </td>
                            <td className="py-3 px-4">Cuộc họp phụ huynh sẽ diễn ra vào ngày 15/11/2023</td>
                            <td className="py-3 px-4">
                                <button className="btn btn-outline-info btn-sm me-2">
                                    <i className="fas fa-edit me-1"></i>Sửa
                                </button>
                                <button className="btn btn-outline-warning btn-sm">
                                    <i className="fas fa-trash me-1"></i>Xóa
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Notification;
