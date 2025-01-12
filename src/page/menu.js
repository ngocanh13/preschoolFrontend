import React from 'react'

const Menu = () => {
    return (
        <div className="container mt-4">
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead className="table-pink" style={{backgroundColor: "#FFB6C1"}}>
                        <tr>
                            <th>Tên món</th>
                            <th>Ngày phục vụ</th>
                            <th>Giá</th>
                            <th>Dinh dưỡng</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Lobster Bisque</strong></td>
                            <td>21/01/2025</td>
                            <td>$5.95</td>
                            <td>
                                <ul className="list-unstyled">
                                    <li>Calories: 250</li>
                                    <li>Protein: 15g</li>
                                    <li>Carbs: 20g</li>
                                    <li>Fat: 12g</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Crab Cake</strong></td>
                            <td>Thứ 2 - Thứ 6</td>
                            <td>$7.95</td>
                            <td>
                                <ul className="list-unstyled">
                                    <li>Calories: 320</li>
                                    <li>Protein: 18g</li>
                                    <li>Carbs: 25g</li>
                                    <li>Fat: 15g</li>
                                </ul>
                            </td>
                        </tr>
                        {/* Thêm các món ăn khác tương tự */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Menu