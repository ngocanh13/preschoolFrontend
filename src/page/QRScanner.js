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
        const isDuplicate = scanHistory.some(item => item.code === data);
        if (isDuplicate) {
          setError('Mã QR này đã được quét!');
          return;
        }

        const scanTime = moment().format('DD/MM/YYYY HH:mm:ss');
        const newScan = {
          code: data,
          time: scanTime,
          studentInfo: {
            name: 'Nguyễn Văn A',
            class: '12A1'
          }
        };

        setScanHistory([newScan, ...scanHistory]);
        setResult(data);
        setError('');
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
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
          <h1 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">Điểm Danh </h1>
          <p>Quét mã QR để điểm danh học sinh</p>
        </div>

        <div className="row g-4">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="h-100 bg-light rounded p-4">
              <div className="d-flex align-items-center mb-4">
                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{width: "60px", height: "60px"}}>
                  <i className="fa fa-qrcode fs-4 text-white"></i>
                </div>
                <div className="ms-3">
                  <h5 className="mb-0">Quét Mã QR</h5>
                  <span>Đặt mã QR vào khung hình để quét</span>
                </div>
              </div>
              
              <div className="scanner-section rounded overflow-hidden mb-4">
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
              </div>

              {error && 
                <div className="alert alert-danger d-flex align-items-center" role="alert">
                  <i className="fas fa-exclamation-circle me-2"></i>
                  {error}
                </div>
              }
            </div>
          </div>

          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="h-100 bg-light rounded p-4">
              <div className="d-flex align-items-center mb-4">
                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{width: "60px", height: "60px"}}>
                  <i className="fas fa-history fs-4 text-white"></i>
                </div>
                <div className="ms-3">
                  <h5 className="mb-0">Lịch Sử Điểm Danh</h5>
                  <span>Danh sách học sinh đã điểm danh</span>
                </div>
              </div>

              <div className="list-group">
                {scanHistory.map((scan, index) => (
                  <div key={index} className="list-group-item list-group-item-action mb-2 rounded border">
                    <div className="d-flex w-100 justify-content-between align-items-center">
                      <div>
                        <h6 className="mb-1 text-primary">{scan.studentInfo.name}</h6>
                        <p className="mb-1 small">
                          <i className="fas fa-graduation-cap me-2"></i>
                          Lớp: {scan.studentInfo.class}
                        </p>
                      </div>
                      <div className="text-end">
                        <small className="text-muted d-block">
                          <i className="far fa-clock me-1"></i>
                          {scan.time}
                        </small>
                        <small className="text-muted">
                          <i className="fas fa-qrcode me-1"></i>
                          {scan.code}
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRScanner;