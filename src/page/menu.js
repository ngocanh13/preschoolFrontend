import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Menu = () => {
    
    return (
        <div className="container mt-4">
            <h2 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
                Menu của trẻ
            </h2>

                <div className="d-flex justify-content-end mb-4">
                    <Link
                        to="/addmenu"
                        className="btn btn-primary"
                        style={{
                            textDecoration: "none"
                        }}
                        >
                        <i className="fas fa-plus me-2"></i>Thêm thực đơn
                    </Link>
                </div>
            

            <div className="table-responsive shadow rounded">
                <table className="table table-hover border-0 mb-0">
                    <thead>
                        <tr style={{backgroundColor: "#FFE4E1"}}>
                            <th className="py-3 px-4 border-0 rounded-start">Ngày phục vụ</th>
                            <th className="py-3 px-4 border-0">Thời gian</th>
                            <th className="py-3 px-4 border-0">Tên món</th>
                            <th className="py-3 px-4 border-0">Dinh dưỡng</th>
                            <th className="py-3 px-4 border-0 rounded-end">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan="2" className="align-middle text-center py-3 px-4">
                                <span className="fw-bold">Thứ 2</span>
                            </td>
                            <td className="py-3 px-4">
                                <span className="badge bg-primary">Buổi trưa</span>
                            </td>
                            <td className="py-3 px-4">
                                <h6 className="mb-0">Lobster Bisque, Crab Cake</h6>
                            </td>
                            <td className="py-3 px-4">
                                <div className="d-flex gap-3">
                                    <div className="nutrition-item">
                                        <small className="text-muted d-block">Calories</small>
                                        <span className="fw-bold">250</span>
                                    </div>
                                    <div className="nutrition-item">
                                        <small className="text-muted d-block">Protein</small>
                                        <span className="fw-bold">15g</span>
                                    </div>
                                    <div className="nutrition-item">
                                        <small className="text-muted d-block">Carbs</small>
                                        <span className="fw-bold">20g</span>
                                    </div>
                                    <div className="nutrition-item">
                                        <small className="text-muted d-block">Fat</small>
                                        <span className="fw-bold">12g</span>
                                    </div>
                                </div>
                            </td>
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
                            <td className="py-3 px-4">
                                <span className="badge bg-info">Buổi chiều</span>
                            </td>
                            <td className="py-3 px-4">
                                <h6 className="mb-0">Afternoon Tea Set</h6>
                            </td>
                            <td className="py-3 px-4">
                                <div className="d-flex gap-3">
                                    <div className="nutrition-item">
                                        <small className="text-muted d-block">Calories</small>
                                        <span className="fw-bold">450</span>
                                    </div>
                                    <div className="nutrition-item">
                                        <small className="text-muted d-block">Protein</small>
                                        <span className="fw-bold">10g</span>
                                    </div>
                                    <div className="nutrition-item">
                                        <small className="text-muted d-block">Carbs</small>
                                        <span className="fw-bold">65g</span>
                                    </div>
                                    <div className="nutrition-item">
                                        <small className="text-muted d-block">Fat</small>
                                        <span className="fw-bold">18g</span>
                                    </div>
                                </div>
                            </td>
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
                            <td rowSpan="2" className="align-middle text-center py-3 px-4">
                                <span className="fw-bold">Thứ 3</span>
                            </td>
                            <td className="py-3 px-4">
                                <span className="badge bg-primary">Buổi trưa</span>
                            </td>
                            <td className="py-3 px-4">
                                <h6 className="mb-0">Lobster Bisque, Crab Cake</h6>
                            </td>
                            <td className="py-3 px-4">
                                <div className="d-flex gap-3">
                                    <div className="nutrition-item">
                                        <small className="text-muted d-block">Calories</small>
                                        <span className="fw-bold">250</span>
                                    </div>
                                    <div className="nutrition-item">
                                        <small className="text-muted d-block">Protein</small>
                                        <span className="fw-bold">15g</span>
                                    </div>
                                    <div className="nutrition-item">
                                        <small className="text-muted d-block">Carbs</small>
                                        <span className="fw-bold">20g</span>
                                    </div>
                                    <div className="nutrition-item">
                                        <small className="text-muted d-block">Fat</small>
                                        <span className="fw-bold">12g</span>
                                    </div>
                                </div>
                            </td>
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
                            <td className="py-3 px-4">
                                <span className="badge bg-info">Buổi chiều</span>
                            </td>
                            <td className="py-3 px-4">
                                <h6 className="mb-0">Afternoon Tea Set</h6>
                            </td>
                            <td className="py-3 px-4">
                                <div className="d-flex gap-3">
                                    <div className="nutrition-item">
                                        <small className="text-muted d-block">Calories</small>
                                        <span className="fw-bold">450</span>
                                    </div>
                                    <div className="nutrition-item">
                                        <small className="text-muted d-block">Protein</small>
                                        <span className="fw-bold">10g</span>
                                    </div>
                                    <div className="nutrition-item">
                                        <small className="text-muted d-block">Carbs</small>
                                        <span className="fw-bold">65g</span>
                                    </div>
                                    <div className="nutrition-item">
                                        <small className="text-muted d-block">Fat</small>
                                        <span className="fw-bold">18g</span>
                                    </div>
                                </div>
                            </td>
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
    )
}
export default Menu