import React from 'react';
import { Link } from 'react-router-dom';

const Learn = () => {
    return (
        <div className="container mt-4">
            <h2 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
                Chương trình học
            </h2>

            <div className="row g-4">
                <div className="col-lg-4 col-md-6">
                    <div className="card h-100 shadow">
                        <div className="card-header bg-primary text-white">
                            <h5 className="mb-0">Lớp Mầm (3-4 tuổi)</h5>
                        </div>
                        <div className="card-body">
                            <ul className="list-unstyled">
                                <li className="mb-2"><i className="fas fa-check text-primary me-2"></i>Phát triển vận động</li>
                                <li className="mb-2"><i className="fas fa-check text-primary me-2"></i>Làm quen với chữ cái</li>
                                <li className="mb-2"><i className="fas fa-check text-primary me-2"></i>Học đếm số từ 1-10</li>
                                <li className="mb-2"><i className="fas fa-check text-primary me-2"></i>Các hoạt động nghệ thuật cơ bản</li>
                                <li className="mb-2"><i className="fas fa-check text-primary me-2"></i>Kỹ năng xã hội</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="card h-100 shadow">
                        <div className="card-header bg-success text-white">
                            <h5 className="mb-0">Lớp Chồi (4-5 tuổi)</h5>
                        </div>
                        <div className="card-body">
                            <ul className="list-unstyled">
                                <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Phát triển ngôn ngữ</li>
                                <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Toán học cơ bản</li>
                                <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Khám phá khoa học</li>
                                <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Âm nhạc và vận động</li>
                                <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Kỹ năng sống</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="card h-100 shadow">
                        <div className="card-header bg-warning text-dark">
                            <h5 className="mb-0">Lớp Lá (5-6 tuổi)</h5>
                        </div>
                        <div className="card-body">
                            <ul className="list-unstyled">
                                <li className="mb-2"><i className="fas fa-check text-warning me-2"></i>Chuẩn bị vào lớp 1</li>
                                <li className="mb-2"><i className="fas fa-check text-warning me-2"></i>Tập đọc và viết</li>
                                <li className="mb-2"><i className="fas fa-check text-warning me-2"></i>Toán học nâng cao</li>
                                <li className="mb-2"><i className="fas fa-check text-warning me-2"></i>Tiếng Anh cơ bản</li>
                                <li className="mb-2"><i className="fas fa-check text-warning me-2"></i>Phát triển tư duy logic</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <h4 className="text-primary mb-4">Các hoạt động bổ trợ</h4>
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="card shadow">
                            <div className="card-body">
                                <h5 className="card-title text-primary">Hoạt động ngoại khóa</h5>
                                <ul className="list-unstyled">
                                    <li className="mb-2"><i className="fas fa-star text-warning me-2"></i>Tham quan học tập</li>
                                    <li className="mb-2"><i className="fas fa-star text-warning me-2"></i>Hoạt động thể thao</li>
                                    <li className="mb-2"><i className="fas fa-star text-warning me-2"></i>Các lễ hội theo mùa</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card shadow">
                            <div className="card-body">
                                <h5 className="card-title text-primary">Kỹ năng đặc biệt</h5>
                                <ul className="list-unstyled">
                                    <li className="mb-2"><i className="fas fa-star text-warning me-2"></i>Kỹ năng an toàn</li>
                                    <li className="mb-2"><i className="fas fa-star text-warning me-2"></i>Giáo dục giới tính</li>
                                    <li className="mb-2"><i className="fas fa-star text-warning me-2"></i>Kỹ năng giao tiếp</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Learn;
