import React from "react";

function Services() {
  return (
    <div className="services-page">
      {/* HERO */}
      <section className="hero">
        <h1>Dịch vụ của chúng tôi</h1>
        <p>
          Cung cấp giải pháp Tool & Website toàn diện – Tối ưu chi phí – Hỗ trợ
          lâu dài.
        </p>

        <div className="hero-actions">
          <button className="btn-primary">Nhận tư vấn</button>
          <button className="btn-outline">Xem sản phẩm</button>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section-soft">
        <div className="section-head">
          <h2>Dịch vụ nổi bật</h2>
          <p>Giải pháp thực tế – Triển khai nhanh – Hiệu quả cao</p>
        </div>

        <div className="grid grid-3">
          <div className="service-box">
            <div className="service-icon">🧰</div>
            <h3>Phát triển Tool</h3>
            <ul>
              <li>Tool automation</li>
              <li>Tool quản lý tài khoản</li>
              <li>Tool marketing</li>
            </ul>
            <span className="service-link">Xem chi tiết →</span>
          </div>

          <div className="service-box">
            <div className="service-icon">🌐</div>
            <h3>Thiết kế Website</h3>
            <ul>
              <li>Website bán hàng</li>
              <li>Landing page</li>
              <li>Website theo yêu cầu</li>
            </ul>
            <span className="service-link">Xem chi tiết →</span>
          </div>

          <div className="service-box">
            <div className="service-icon">⚙️</div>
            <h3>Hệ thống & Dashboard</h3>
            <ul>
              <li>Admin dashboard</li>
              <li>Quản lý dữ liệu</li>
              <li>Báo cáo & thống kê</li>
            </ul>
            <span className="service-link">Xem chi tiết →</span>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="section-head">
          <h2>Quy trình làm việc</h2>
          <p>Rõ ràng – Minh bạch – Đúng tiến độ</p>
        </div>

        <div className="grid grid-3">
          <div className="step-card">1️⃣ Tiếp nhận yêu cầu</div>
          <div className="step-card">2️⃣ Demo & báo giá</div>
          <div className="step-card">3️⃣ Triển khai & bàn giao</div>
        </div>
      </section>
    </div>
  );
}

export default Services;
