import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: call API login
    console.log("Login submit");
  };

  const loginWithGoogle = () => {
    // TODO: redirect OAuth Google
    window.location.href = "http://localhost:5000/auth/google";
  };

  const loginWithFacebook = () => {
    // TODO: redirect OAuth Facebook
    window.location.href = "http://localhost:5000/auth/facebook";
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Đăng nhập</h2>

        <input type="text" placeholder="Tên đăng nhập" required />
        <input type="password" placeholder="Mật khẩu" required />

        <button type="submit" className="btn-primary">
          Đăng nhập
        </button>

        <div className="divider">hoặc</div>

        <button type="button" className="btn-google" onClick={loginWithGoogle}>
          <FaGoogle /> Đăng nhập bằng Google
        </button>

        <button type="button" className="btn-facebook" onClick={loginWithFacebook}>
          <FaFacebookF /> Đăng nhập bằng Facebook
        </button>

        <p className="register-text">
          Chưa có tài khoản?{" "}
          <Link to="/register">Đăng ký ngay</Link>
        </p>
      </form>
    </div>
  );
}
