import React, { useState } from "react";
import "../assets/css/NotificationForm.css";


const NotificationForm = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [recipients, setRecipients] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const classes = [
    { id: 1, name: "Lớp Mầm" },
    { id: 2, name: "Lớp Chồi" },
    { id: 3, name: "Lớp Lá" },
  ];

  const handleSaveNotification = () => {
    if (!title.trim() || !details.trim()) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    if (editIndex !== null) {
      const updatedNotifications = [...notifications];
      updatedNotifications[editIndex] = { title, details, recipients };
      setNotifications(updatedNotifications);
      setSuccessMessage("Thông báo đã được cập nhật thành công!");
      setEditIndex(null);
    } else {
      const newNotification = { title, details, recipients };
      setNotifications([...notifications, newNotification]);
      setSuccessMessage("Thông báo đã được gửi thành công!");
    }

    setTimeout(() => setSuccessMessage(""), 3000);

    resetForm();
  };

  const handleSendNotificationFromList = (index) => {
    const notification = notifications[index];
    alert(`Gửi thông báo: \nTiêu đề: ${notification.title}\nNội dung: ${notification.details}\nĐối tượng: ${notification.recipients.map((id) => classes.find((cls) => cls.id === id)?.name).join(", ")}`);
    setNotifications([]);
    setSuccessMessage("Tất cả thông báo đã được gửi thành công và danh sách thông báo hiện trống!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const resetForm = () => {
    setTitle("");
    setDetails("");
    setRecipients([]);
  };

  const handleEditNotification = (index) => {
    const notification = notifications[index];
    setTitle(notification.title);
    setDetails(notification.details);
    setRecipients(notification.recipients);
    setEditIndex(index);
  };

  const handleDeleteNotification = (index) => {
    if (window.confirm("Bạn có chắc muốn xóa thông báo này không?")) {
      const updatedNotifications = notifications.filter((_, i) => i !== index);
      setNotifications(updatedNotifications);
      setSuccessMessage("Thông báo đã được xóa thành công!");
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  const handleRecipientChange = (id) => {
    if (recipients.includes(id)) {
      setRecipients(recipients.filter((item) => item !== id));
    } else {
      setRecipients([...recipients, id]);
    }
  };

  return (
    <div className="notification-form-container">
      <h1 className="header">Quản Lý Thông Báo</h1>

      {successMessage && <div className="success-message">{successMessage}</div>}

      <div className="form-section">
        <label className="form-label">Tiêu đề thông báo:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Nhập tiêu đề"
          className="input-field"
        />

        <label className="form-label">Nội dung chi tiết:</label>
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Nhập nội dung chi tiết"
          className="textarea-field"
        ></textarea>

        <label className="form-label">Đối tượng nhận thông báo:</label>
        <div className="checkbox-group">
          {classes.map((cls) => (
            <div key={cls.id} className="checkbox-item">
              <input
                type="checkbox"
                id={`class-${cls.id}`}
                checked={recipients.includes(cls.id)}
                onChange={() => handleRecipientChange(cls.id)}
              />
              <label htmlFor={`class-${cls.id}`} className="checkbox-label">
                {cls.name}
              </label>
            </div>
          ))}
        </div>

        <button
          onClick={handleSaveNotification}
          className={`action-button ${editIndex !== null ? "update-button" : "save-button"}`}
        >
          {editIndex !== null ? "Cập Nhật Thông Báo" : "Gửi Thông Báo"}
        </button>
      </div>

      <h2 className="section-title">Danh Sách Thông Báo</h2>
      {notifications.length > 0 ? (
        <ul className="notification-list">
          {notifications.map((notification, index) => (
            <li key={index} className="notification-item">
              <h3 className="notification-title">{notification.title}</h3>
              <p className="notification-details">{notification.details}</p>
              <p className="notification-recipients">
                <strong>Đối tượng nhận:</strong> {" "}
                {notification.recipients
                  .map((id) => classes.find((cls) => cls.id === id)?.name)
                  .join(", ")}
              </p>
              <div className="action-buttons">
                <button
                  className="edit-btn"
                  onClick={() => handleEditNotification(index)}
                >
                  Sửa
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteNotification(index)}
                >
                  Xóa
                </button>
                <button
                  className="send-btn"
                  onClick={() => handleSendNotificationFromList(index)}
                >
                  Gửi
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-notifications">Chưa có thông báo nào.</p>
      )}
    </div>
  );
};

export default NotificationForm;
