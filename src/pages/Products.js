import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import products from "../data/products";
import "./Products.css";

const API = "https://63e1d6414324b12d963f5108.mockapi.io/api/v11/donhang";

function Products() {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false); // 👈 spinner

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    note: "",
  });

  const handleBuy = (product) => {
    if (product.price === "Liên hệ") {
      window.open("https://zalo.me/0918110368", "_blank");
    } else {
      setSelectedProduct(product);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.phone) {
      alert("Vui lòng nhập họ tên và số điện thoại");
      return;
    }

    try {
      setLoading(true); // 👈 bắt đầu xoay

      await axios.post(API, {
        productId: selectedProduct.id,
        productName: selectedProduct.name,
        price: selectedProduct.price,
        customerName: form.name,
        phone: form.phone,
        email: form.email,
        note: form.note,
        status: "new",
        createdAt: new Date().toISOString(),
      });

      alert("Đã gửi yêu cầu mua hàng ✔");

      setSelectedProduct(null);
      setForm({
        name: "",
        phone: "",
        email: "",
        note: "",
      });
    } catch (err) {
      console.error(err);
      alert("Gửi đơn thất bại");
    } finally {
      setLoading(false); // 👈 dừng xoay
    }
  };

  return (
    <div className="products-page">
      <section className="section section-soft">
        <div className="section-head">
          <h2>Danh sách sản phẩm</h2>
          <p>Tool mạnh mẽ – Web chuẩn UX/UI – Hỗ trợ lâu dài</p>
        </div>

        <div className="grid grid-4">
          {products.map((p) => (
            <div className="product-card" key={p.id}>
              <span className={`badge ${p.badgeColor}`}>{p.badge}</span>

              <img src={p.image} alt={p.name} className="product-img" />

              <h3>{p.name}</h3>
              <p className="product-desc">{p.desc}</p>

              <div className="product-footer">
                <strong>{p.price}</strong>

                <div className="product-actions">
                  <button
                    className="btn-outline"
                    onClick={() => navigate(`/product/${p.id}`)}
                  >
                    Xem chi tiết
                  </button>

                  <button
                    className="btn-primary"
                    onClick={() => handleBuy(p)}
                  >
                    {p.price === "Liên hệ" ? "Liên hệ" : "Mua ngay"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MODAL MUA NGAY ================= */}
      {selectedProduct && (
        <div
          className="modal-overlay"
          onClick={() => !loading && setSelectedProduct(null)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => !loading && setSelectedProduct(null)}
              disabled={loading}
            >
              ×
            </button>

            <h3>Đặt mua sản phẩm</h3>
            <p className="modal-product">{selectedProduct.name}</p>

            <form onSubmit={handleSubmit}>
              <input
                name="name"
                placeholder="Họ tên"
                value={form.name}
                onChange={handleChange}
                required
                disabled={loading}
              />
              <input
                name="phone"
                placeholder="Số điện thoại"
                value={form.phone}
                onChange={handleChange}
                required
                disabled={loading}
              />
              <input
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                disabled={loading}
              />
              <textarea
                name="note"
                placeholder="Ghi chú thêm (nếu có)"
                value={form.note}
                onChange={handleChange}
                disabled={loading}
              />

              <button className="btn-primary" type="submit" disabled={loading}>
                {loading ? <span className="spinner"></span> : "Gửi yêu cầu"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
