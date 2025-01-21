import React from 'react';
import { Link } from 'react-router-dom';

const Parents = () => {
    return (
        <div className="container mt-4">
            <h2 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
                phụ huynh
            </h2>
            
           

            <div className="table-responsive shadow rounded">
                <table className="table table-hover border-0 mb-0">
                    <thead>
                        <tr style={{backgroundColor: "#FFE4E1"}}>
                            <th className="py-3 px-4 border-0">Họ và tên</th>
                            <th className="py-3 px-4 border-0">Email</th>
                            <th className="py-3 px-4 border-0">Số điện thoại</th>
                            <th className="py-3 px-4 border-0">Học sinh</th>
                            <th className="py-3 px-4 border-0">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-3 px-4">Nguyễn Văn A</td>
                            <td className="py-3 px-4">nguyenvana@gmail.com</td>
                            <td className="py-3 px-4">0123456789</td>
                            <td className="py-3 px-4">Nguyễn Văn c</td>
                            <td className="py-3 px-4">
                                <button className="btn btn-outline-primary btn-sm me-2">
                                    <i className="fas fa-edit me-1"></i>Sửa
                                </button>
                                <button className="btn btn-outline-danger btn-sm">
                                    <i className="fas fa-trash me-1"></i>Xóa
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-3 px-4">Trần Thị B</td>
                            <td className="py-3 px-4">tranthib@gmail.com</td>
                            <td className="py-3 px-4">0987654321</td>
                            <td className="py-3 px-4">Trần Thị C</td>
                            <td className="py-3 px-4">
                                <button className="btn btn-outline-primary btn-sm me-2">
                                    <i className="fas fa-edit me-1"></i>Sửa
                                </button>
                                <button className="btn btn-outline-danger btn-sm">
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

export default Parents;
