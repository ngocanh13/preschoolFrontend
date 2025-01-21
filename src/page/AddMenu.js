import React from 'react'
import { Link } from 'react-router-dom';

const AddMenu = () => {
    return (
        <div className="container mt-4">
            <h2 class="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">Thêm thực đơn</h2>
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
                    <label className="form-label">Ngày phục vụ</label>
                    <select className="form-select">
                        <option value="">Chọn ngày</option>
                        <option value="2">Thứ 2</option>
                        <option value="3">Thứ 3</option>
                        <option value="4">Thứ 4</option>
                        <option value="5">Thứ 5</option>
                        <option value="6">Thứ 6</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Thời gian</label>
                    <select className="form-select">
                        <option value="">Chọn thời gian</option>
                        <option value="morning">Buổi sáng</option>
                        <option value="noon">Buổi trưa</option>
                        <option value="afternoon">Buổi chiều</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Tên món</label>
                    <input type="text" className="form-control" placeholder="Nhập tên món ăn"/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Dinh dưỡng</label>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <input type="number" className="form-control" placeholder="Calories"/>
                        </div>
                        <div className="col-md-6">
                            <input type="number" className="form-control" placeholder="Protein (g)"/>
                        </div>
                        <div className="col-md-6">
                            <input type="number" className="form-control" placeholder="Carbs (g)"/>
                        </div>
                        <div className="col-md-6">
                            <input type="number" className="form-control" placeholder="Fat (g)"/>
                        </div>
                    </div>
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