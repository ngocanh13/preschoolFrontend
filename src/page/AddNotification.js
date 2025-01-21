import React from 'react'
import { Link } from 'react-router-dom'

const AddNotification = () => {
    return (
        <div className="container mt-4">
            <h2 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">Thêm Thông Báo</h2>
            <div className="d-flex justify-content-start mb-3">
                            <Link to="/notification" className="btn" style={{backgroundColor: "#FF4880", color: "white"}}
                                onMouseEnter={(e) => e.target.style.backgroundColor = "var(--bs-secondary)"}
                                onMouseLeave={(e) => e.target.style.backgroundColor = "#FF4880"}>
                                <i className="fas fa-arrow-left me-1"></i>
                                Quay về
                            </Link>
            </div>
            

            <form>
                <div className="mb-3">
                    <label className="form-label">Ngày thông báo</label>
                    <input type="date" className="form-control"/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Tiêu đề</label>
                    <input type="text" className="form-control" placeholder="Nhập tiêu đề thông báo"/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Nội dung</label>
                    <textarea className="form-control" rows="4" placeholder="Nhập nội dung thông báo"></textarea>
                </div>

                <button type="submit" className="btn"  style={{backgroundColor: "#FF4880", color: "white"}} 
                    onMouseOver={(e) => e.target.style.backgroundColor = 'var(--bs-secondary)'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#FF4880'}>
                    Thêm thông báo
                </button>
            </form>
        </div>
    )
}

export default AddNotification
