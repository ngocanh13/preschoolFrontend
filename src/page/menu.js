import img from '../assets/img/menu1.png'
import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Menu = () => {
    const startDate = new Date('2023-01-01'); // Set the start date
    const endDate = new Date('2023-12-31'); // Set the end date

    return (
        <div className="container mt-4">
            <h2 className="text-primary mb-4 d-inline-block p-2 title-border-radius">
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
            <div className="mt-4">
                <h4 className="text-secondary">Ngày tháng</h4>
                <p>{`${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`}</p>
            </div>

            <div className="table-responsive shadow rounded">
                <table className="table table-bordered table-hover">
                    <thead className="table-primary">
                        <tr>
                            <th scope="col"> <i className="fas fa-utensils me-3"></i></th>
                            <th scope="col">Bữa Sáng </th>
                            <th scope="col">Bữa Phụ Sáng </th>
                            <th scope="col">Bữa Trưa</th>
                            <th scope="col">Bữa Chiều</th>
                            <th scope="col">Bữa Phụ Chiều</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Thứ 2</td>
                            <td>Cháo Thịt Bằm + Rau Củ<br />Sữa Tươi Không Đường (hoặc Sữa Hạt)</td>
                            <td>Bánh Bông Lan Hoặc Bánh Quy<br />Nước Cam Tươi</td>
                            <td>Cơm Trắng<br />Canh Rau Ngót Nấu Tôm<br />Thịt Gà Kho Nấm</td>
                            <td>Súp Bí Đỏ Thịt Bằm<br />Nước Ép Cà Rốt</td>
                            <td>Sữa Chua Hoặc Váng Sữa<br />Bánh Mì Bơ Đường</td>
                        </tr>
                        <tr>
                            <td>Thứ 3</td>
                            <td>Cháo Thịt Bằm + Rau Củ<br />Sữa Tươi Không Đường (hoặc Sữa Hạt)</td>
                            <td>Bánh Bông Lan Hoặc Bánh Quy<br />Nước Cam Tươi</td>
                            <td>Cơm Trắng<br />Canh Rau Ngót Nấu Tôm<br />Thịt Gà Kho Nấm</td>
                            <td>Súp Bí Đỏ Thịt Bằm<br />Nước Ép Cà Rốt</td>
                            <td>Sữa Chua Hoặc Váng Sữa<br />Bánh Mì Bơ Đường</td>
                        </tr>
                        <tr>
                            <td>Thứ 4</td>
                            <td>Cháo Thịt Bằm + Rau Củ<br />Sữa Tươi Không Đường (hoặc Sữa Hạt)</td>
                            <td>Bánh Bông Lan Hoặc Bánh Quy<br />Nước Cam Tươi</td>
                            <td>Cơm Trắng<br />Canh Rau Ngót Nấu Tôm<br />Thịt Gà Kho Nấm</td>
                            <td>Súp Bí Đỏ Thịt Bằm<br />Nước Ép Cà Rốt</td>
                            <td>Sữa Chua Hoặc Váng Sữa<br />Bánh Mì Bơ Đường</td>
                        </tr>
                        <tr>
                            <td>Thứ 5</td>
                            <td>Cháo Thịt Bằm + Rau Củ<br />Sữa Tươi Không Đường (hoặc Sữa Hạt)</td>
                            <td>Bánh Bông Lan Hoặc Bánh Quy<br />Nước Cam Tươi</td>
                            <td>Cơm Trắng<br />Canh Rau Ngót Nấu Tôm<br />Thịt Gà Kho Nấm</td>
                            <td>Súp Bí Đỏ Thịt Bằm<br />Nước Ép Cà Rốt</td>
                            <td>Sữa Chua Hoặc Váng Sữa<br />Bánh Mì Bơ Đường</td>
                        </tr>
                        <tr>
                            <td>Thứ 6</td>
                            <td>Cháo Thịt Bằm + Rau Củ<br />Sữa Tươi Không Đường (hoặc Sữa Hạt)</td>
                            <td>Bánh Bông Lan Hoặc Bánh Quy<br />Nước Cam Tươi</td>
                            <td>Cơm Trắng<br />Canh Rau Ngót Nấu Tôm<br />Thịt Gà Kho Nấm</td>
                            <td>Súp Bí Đỏ Thịt Bằm<br />Nước Ép Cà Rốt</td>
                            <td>Sữa Chua Hoặc Váng Sữa<br />Bánh Mì Bơ Đường</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Menu