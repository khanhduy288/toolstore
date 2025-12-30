import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: call API register
    console.log("Register submit");
    navigate("/login");
  };

  return (
    <div className="register-container">
      <form className="register-card" onSubmit={handleSubmit}>
        <h2>Đăng ký tài khoản</h2>

        <input type="text" placeholder="Tên đăng nhập" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Mật khẩu" required />
        <input type="password" placeholder="Nhập lại mật khẩu" required />

        <button type="submit" className="btn-primary">
          Tạo tài khoản
        </button>

        <p className="login-text">
          Đã có tài khoản?{" "}
          <Link to="/login">Đăng nhập</Link>
        </p>
      </form>
    </div>
  );
}
