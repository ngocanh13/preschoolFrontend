import React, { useState } from "react";
import '../assets/css/Schedule.css';

const Schedule = () => {
  const [schedule, setSchedule] = useState({
    Monday: [
      { time: "8:00 AM", activity: "Đón trẻ và chơi tự do" },
      { time: "9:00 AM", activity: "Thể dục sáng" },
    ],
    Tuesday: [
      { time: "8:00 AM", activity: "Chơi tự do" },
      { time: "9:30 AM", activity: "Học tập có hướng dẫn" },
    ],
    Wednesday: [
      { time: "8:00 AM", activity: "Thể dục sáng" },
      { time: "10:00 AM", activity: "Vẽ tranh" },
    ],
    Thursday: [
      { time: "8:00 AM", activity: "Đọc truyện" },
      { time: "9:00 AM", activity: "Chơi ngoài trời" },
    ],
    Friday: [
      { time: "8:00 AM", activity: "Học nhạc" },
      { time: "9:30 AM", activity: "Vui chơi sáng tạo" },
    ],
  });

  const [newActivity, setNewActivity] = useState({
    day: "Monday",
    time: "",
    activity: "",
  });

  const handleAddActivity = () => {
    if (newActivity.time && newActivity.activity) {
      setSchedule((prevSchedule) => ({
        ...prevSchedule,
        [newActivity.day]: [
          ...(prevSchedule[newActivity.day] || []),
          { time: newActivity.time, activity: newActivity.activity },
        ],
      }));
      setNewActivity({ day: "Monday", time: "", activity: "" });
    } else {
      alert("Vui lòng nhập đầy đủ thông tin!");
    }
  };

  const handleDeleteActivity = (day, index) => {
    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      [day]: prevSchedule[day].filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="schedule-container">
      <h1>Thời Khóa Biểu Trường Mầm Non</h1>
      {Object.keys(schedule).map((day) => (
        <div key={day} className="schedule-day">
          <h2>{day}</h2>
          <table>
            <thead>
              <tr>
                <th>Giờ</th>
                <th>Hoạt Động</th>
                <th>Hành Động</th>
              </tr>
            </thead>
            <tbody>
              {schedule[day].map((activity, index) => (
                <tr key={index}>
                  <td>{activity.time}</td>
                  <td>{activity.activity}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteActivity(day, index)}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      {/* Thêm hoạt động mới */}
      <div className="add-activity">
        <h2>Thêm Hoạt Động</h2>
        <select
          value={newActivity.day}
          onChange={(e) =>
            setNewActivity({ ...newActivity, day: e.target.value })
          }
        >
          {Object.keys(schedule).map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
        <input
          type="time"
          value={newActivity.time}
          onChange={(e) =>
            setNewActivity({ ...newActivity, time: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Nhập hoạt động"
          value={newActivity.activity}
          onChange={(e) =>
            setNewActivity({ ...newActivity, activity: e.target.value })
          }
        />
        <button onClick={handleAddActivity}>Thêm Hoạt Động</button>
      </div>
    </div>
  );
};

export default Schedule;
