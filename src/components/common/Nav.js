import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
    const [selectedItem, setSelectedItem] = useState('');
    const [userRole, setUserRole] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const role = localStorage.getItem('userRole');
        setUserRole(role);
    }, []);

    const isMenuItemVisible = (menuItem) => {
        return userRole === 'admin';
    };

    if (!userRole) {
        return null;
    }

    const handleLogout = () => {
        // ✅ Xóa token và role
        localStorage.removeItem('userRole');
        localStorage.removeItem('token');
        setUserRole('');
        navigate('/');
    };

    return (
        <div className="container-fluid border-bottom bg-white shadow-sm wow fadeIn" data-wow-delay="0.1s"
            style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeIn"
            }}>
            <div className="container px-0">
                <nav className="navbar navbar-light navbar-expand-xl py-0">
                    <div className="d-flex flex-column" style={{ width: "280px", minHeight: "100vh", backgroundColor: "#ffffff", borderRight: "1px solid #dee2e6", textAlign: "left" }}>
                        <a href="/" className="navbar-brand p-4 text-center border-bottom">
                            <h1 className="text-primary display-6 mb-0">
                                <span style={{ color: '#ff4880' }}>Baby</span>
                                <span className="text-secondary">Care</span>
                            </h1>
                        </a>
                        <div className="nav flex-column py-2">
                            {isMenuItemVisible('programs') && (
                                <Link
                                    to="/programs"
                                    className={`nav-link py-3 px-4 mb-1 rounded-3 mx-2 hover-primary ${selectedItem === 'programs' ? 'bg-success text-white' : ''}`}
                                    onClick={() => setSelectedItem('programs')}
                                    style={{ color: '#007bff' }}
                                >
                                    <i className="fas fa-graduation-cap me-3"></i> Ngoại khóa
                                </Link>
                            )}

                            {isMenuItemVisible('menu') && (
                                <Link
                                    to="/menu"
                                    className={`nav-link py-3 px-4 mb-1 rounded-3 mx-2 hover-primary ${selectedItem === 'menu' ? 'bg-success text-white' : ''}`}
                                    onClick={() => setSelectedItem('menu')}
                                    style={{ color: '#007bff' }}
                                >
                                    <i className="fas fa-utensils me-3"></i> Thực đơn
                                </Link>
                            )}

                            {isMenuItemVisible('scanner') && (
                                <Link
                                    to="/QRScanner"
                                    className={`nav-link py-3 px-4 mb-1 rounded-3 mx-2 hover-primary ${selectedItem === 'scanner' ? 'bg-success text-white' : ''}`}
                                    onClick={() => setSelectedItem('scanner')}
                                    style={{ color: '#007bff' }}
                                >
                                    <i className="fas fa-qrcode me-3"></i> Điểm danh
                                </Link>
                            )}

                            {isMenuItemVisible('classes') && (
                                <Link
                                    to="/classes"
                                    className={`nav-link py-3 px-4 mb-1 rounded-3 mx-2 hover-primary ${selectedItem === 'classes' ? 'bg-success text-white' : ''}`}
                                    onClick={() => setSelectedItem('classes')}
                                    style={{ color: '#007bff' }}
                                >
                                    <i className="fas fa-chalkboard me-3"></i> Học sinh
                                </Link>
                            )}

                            {isMenuItemVisible('schedule') && (
                                <Link
                                    to="/schedule"
                                    className={`nav-link py-3 px-4 mb-1 rounded-3 mx-2 hover-primary ${selectedItem === 'schedule' ? 'bg-success text-white' : ''}`}
                                    onClick={() => setSelectedItem('schedule')}
                                    style={{ color: '#007bff' }}
                                >
                                    <i className="fas fa-calendar-alt me-3"></i> Thời khóa biểu
                                </Link>
                            )}

                            {userRole === 'admin' && (
                                <Link
                                    to="/classfund"
                                    className={`nav-link py-3 px-4 mb-1 rounded-3 mx-2 hover-primary ${selectedItem === 'classfund' ? 'bg-success text-white' : ''}`}
                                    onClick={() => setSelectedItem('classfund')}
                                    style={{ color: '#007bff' }}
                                >
                                    <i className="fas fa-dollar-sign me-3"></i> Học phí
                                </Link>
                            )}
                        </div>

                        <div className="mt-auto p-4 border-top">
                            <button
                                onClick={handleLogout}
                                className="btn btn-primary w-100 py-3 rounded-pill mb-3"
                            >
                                <i className="fas fa-sign-out-alt me-2"></i>
                                Đăng xuất
                            </button>

                            <Link to="/register" className="btn btn-primary w-100 py-3 rounded-pill mb-3">
                                <i className="fas fa-user-plus me-2"></i>
                                Đăng ký
                            </Link>

                            
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Nav;
