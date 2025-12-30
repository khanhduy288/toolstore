import React, { useState } from "react";
import "./Products.css";

const products = [
  {
    id: 1,
    name: "Tool Auto Đăng Bài",
    desc: "Tự động đăng bài đa nền tảng, tiết kiệm thời gian & công sức.",
    price: "299.000đ",
    badge: "Tool",
    badgeColor: "blue",
  },
  {
    id: 2,
    name: "Tool Quản Lý Tài Khoản",
    desc: "Quản lý nhiều tài khoản, bảo mật & chống checkpoint.",
    price: "499.000đ",
    badge: "Tool",
    badgeColor: "green",
  },
  {
    id: 3,
    name: "Website Bán Hàng Mẫu",
    desc: "Giao diện hiện đại, tối ưu chuyển đổi, dùng ngay.",
    price: "1.500.000đ",
    badge: "Web",
    badgeColor: "blue",
  },
  {
    id: 4,
    name: "Website Theo Yêu Cầu",
    desc: "Thiết kế & lập trình theo nhu cầu riêng của bạn.",
    price: "Liên hệ",
    badge: "Dịch vụ",
    badgeColor: "red",
  },
];

export default function Products() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Đã gửi yêu cầu, mình sẽ liên hệ sớm!");
    closeModal();
  };

  const openZalo = () => {
    window.open("https://zalo.me/0918110368", "_blank");
  };

  return (
    <div className="products-page">
      {/* HERO */}
      <section className="hero">
        <h1>Tool & Web Giải Pháp Số</h1>
        <p>
          Cung cấp các công cụ tự động hóa và website hiện đại giúp bạn tăng
          hiệu suất và tối ưu chi phí.
        </p>
      </section>

      {/* PRODUCTS */}
      <section className="section section-soft">
        <div className="section-head">
          <h2>Danh sách sản phẩm</h2>
          <p>Tool mạnh mẽ – Web chuẩn UX/UI – Hỗ trợ lâu dài</p>
        </div>

        <div className="grid grid-4">
          {products.map((p) => (
            <div className="product-card" key={p.id}>
              <span className={`badge ${p.badgeColor}`}>{p.badge}</span>

              <div className="product-img"></div>

              <h3>{p.name}</h3>
              <p className="product-desc">{p.desc}</p>

              <div className="product-footer">
                <strong>{p.price}</strong>

                {p.price === "Liên hệ" ? (
                  <button className="btn-outline" onClick={openZalo}>
                    Liên hệ
                  </button>
                ) : (
                  <button
                    className="btn-primary"
                    onClick={() => openModal(p)}
                  >
                    Mua ngay
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {open && (
        <>
          <div className="modal-overlay" onClick={closeModal} />

          <div className="modal">
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>

            <h3>Mua sản phẩm</h3>
            <p className="modal-product">{selectedProduct?.name}</p>

            <form onSubmit={handleSubmit}>
              <input placeholder="Họ và tên" required />
              <input placeholder="Số điện thoại" required />
              <input placeholder="Email" />
              <textarea placeholder="Ghi chú thêm..." />

              <button type="submit" className="btn-primary">
                Gửi yêu cầu
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
