import img from '../assets/img/event-1.jpg'
import img1 from '../assets/img/event-2.jpg'
import img2 from '../assets/img/event-3.jpg'
import { Link } from 'react-router-dom';

export default function TimeTable() {
    return(
        <>
  <div className="container-fluid events py-5 bg-light">
    <div className="container py-5">
      <div
        className="mx-auto text-center wow fadeIn"
        data-wow-delay="0.1s"
        style={{
          maxWidth: 700,
          visibility: "visible",
          animationDelay: "0.1s",
          animationName: "fadeIn"
        }}
      >
        <h4 className="text-primary mb-4 d-inline-block p-2 title-border-radius">
          Thời khóa biểu
        </h4>
        <h1 className="mb-5 display-3">Thời khóa biểu hàng ngày</h1>
      </div>

      <div className="row g-4">
        <div className="col-12">
          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <thead className="table-primary">
                <tr>
                  <th scope="col">Thời gian</th>
                  <th scope="col">Thứ 2</th>
                  <th scope="col">Thứ 3</th>
                  <th scope="col">Thứ 4</th>
                  <th scope="col">Thứ 5</th>
                  <th scope="col">Thứ 6</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">7:30 - 8:00</th>
                  <td colSpan="5" className="text-center">Đón trẻ - Điểm danh</td>
                </tr>
                <tr>
                  <th scope="row">8:00 - 8:30</th>
                  <td colSpan="5" className="text-center">Thể dục buổi sáng</td>
                </tr>
                <tr>
                  <th scope="row">8:30 - 9:30</th>
                  <td>Học Toán</td>
                  <td>Tập đọc</td>
                  <td>Mỹ thuật</td>
                  <td>Âm nhạc</td>
                  <td>Thể chất</td>
                </tr>
                <tr>
                  <th scope="row">9:30 - 10:00</th>
                  <td colSpan="5" className="text-center">Bữa phụ sáng</td>
                </tr>
                <tr>
                  <th scope="row">10:00 - 11:00</th>
                  <td>Tiếng Anh</td>
                  <td>Kỹ năng sống</td>
                  <td>Tiếng Anh</td>
                  <td>Kỹ năng sống</td>
                  <td>Tiếng Anh</td>
                </tr>
                <tr>
                  <th scope="row">11:00 - 11:45</th>
                  <td colSpan="5" className="text-center">Ăn trưa</td>
                </tr>
                <tr>
                  <th scope="row">11:45 - 14:00</th>
                  <td colSpan="5" className="text-center">Ngủ trưa</td>
                </tr>
                <tr>
                  <th scope="row">14:00 - 14:30</th>
                  <td colSpan="5" className="text-center">Bữa phụ trưa</td>
                </tr>
                <tr>
                  <th scope="row">14:30 - 15:30</th>
                  <td>Hoạt động nhóm</td>
                  <td>Kể chuyện</td>
                  <td>Hoạt động nhóm</td>
                  <td>Kể chuyện</td>
                  <td>Hoạt động nhóm</td>
                </tr>
                <tr>
                  <th scope="row">15:30 - 16:00</th>
                  <td colSpan="5" className="text-center">Bữa phụ chiều</td>
                </tr>
                <tr>
                  <th scope="row">16:00 - 16:30</th>
                  <td colSpan="5" className="text-center">Hoạt động ngoài trời - Trả trẻ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  </div>
</>
    )
}