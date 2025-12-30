import "./Home.css";
import { useNavigate } from "react-router-dom";
import products from "../data/products";

export default function Home() {
  const navigate = useNavigate();

  const featuredProducts = products.slice(0, 3);

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Giải pháp Tool & Dịch vụ hệ thống</h1>
          <p>
            Cung cấp tool automation, marketing, VPS/Server và thiết kế website
            chuyên nghiệp – ổn định – bảo mật.
          </p>

          <div className="hero-actions">
            <button
              className="btn-primary"
              onClick={() => navigate("/products")}
            >
              Xem sản phẩm
            </button>

            <a
              href="https://zalo.me/0918110368"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Liên hệ tư vấn
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section-soft">
        <div className="section-head">
          <h2>Dịch vụ & giải pháp</h2>
          <p>Giải pháp công nghệ toàn diện cho cá nhân & doanh nghiệp</p>
        </div>

        <div className="grid grid-4">
          <div className="service-box">
            <div className="service-icon">⚙️</div>
            <h3>Tool Automation</h3>
            <ul>
              <li>Tự động hoá quy trình</li>
              <li>Tiết kiệm thời gian</li>
            </ul>
            <span className="service-link" onClick={() => navigate("/products")}>
              Khám phá →
            </span>
          </div>

          <div className="service-box">
            <div className="service-icon">📈</div>
            <h3>Tool Marketing</h3>
            <ul>
              <li>Facebook, Zalo, Email</li>
              <li>Tăng chuyển đổi</li>
            </ul>
            <span className="service-link" onClick={() => navigate("/products")}>
              Khám phá →
            </span>
          </div>

          <div className="service-box">
            <div className="service-icon">🖥️</div>
            <h3>VPS / Server</h3>
            <ul>
              <li>Uptime cao</li>
              <li>Chạy tool & web</li>
            </ul>
            <span className="service-link" onClick={() => navigate("/products")}>
              Khám phá →
            </span>
          </div>

          <div className="service-box">
            <div className="service-icon">🌐</div>
            <h3>Thiết kế Website</h3>
            <ul>
              <li>Chuẩn SEO</li>
              <li>React / WordPress</li>
            </ul>
            <span className="service-link" onClick={() => navigate("/products")}>
              Khám phá →
            </span>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section">
        <div className="section-head">
          <h2>Sản phẩm nổi bật</h2>
          <p>Được nhiều khách hàng tin dùng</p>
        </div>

        <div className="grid grid-3">
          {featuredProducts.map((product, index) => (
            <div className="product-card" key={product.id}>
              <span className={`badge ${index === 1 ? "blue" : index === 2 ? "green" : ""}`}>
                Nổi bật
              </span>

              <img
                src={product.image}
                alt={product.name}
                className="product-img"
              />

              <h3>{product.name}</h3>
              <p>{product.desc}</p>

              <div className="product-footer">
                <strong>{product.price}</strong>
                <button onClick={() => navigate(`/product/${product.id}`)}>
                  Xem chi tiết
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST */}
      <section className="section section-dark compact">
        <div className="grid grid-4">
          <div className="trust-card">
            <span className="icon">🚀</span>
            <div>
              <h4>Triển khai nhanh</h4>
              <p>3 - 20 ngày làm việc tùy dự án</p>
            </div>
          </div>

          <div className="trust-card">
            <span className="icon">🔒</span>
            <div>
              <h4>Bảo mật tốt</h4>
              <p>An toàn dữ liệu</p>
            </div>
          </div>

          <div className="trust-card">
            <span className="icon">💬</span>
            <div>
              <h4>Hỗ trợ 24/7</h4>
              <p>Hỗ trợ kỹ thuật</p>
            </div>
          </div>

          <div className="trust-card">
            <span className="icon">💰</span>
            <div>
              <h4>Giá tốt, minh bạch</h4>
              <p>Không chi phí ẩn</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="section-head">
          <h2>Quy trình làm việc</h2>
        </div>

        <div className="grid grid-4">
          <div className="step-card">1. Tiếp nhận yêu cầu</div>
          <div className="step-card">2. Tư vấn & báo giá</div>
          <div className="step-card">3. Triển khai</div>
          <div className="step-card">4. Bàn giao & hỗ trợ</div>
        </div>
      </section>

      {/* FLOATING ZALO */}
      <a
        href="https://zalo.me/0918110368"
        target="_blank"
        rel="noopener noreferrer"
        className="zalo-float"
      >
        <img src="/images/zalo1.png" alt="Zalo chat" />
      </a>
    </div>
  );
}
