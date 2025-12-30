import React from "react";
import "./Feedback.css";

const feedbackImages = [
  "/images/feedback/fb1.jpg",
  "/images/feedback/fb2.jpg",
  "/images/feedback/fb3.jpg",
  "/images/feedback/fb4.jpg",
  "/images/feedback/fb5.jpg",
  "/images/feedback/fb6.jpg",
];

function Feedback() {
  return (
    <div className="feedback-page">
      {/* HERO */}
      <section className="hero">
        <h1>Feedback từ khách hàng</h1>
        <p>
          Phản hồi thực tế từ khách hàng đã sử dụng tool & dịch vụ của chúng tôi.
        </p>
      </section>

      {/* FEEDBACK IMAGES */}
      <section className="section section-soft">
        <div className="section-head">
          <h2>Tin nhắn phản hồi</h2>
          <p>Hình ảnh thật – Khách hàng thật – Kết quả thật</p>
        </div>

        <div className="feedback-grid">
          {feedbackImages.map((src, i) => (
            <img key={i} src={src} alt={`feedback-${i + 1}`} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Feedback;
