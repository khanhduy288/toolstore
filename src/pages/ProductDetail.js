import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import products from "../data/products";
import "./ProductDetail.css";

const API = "https://63e1d6414324b12d963f5108.mockapi.io/api/v11/donhang";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    note: "",
  });

  if (!product) {
    return <h2 style={{ padding: 40 }}>Không tìm thấy sản phẩm</h2>;
  }

  const handleBuy = () => {
    if (product.price === "Liên hệ") {
      window.open("https://zalo.me/0918110368", "_blank");
    } else {
      setShowModal(true);
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
      await axios.post(API, {
        productId: product.id,
        productName: product.name,
        price: product.price,
        customerName: form.name,
        phone: form.phone,
        email: form.email,
        note: form.note,
        status: "new",
        createdAt: new Date().toISOString(),
      });

      alert("Đã gửi yêu cầu mua hàng ✔");

      setShowModal(false);
      setForm({
        name: "",
        phone: "",
        email: "",
        note: "",
      });
    } catch (err) {
      console.error(err);
      alert("Gửi đơn thất bại");
    }
  };

  return (
    <div className="product-detail">
      <div className="detail-card">
        <img src={product.image} alt={product.name} />

        <div className="detail-info">
          <span className={`badge ${product.badgeColor}`}>
            {product.badge}
          </span>

          <h1>{product.name}</h1>
          <p className="desc">{product.desc}</p>

          <ul className="features">
            {product.features.map((f, i) => (
              <li key={i}>✓ {f}</li>
            ))}
          </ul>

          <div className="detail-footer">
            <strong className="price">{product.price}</strong>

            <button className="btn-primary" onClick={handleBuy}>
              {product.price === "Liên hệ" ? "Liên hệ" : "Mua ngay"}
            </button>
          </div>
        </div>
      </div>

      {/* ================= MODAL MUA ================= */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>

            <h3>Mua {product.name}</h3>

            <form onSubmit={handleSubmit}>
              <input
                name="name"
                placeholder="Họ tên"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                name="phone"
                placeholder="Số điện thoại"
                value={form.phone}
                onChange={handleChange}
                required
              />
              <input
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
              <textarea
                name="note"
                placeholder="Ghi chú thêm"
                value={form.note}
                onChange={handleChange}
              />

              <button className="btn-primary" type="submit">
                Gửi yêu cầu
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
