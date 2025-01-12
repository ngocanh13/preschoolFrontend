import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
function Nav(){
    return(
                <div
        className="container-fluid border-bottom bg-light wow fadeIn"
        data-wow-delay="0.1s"
        style={{
            visibility: "visible",
            animationDelay: "0.1s",
            animationName: "fadeIn"
        }}
        >
        <div
            className="container topbar bg-primary d-none d-lg-block py-2"
            style={{ borderRadius: "0 40px" }}
        >
            <div className="d-flex justify-content-between">
            <div className="top-info ps-2">
                <small className="me-3">
                <i className="fas fa-map-marker-alt me-2 text-secondary" />{" "}
                <a href="#" className="text-white">
                    123 Street, New York
                </a>
                </small>
                <small className="me-3">
                <i className="fas fa-envelope me-2 text-secondary" />
                <a href="#" className="text-white">
                    Email@Example.com
                </a>
                </small>
            </div>
            <div className="top-link pe-2">
                <a href="" className="btn btn-light btn-sm-square rounded-circle">
                <i className="fab fa-facebook-f text-secondary" />
                </a>
                <a href="" className="btn btn-light btn-sm-square rounded-circle">
                <i className="fab fa-twitter text-secondary" />
                </a>
                <a href="" className="btn btn-light btn-sm-square rounded-circle">
                <i className="fab fa-instagram text-secondary" />
                </a>
                <a href="" className="btn btn-light btn-sm-square rounded-circle me-0">
                <i className="fab fa-linkedin-in text-secondary" />
                </a>
            </div>
            </div>
        </div>
        <div className="container px-0">
            <nav className="navbar navbar-light navbar-expand-xl py-3">
            <a href="index.html" className="navbar-brand">
                <h1 className="text-primary display-6">
                Baby<span className="text-secondary">Care</span>
                </h1>
            </a>
            <button
                className="navbar-toggler py-2 px-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
            >
                <span className="fa fa-bars text-primary" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse"
            >
                <div className="navbar-nav mx-auto">
                <Link href="index.html" className="nav-item nav-link active" to={"/"}> 
                    Home
                </Link>
                <Link href="about.html" className="nav-item nav-link " to={"/about"}>
                    About
                </Link>
                <Link href="service.html" className="nav-item nav-link" to={"/services"}>
                    Services
                </Link>
                <Link href="program.html" className="nav-item nav-link" to={"/programs"}>
                    Programs
                </Link>
                <Link href="event.html" className="nav-item nav-link" to={"/event"}>
                    Events
                </Link>
                <div className="nav-item dropdown">
                    <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    >
                    Pages
                    </a>
                    <div className="dropdown-menu m-0 bg-secondary rounded-0">
                    <Link href="blog.html" className="dropdown-item " to={"/blog"}>
                        Our Blog
                    </Link>
                    <Link href="team.html" className="dropdown-item" to={"/team"}>
                        Our Team
                    </Link>
                    <Link href="testimonial.html" className="dropdown-item" to={"/testimonial"}>
                        Testimonial
                    </Link>
                    <a href="404.html" className="dropdown-item">
                        404 Page
                    </a>
                    </div>
                </div>
                <Link href="contact.html" className="nav-item nav-link" to={"/contact"}>
                    Contact
                </Link>
                <Link href="contact.html" className="nav-item nav-link" to={"/login"}>
                    Log in
                </Link>
                </div>
                <div className="d-flex me-4">
                <div
                    id="phone-tada"
                    className="d-flex align-items-center justify-content-center"
                >
                    <a
                    href=""
                    className="position-relative wow tada"
                    data-wow-delay=".9s"
                    style={{
                        visibility: "visible",
                        animationDelay: "0.9s",
                        animationName: "tada"
                    }}
                    >
                    <i className="fa fa-phone-alt text-primary fa-2x me-4" />
                    <div
                        className="position-absolute"
                        style={{ top: "-7px", left: 20 }}
                    >
                        <span>
                        <i className="fa fa-comment-dots text-secondary" />
                        </span>
                    </div>
                    </a>
                </div>
                <div className="d-flex flex-column pe-3 border-end border-primary">
                    <span className="text-primary">Have any questions?</span>
                    <a href="#">
                    <span className="text-secondary">Free: + 0123 456 7890</span>
                    </a>
                </div>
                </div>
                <button
                className="btn-search btn btn-primary btn-md-square rounded-circle"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
                >
                <i className="fas fa-search text-white" />
                </button>
            </div>
            </nav>
        </div>
        </div>
            
    )
}
export default Nav;