import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Brand */}
        <div className="footer__col">
          <h3 className="footer__logo">ToolStore</h3>
          <p className="footer__desc">
            Nền tảng cung cấp tool, dịch vụ hệ thống và giải pháp web
            chuyên nghiệp cho cá nhân & doanh nghiệp.
          </p>
        </div>

        {/* Products */}
        <div className="footer__col">
          <h4>Sản phẩm</h4>
          <ul>
            <li>Tool Automation</li>
            <li>Tool Marketing</li>
            <li>Tool SEO</li>
            <li>Tool MMO</li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer__col">
          <h4>Dịch vụ</h4>
          <ul>
            <li>Hosting VPS / Server</li>
            <li>Triển khai hệ thống</li>
            <li>Thiết kế Website</li>
            <li>Bảo trì & hỗ trợ</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h4>Liên hệ</h4>
          <ul>
            <li>Mail: Khanhduya99@gmail.com</li>
            <li>Hotline: 0918110368</li>
            <li>Telegram: @Khanhdevtool</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        © {new Date().getFullYear()} ToolStore. All rights reserved.
      </div>
    </footer>
  );
}
