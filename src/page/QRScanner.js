import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import moment from 'moment';
import { QRCodeSVG } from 'qrcode.react';
import '../assets/css/QRScanner.css';

const QRScanner = () => {
  const [result, setResult] = useState('');
  const [scanHistory, setScanHistory] = useState([
    {
      code: "SV001-20240101",
      time: "01/01/2024 08:00:00",
      studentInfo: {
        name: "Nguyễn Văn A",
        class: "12A1"
      }
    },
    {
      code: "SV002-20240101", 
      time: "01/01/2024 08:05:00",
      studentInfo: {
        name: "Trần Thị B",
        class: "12A2"
      }
    },
    {
      code: "SV003-20240101",
      time: "01/01/2024 08:10:00", 
      studentInfo: {
        name: "Lê Văn C",
        class: "12A3"
      }
    }
  ]);
  const [error, setError] = useState('');

  // Demo QR code data
  const demoQRData = {
    studentId: "SV001",
    name: "Nguyễn Văn A", 
    class: "12A1"
  };

  const handleScan = async (data) => {
    if (data) {
      try {
        // Kiểm tra xem mã QR đã được quét chưa
        const isDuplicate = scanHistory.some(item => item.code === data);
        if (isDuplicate) {
          setError('Mã QR này đã được quét!');
          return;
        }

        // Thêm vào lịch sử quét
        const scanTime = moment().format('DD/MM/YYYY HH:mm:ss');
        const newScan = {
          code: data,
          time: scanTime,
          studentInfo: {
            name: 'Nguyễn Văn A', // Thay thế bằng dữ liệu thực từ API
            class: '12A1'
          }
        };

        setScanHistory([newScan, ...scanHistory]);
        setResult(data);
        setError('');

        // Ở đây bạn có thể gửi dữ liệu lên server
        // await axios.post('/api/attendance', { code: data, time: scanTime });
      } catch (err) {
        setError('Có lỗi xảy ra khi xử lý mã QR');
      }
    }
  };

  const handleError = (err) => {
    console.error(err);
    setError('Không thể truy cập camera');
  };

  return (
    <div className="qr-scanner-container">
      <h1>Điểm Danh Bằng Mã QR</h1>
      
      {/* Demo QR Code */}
      <div className="demo-qr" style={{ textAlign: 'center', margin: '20px 0' }}>
        <h3>Mã QR Demo</h3>
        <QRCodeSVG 
          value={JSON.stringify(demoQRData)}
          size={256}
          level="H"
          includeMargin={true}
        />
      </div>

      {/* <div className="scanner-section">
        <QrReader
          delay={300}
          onError={handleError}
          onResult={(result, error) => {
            if (result) {
              handleScan(result?.text);
            }
            if (error) {
              console.info(error);
            }
          }}
          style={{ width: '100%' }}
        />
      </div> */}

      {error && <div className="error-message">{error}</div>}

      <div className="scan-history">
        <h2>Lịch Sử Điểm Danh</h2>
        <div className="history-list">
          {scanHistory.map((scan, index) => (
            <div key={index} className="history-item">
              <div className="student-info">
                <h3>{scan.studentInfo.name}</h3>
                <p>Lớp: {scan.studentInfo.class}</p>
              </div>
              <div className="scan-time">
                <p>Thời gian: {scan.time}</p>
                <p>Mã QR: {scan.code}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QRScanner;