import React, { useState } from "react";
import "./Cart.css";

export default function Cart({ cart, setCart }) {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    address: "",
    requirements: "",
    deliveryDay: "",
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  // 🧮 Increase Quantity
  const increaseQty = (id, weight) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.weight === weight
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  // 🧮 Decrease Quantity
  const decreaseQty = (id, weight) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.weight === weight && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  // ❌ Remove Item
  const removeItem = (id, weight) => {
    setCart(cart.filter((item) => !(item.id === id && item.weight === weight)));
  };

  // 💰 Calculate Total
  const total = cart.reduce((sum, item) => {
    const isPickle = item.name === "Godavari Pickles";
    const is250g = item.weight?.includes("250g");
    const itemTotal =
      isPickle && is250g ? item.price * 0.25 * item.qty : item.price * item.qty;
    return sum + itemTotal;
  }, 0);

  // 🧾 Handle Form Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // ✅ Validate Form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.contactNumber.trim())
      newErrors.contactNumber = "Contact number is required";
    else if (!/^[6-9]\d{9}$/.test(formData.contactNumber))
      newErrors.contactNumber = "Enter a valid 10-digit Indian phone number";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.deliveryDay)
      newErrors.deliveryDay = "Please select a delivery day";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🚀 Submit Order
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const orderData = {
      fullName: formData.fullName,
      contactNumber: formData.contactNumber,
      address: formData.address,
      requirements: formData.requirements,
      deliveryDay: formData.deliveryDay,
      cartItems: cart,
    };

    try {
      setLoading(true);
      const response = await fetch("https://aquora-backend.vercel.app//api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("✅ Order saved:", data);
        setShowPopup(true);
        setCart([]);
        setFormData({
          fullName: "",
          contactNumber: "",
          address: "",
          requirements: "",
          deliveryDay: "",
        });
      } else {
        alert(data.message || "Error placing order");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Failed to submit order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // 🛒 Empty Cart
  if (cart.length === 0 && !showPopup) {
    return (
      <div className="cart empty-cart">
        <h2>Your Cart is Empty 🛒</h2>
        <a href="/" className="back-home">
          ← Continue Shopping
        </a>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Your Cart 🦐</h2>

      <div className="cart-container">
        {/* 🧺 CART ITEMS */}
        <div className="cart-items">
          {cart.map((item, index) => {
            const isPickle = item.name === "Godavari Pickles";
            const is250g = item.weight?.includes("250g");
            const pricePerKg = item.price;
            const itemTotal =
              isPickle && is250g
                ? pricePerKg * 0.25 * item.qty
                : pricePerKg * item.qty;

            return (
              <div className="cart-item" key={index}>
                <img src={item.image} alt={item.name} />
                <div className="cart-details">
                  <h4>{item.name}</h4>
                  {item.category && (
                    <p className="category-name">{item.category}</p>
                  )}
                  {/* 🧾 Variant Name */}
                  {item.weight && (
                    <p className="variant-name">{item.weight}</p>
                  )}

                  <p>₹{pricePerKg}/kg</p>

                  <div className="quantity-controls">
                    <button onClick={() => decreaseQty(item.id, item.weight)}>
                      -
                    </button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(item.id, item.weight)}>
                      +
                    </button>
                  </div>

                  <p className="item-total">
                    Total: ₹{itemTotal.toFixed(2)}
                    {isPickle && is250g && <span> (for 250g)</span>}
                  </p>

                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id, item.weight)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* 🧾 ORDER SUMMARY + FORM */}
        <div className="cart-summary-main">
          <div className="cart-summary">
            <h3>Order Summary</h3>
            <h4>Total Amount: ₹{total.toFixed(2)}</h4>

            <form className="checkout-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>
                  Full Name<span>*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="error-text">{errors.fullName}</p>
                )}
              </div>

              <div className="form-group">
                <label>
                  Contact Number<span>*</span>
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Enter your contact number"
                />
                {errors.contactNumber && (
                  <p className="error-text">{errors.contactNumber}</p>
                )}
              </div>

              <div className="form-group">
                <label>
                  Address<span>*</span>
                </label>
                <small className="helper-text">
                  Flat Number, Building Name & Please send GPS location to{" "}
                  <b>+91 9000000000</b> for better accuracy.
                  <br />
                
                </small>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
                {errors.address && (
                  <p className="error-text">{errors.address}</p>
                )}
              </div>

              <div className="form-group">
                <label>Requirements</label>
                <small className="helper-text">
                  Mention your requirements like type of cuts – Round or Bengali,
                  peels, Boneless etc.
                </small>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>
                  DELIVERY on Which Day?<span>*</span>
                </label>
                <select
                  name="deliveryDay"
                  value={formData.deliveryDay}
                  onChange={handleChange}
                >
                  <option value="">Select Day</option>
                  <option value="SUNDAY">SUNDAY</option>
                  <option value="WEDNESDAY">WEDNESDAY</option>
                </select>
                {errors.deliveryDay && (
                  <p className="error-text">{errors.deliveryDay}</p>
                )}
              </div>

              <button type="submit" className="checkout-btn" disabled={loading}>
                {loading ? "Submitting..." : "Submit Order"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ✅ Success Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>🎉 Order Placed Successfully!</h3>
            <p>Thank you for ordering with AQUORA EXPORTS & IMPORTS</p>
            <p>
              Our team will contact you shortly for confirmation and delivery
              details.
            </p>
            <button onClick={() => setShowPopup(false)} className="close-popup">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
