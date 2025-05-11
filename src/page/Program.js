import img from "../assets/img/program-1.jpg";
import img2 from "../assets/img/program-2.jpg";
import img3 from "../assets/img/program-3.jpg";
import img1 from "../assets/img/program-teacher.jpg";
import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import httpClient from '../auth/httpClient';

export default function Programs() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await httpClient.get("/programs");
        if (response.status === 200) {
          setPrograms(response.data);
        } else {
          alert("Failed to fetch programs. Error code: " + response.status);
        }
      } catch (error) {
        alert("An error occurred while fetching programs: " + error.message);
      }
    };

    fetchPrograms();
  }, []);

  return (
    <>
      <div className="container-fluid program py-5">
        <div className="container py-5">
          <div
            className="mx-auto text-center wow fadeIn"
            data-wow-delay="0.1s"
            style={{
              maxWidth: 700,
              visibility: "visible",
              animationDelay: "0.1s",
              animationName: "fadeIn",
            }}
          >
            <h4 className="text-primary mb-4 d-inline-block p-2 title-border-radius">
              Ngoại Khóa
            </h4>
          </div>
          <div className="d-flex justify-content-end mb-5">
            <Link
              to="/addprogram"
              className="btn btn-primary"
              style={{
                textDecoration: "none",
              }}
            >
              <i className="fas fa-plus me-2"></i>Thêm 
            </Link>
          </div>
          <div className="row g-5 justify-content-center">
            {(programs || []).map((item, index) => (
              <div
                key={index}
                className="col-md-6 col-lg-6 col-xl-4 wow fadeIn"
                data-wow-delay="0.1s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.1s",
                  animationName: "fadeIn",
                }}
              >
                <div className="program-item rounded">
                  <div className="program-img position-relative">
                    <div className="overflow-hidden img-border-radius">
                      {/* Sửa lại src để hiển thị ảnh base64 đúng */}
                      <img 
                        src={`data:image/jpeg;base64,${item.imageBase64}`} 
                        className="img-fluid w-100" 
                        alt="Image" 
                      />
                    </div>
                    <div className="px-4 py-2 bg-primary text-white program-rate">
                      {item.tuition} VNĐ
                    </div>
                  </div>
                  <div className="program-text bg-white px-4 pb-3">
                    <div className="program-text-inner">
                      <a href="#" className="h4">
                        {item.programName}
                      </a>
                      <p className="mt-3 mb-0">
                        {item.programDescription}
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between px-4 py-2 bg-primary rounded-bottom">
                    <small className="text-white">
                      <i className="fas fa-wheelchair me-1" /> {item.maxStudents} Sits
                    </small>
                    <small className="text-white">
                      <i className="fas fa-book me-1" /> {item.totalSessions} Lessons
                    </small>
                    <small className="text-white">
                      <i className="fas fa-clock me-1" /> {item.totalHours} Hours
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="d-inline-block text-center wow fadeIn"
            data-wow-delay="0.1s"
            style={{
              visibility: "hidden",
              animationDelay: "0.1s",
              animationName: "none",
            }}
          >
            <a
              href="#"
              className="btn btn-primary px-5 py-3 text-white btn-border-radius"
            >
              View All Programs
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
