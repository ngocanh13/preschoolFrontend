import React from 'react';
import { Link } from 'react-router-dom';

const ClassFund = () => {
    return (
        <div className="container mt-4">
            <h2 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
                Danh sách học phí
            </h2>
            
            <div className="d-flex justify-content-end mb-4">
                <Link to="/addfund" style={{ textDecoration: "none" }}>
                    <button 
                        className="btn btn-primary"
                        style={{
                            textDecoration: "none"
                        }}
                        >
                        <i className="fas fa-plus me-2"></i>
                        Thêm học phí
                    </button>
                </Link>
            </div>
            
            <div className="table-responsive shadow rounded">
                <table className="table table-hover border-0 mb-0">
                    <thead>
                        <tr style={{backgroundColor: "#FFE4E1"}}>
                            <th className="py-3 px-4 border-0">Tên sinh viên</th>
                            <th className="py-3 px-4 border-0">Số tiền học phí</th>
                            <th className="py-3 px-4 border-0">Hạn thanh toán</th>
                            <th className="py-3 px-4 border-0">Trạng thái</th>
                            <th className="py-3 px-4 border-0">Ngày thanh toán</th>
                            <th className="py-3 px-4 border-0">Phương thức thanh toán</th>
                            <th className="py-3 px-4 border-0">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-3 px-4">Nguyễn Văn A</td>
                            <td className="py-3 px-4">2,000,000 VNĐ</td>
                            <td className="py-3 px-4">30/11/2023</td>
                            <td className="py-3 px-4">
                                <span className="badge bg-info">Đã thanh toán</span>
                            </td>
                            <td className="py-3 px-4">20/11/2023</td>
                            <td className="py-3 px-4">Chuyển khoản</td>
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
                            <td className="py-3 px-4">1,500,000 VNĐ</td>
                            <td className="py-3 px-4">30/11/2023</td>
                            <td className="py-3 px-4">
                                <span className="badge bg-primary ">Chưa thanh toán</span>
                            </td>
                            <td className="py-3 px-4">-</td>
                            <td className="py-3 px-4">-</td>
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

export default ClassFund;
