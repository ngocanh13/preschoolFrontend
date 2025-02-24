import React from 'react'
import { Link } from 'react-router-dom';

const AddMenu = () => {
    return (
        <div className="container mt-4">
            <h2 className="text-primary mb-4 d-inline-block p-2 title-border-radius">Thêm thực đơn</h2>
            <div className="d-flex justify-content-start mb-3">
                <Link to="/menu" className="btn" style={{backgroundColor: "#FF4880", color: "white"}}
                    onMouseEnter={(e) => e.target.style.backgroundColor = "var(--bs-secondary)"}
                    onMouseLeave={(e) => e.target.style.backgroundColor = "#FF4880"}>
                    <i className="fas fa-arrow-left me-1"></i>
                    Quay về
                </Link>
            </div>
            <form>
                <div className="mb-3">
                    <label className="form-label">Ngày bắt đầu thực đơn</label>
                    <input type="date" className="form-control" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Ngày kết thúc thực đơn</label>
                    <input type="date" className="form-control" />
                </div>
                
                <div className="mb-3">
                    <label className="form-label">Bữa Sáng</label>
                    <input type="text" className="form-control" placeholder="Nhập thực đơn bữa sáng" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Bữa Phụ Sáng</label>
                    <input type="text" className="form-control" placeholder="Nhập thực đơn bữa phụ sáng" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Bữa Trưa</label>
                    <input type="text" className="form-control" placeholder="Nhập thực đơn bữa trưa" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Bữa Chiều</label>
                    <input type="text" className="form-control" placeholder="Nhập thực đơn bữa chiều" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Bữa Phụ Chiều</label>
                    <input type="text" className="form-control" placeholder="Nhập thực đơn bữa phụ chiều" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Ảnh thực đơn</label>
                    <input type="file" className="form-control" accept="image/*" />
                </div>

                <button type="submit" className="btn" style={{backgroundColor: "#FF4880", color: "white"}} 
                    onMouseOver={(e) => e.target.style.backgroundColor = 'var(--bs-secondary)'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#FF4880'}>
                    Thêm thực đơn
                </button>
            </form>
        </div>
    )
}
export default AddMenu