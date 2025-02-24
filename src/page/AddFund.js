import React from 'react';
import { Link } from 'react-router-dom';

const AddFund = () => {
    return (
        <div className="container-xxl py-4">
            <div className="container">
                <div className="text-center mx-auto mb-4" style={{ maxWidth: "500px" }}>
                    <h1 className="text-primary mb-4 d-inline-block p-2 title-border-radius">Thêm học phí</h1>
                    <p className="text-muted">Nhập thông tin học phí cho sinh viên</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="card shadow rounded-3">
                            <div className="card-body p-4">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="studentName" className="form-label">
                                            <i className="fas fa-user me-2"></i>Tên học sinh
                                        </label>
                                        <input type="text" className="form-control" id="studentName" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="amount" className="form-label">
                                            <i className="fas fa-money-bill me-2"></i>Số tiền học phí
                                        </label>
                                        <div className="input-group">
                                            <input type="number" className="form-control" id="amount" />
                                            <span className="input-group-text">VNĐ</span>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="dueDate" className="form-label">
                                            <i className="fas fa-calendar-alt me-2"></i>Hạn thanh toán
                                        </label>
                                        <input type="date" className="form-control" id="dueDate" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="status" className="form-label">
                                            <i className="fas fa-check-circle me-2"></i>Trạng thái
                                        </label>
                                        <select className="form-select" id="status">
                                            <option value="pending">Chưa thanh toán</option>
                                            <option value="paid">Đã thanh toán</option>
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="paymentDate" className="form-label">
                                            <i className="fas fa-calendar-check me-2"></i>Ngày thanh toán
                                        </label>
                                        <input type="date" className="form-control" id="paymentDate" />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="paymentMethod" className="form-label">
                                            <i className="fas fa-credit-card me-2"></i>Phương thức thanh toán
                                        </label>
                                        <select className="form-select" id="paymentMethod">
                                            <option value="">Chọn phương thức thanh toán</option>
                                            <option value="cash">Tiền mặt</option>
                                            <option value="transfer">Chuyển khoản</option>
                                            <option value="card">Thẻ tín dụng</option>
                                        </select>
                                    </div>

                                    <div className="d-flex gap-2 justify-content-end">
                                        <Link to="/classfund" className="btn btn-secondary px-3">
                                            <i className="fas fa-times me-2"></i>Hủy
                                        </Link>
                                        <button type="submit" className="btn btn-primary px-3">
                                            <i className="fas fa-save me-2"></i>Lưu
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddFund;
