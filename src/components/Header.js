import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header__logo">
          <Link to="/">ToolStore</Link>
        </div>

        {/* Burger */}
        <div
          className="header__burger"
          onClick={() => setOpen(true)}
        >
          <span />
          <span />
          <span />
        </div>

        {/* Desktop nav */}
        <nav className="header__nav desktop">
          <NavLink to="/" end>Trang chủ</NavLink>
          <NavLink to="/products">Sản phẩm</NavLink>
          <NavLink to="/services">Dịch vụ</NavLink>
          <NavLink to="/feedback">Feedback</NavLink>
        </nav>

        {/* Desktop auth */}
        <div className="header__auth desktop">
          <Link to="/login" className="btn btn--ghost">Đăng nhập</Link>
          <Link to="/register" className="btn btn--primary">Đăng ký</Link>
        </div>
      </header>

      {/* Overlay */}
      {open && (
        <div className="overlay" onClick={() => setOpen(false)} />
      )}

      {/* Mobile menu */}
      <nav className={`mobile-menu ${open ? "open" : ""}`}>
        {/* CLOSE BUTTON */}
        <button
          className="mobile-menu__close"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>

        <NavLink to="/" end onClick={() => setOpen(false)}>
          Trang chủ
        </NavLink>
        <NavLink to="/products" onClick={() => setOpen(false)}>
          Sản phẩm
        </NavLink>
        <NavLink to="/services" onClick={() => setOpen(false)}>
          Dịch vụ
        </NavLink>
        <NavLink to="/feedback" onClick={() => setOpen(false)}>
          Feedback
        </NavLink>

        <div className="mobile-auth">
          <Link to="/login" onClick={() => setOpen(false)}>
            Đăng nhập
          </Link>
          <Link to="/register" onClick={() => setOpen(false)}>
            Đăng ký
          </Link>
        </div>
      </nav>
    </>
  );
}
