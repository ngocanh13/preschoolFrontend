import React, { useState, useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";

const Nav = () => {
    const [selectedItem, setSelectedItem] = useState('');
    const [userRole, setUserRole] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const role = localStorage.getItem('userRole');
        setUserRole(role);
    }, []);

    const teacherAccessiblePages = [
        'programs',
        'menu', 
        'scanner',
        'classes',
        'notification',
        'event' 
    ];

    const isMenuItemVisible = (menuItem) => {
        return userRole === 'admin' || (userRole === 'teacher' && teacherAccessiblePages.includes(menuItem));
    };

    if (!userRole) {
        return null;
    }

    const handleLogout = () => {
        localStorage.removeItem('userRole');
        setUserRole('');
        navigate('/login');
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
                    <div className="d-flex flex-column" style={{width: "280px", minHeight: "100vh", backgroundColor: "#ffffff", borderRight: "1px solid #dee2e6"}}>
                        <a href="index.html" className="navbar-brand p-4 text-center border-bottom">
                            <h1 className="text-primary display-6 mb-0">
                                Baby<span className="text-secondary">Care</span>
                            </h1>
                        </a>
                        <div className="nav flex-column py-2">
                            {isMenuItemVisible('programs') && (
                                <Link 
                                    to="/" 
                                    className={`nav-link py-3 px-4 mb-1 rounded-3 mx-2 hover-primary ${selectedItem === 'programs' ? 'bg-primary text-white' : ''}`}
                                    onClick={() => setSelectedItem('programs')}
                                >
                                    <i className="fas fa-graduation-cap me-3"></i> Programs
                                </Link>
                            )}
                            
                            {isMenuItemVisible('menu') && (
                                <Link 
                                    to="/menu" 
                                    className={`nav-link py-3 px-4 mb-1 rounded-3 mx-2 hover-primary ${selectedItem === 'menu' ? 'bg-primary text-white' : ''}`}
                                    onClick={() => setSelectedItem('menu')}
                                >
                                    <i className="fas fa-utensils me-3"></i> Menu
                                </Link>
                            )}

                            {isMenuItemVisible('scanner') && (
                                <Link 
                                    to="/QRScanner" 
                                    className={`nav-link py-3 px-4 mb-1 rounded-3 mx-2 hover-primary ${selectedItem === 'scanner' ? 'bg-primary text-white' : ''}`}
                                    onClick={() => setSelectedItem('scanner')}
                                >
                                    <i className="fas fa-qrcode me-3"></i> Scanner
                                </Link>
                            )}

                            {isMenuItemVisible('classes') && (
                                <Link 
                                    to="/classes" 
                                    className={`nav-link py-3 px-4 mb-1 rounded-3 mx-2 hover-primary ${selectedItem === 'classes' ? 'bg-primary text-white' : ''}`}
                                    onClick={() => setSelectedItem('classes')}
                                >
                                    <i className="fas fa-chalkboard me-3"></i> Classes
                                </Link>
                            )}

                            {isMenuItemVisible('event') && ( // Added link for event page
                                <Link 
                                    to="/event" 
                                    className={`nav-link py-3 px-4 mb-1 rounded-3 mx-2 hover-primary ${selectedItem === 'event' ? 'bg-primary text-white' : ''}`}
                                    onClick={() => setSelectedItem('event')}
                                >
                                    <i className="fas fa-calendar-alt me-3"></i> Events
                                </Link>
                            )}

                            {userRole === 'admin' && (
                                <Link 
                                    to="/classfund" 
                                    className={`nav-link py-3 px-4 mb-1 rounded-3 mx-2 hover-primary ${selectedItem === 'classfund' ? 'bg-primary text-white' : ''}`}
                                    onClick={() => setSelectedItem('classfund')}
                                >
                                    <i className="fas fa-dollar-sign me-3"></i> Class Fund
                                </Link>
                            )}

                            {userRole === 'admin' && (
                                <div className="nav-item dropdown">
                                    <a className={`nav-link py-3 px-4 mb-1 rounded-3 mx-2 hover-primary dropdown-toggle ${selectedItem === 'users' ? 'bg-primary text-white' : ''}`}
                                       href="#" 
                                       role="button" 
                                       data-bs-toggle="dropdown"
                                       onClick={() => setSelectedItem('users')}
                                    >
                                        <i className="fas fa-users me-3"></i> Users List
                                    </a>
                                    <ul className="dropdown-menu border-0 shadow-sm py-2" style={{left: "50%", transform: "translateX(-50%)"}}>
                                        <li>
                                            <Link to="/parents" className="dropdown-item py-2 px-4 hover-primary d-flex align-items-center">
                                                <i className="fas fa-user-friends me-2 text-primary"></i>
                                                <span className="fw-medium">Parents List</span>
                                            </Link>
                                        </li>
                                        <li><hr className="dropdown-divider mx-2"/></li>
                                        <li>
                                            <Link to="/teachers" className="dropdown-item py-2 px-4 hover-primary d-flex align-items-center">
                                                <i className="fas fa-chalkboard-teacher me-2 text-primary"></i>
                                                <span className="fw-medium">Teachers List</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}

                            
                        </div>

                        <div className="mt-auto p-4 border-top">
                            <button 
                                onClick={handleLogout}
                                className="btn btn-primary w-100 py-3 rounded-pill mb-3"
                            >
                                <i className="fas fa-sign-out-alt me-2"></i>
                                {userRole ? "Đăng xuất" : "Đăng nhập"}
                            </button>
                            
                            {userRole !== 'teacher' && (
                                <Link to="/register" className="btn btn-secondary w-100 py-3 rounded-pill">
                                    <i className="fas fa-user-plus me-2"></i>
                                    Sign up
                                </Link>
                            )}
                            
                            <div className="d-flex justify-content-center mt-4 gap-2">
                                {isMenuItemVisible('notification') && (
                                    <Link to="/notification" className="btn btn-light btn-lg rounded-circle position-relative">
                                        <i className="fas fa-bell text-primary"></i>
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            3
                                        </span>
                                    </Link>
                                )}
                                <button
                                    className="btn btn-light btn-lg rounded-circle"
                                    data-bs-toggle="modal"
                                    data-bs-target="#searchModal"
                                >
                                    <i className="fas fa-search text-primary" />
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Nav;
