import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

// 🖼️ Product Images
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";
import product12 from "../assets/product12.jpg";
import product13 from "../assets/product13.jpg";
import product14 from "../assets/product14.jpg";

export default function Products({ cart, setCart }) {
  const products = [
    {
      id: 1,
      name: "Vannamei Prawns",
      category: "Sea Food",
      desc: "Peeling Type: De-Vein for (Medium & Large) & De-Shell (S,M,L)",
      image: product1,
      variants: [
        { weight: "1KG (Net 520g) - Small (100 count)", price: 485 },
        { weight: "1KG (Net 520g) - Medium (70 count)", price: 545 },
        { weight: "1KG (Net 520g) - Large (30 count)", price: 750 },
      ],
    },
    {
      id: 2,
      name: "Country Chicken (Natu Kodi)",
      category: "Poultry",
      desc: "Live or Pre-Cut Available",
      image: product2,
      variants: [
        { weight: "1KG (Net 650g) - Live", price: 745 },
        { weight: "2KG (Net 1.3KG) - Live", price: 1490 },
      ],
    },
    {
      id: 3,
      name: "Mud Crabs (Manda Peeta)",
      category: "Sea Food",
      desc: "Live or Pre-Cut Available",
      image: product3,
      variants: [
        { weight: "1KG (Net 650g) - Live", price: 900 },
        { weight: "2KG (Net 1.3KG) - Live", price: 1800 },
      ],
    },
    {
      id: 4,
      name: "Korameenu (Murrel)",
      category: "River Fish",
      desc: "Available with Bone & Boneless",
      image: product4,
      variants: [
        { weight: "1KG (Bone 750g)", price: 850 },
        { weight: "1KG (Boneless 400g)", price: 850 },
      ],
    },
    {
      id: 5,
      name: "Seabass (Pandugappa)",
      category: "Sea Fish",
      desc: "Available with Bone & Boneless",
      image: product5,
      variants: [
        { weight: "1KG (Bone 750g)", price: 790 },
        { weight: "1KG (Boneless 400g)", price: 790 },
      ],
    },
    {
      id: 6,
      name: "Bommidayalu",
      category: "River Fish",
      desc: "Exotic Fish (Natu-River Water)",
      image: product6,
      variants: [
        { weight: "1KG (Net 650g)", price: 1000 },
        { weight: "2KG (Net 1.3KG)", price: 2000 },
      ],
    },
    {
      id: 12,
      name: "Fresh Water Cultivation Fishes",
      category: "Freshwater",
      desc: "Rohu, Catla, Roopchand, Basa (Boneless Available)",
      image: product12,
      variants: [
        { weight: "Rohu - 1KG", price: 270 },
        { weight: "Catla - 1KG", price: 280 },
        { weight: "Roopchand - 1KG", price: 300 },
        { weight: "Basa (Boneless) - 1KG", price: 400 },
      ],
    },
    {
      id: 13,
      name: "Fresh Water & Sea Fish Mix",
      category: "Fish",
      desc: "Goldfish (Bangaru Teega), Mackerel (Bangda)",
      image: product13,
      variants: [
        { weight: "Goldfish (Bangaru Teega) - 1KG", price: 270 },
        { weight: "Mackerel (Bangda) - 1KG", price: 460 },
      ],
    },
    {
      id: 14,
      name: "Godavari Pickles",
      category: "Pickles",
      desc: "Preparation every Tuesday | Delivery on Thursday",
      image: product14,
      variants: [
        { weight: "Chicken Pickle 250g", price: 450 },
        { weight: "Prawn Pickle 250g", price: 550 },
        { weight: "Fish Pickle 250g", price: 650 },
      ],
    },
  ];

  const [selectedVariants, setSelectedVariants] = useState(
    products.reduce((acc, p) => ({ ...acc, [p.id]: p.variants[0] }), {})
  );
  const [added, setAdded] = useState([]);

  const handleVariantChange = (productId, variant) => {
    setSelectedVariants((prev) => ({ ...prev, [productId]: variant }));
  };

  const addToCart = (product) => {
    const selected = selectedVariants[product.id];
    const exists = cart.find(
      (item) => item.id === product.id && item.weight === selected.weight
    );

    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id && item.weight === selected.weight
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1, ...selected }]);
    }

    setAdded((prev) => [...prev, product.id]);
    setTimeout(() => {
      setAdded((prev) => prev.filter((id) => id !== product.id));
    }, 2000);
  };

  return (
    <section className="products" id="products">
      <div className="products-header">
        <h2>Our Fresh Products</h2>
      </div>

      <div className="product-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="product-info">
              <h4>{item.name}</h4>
              <p>{item.desc}</p>

              <select
                className="weight-select"
                onChange={(e) =>
                  handleVariantChange(
                    item.id,
                    item.variants[e.target.selectedIndex]
                  )
                }
              >
                {item.variants.map((v, i) => (
                  <option key={i} value={v.price}>
                    {v.weight} - ₹{v.price}
                  </option>
                ))}
              </select>

              <h5 className="price">
                ₹{selectedVariants[item.id]?.price}{" "}
                <span className="unit">
                  /
                  {selectedVariants[item.id]?.weight.includes("250g")
                    ? "250g"
                    : "1KG"}
                </span>
              </h5>
            </div>

            {added.includes(item.id) ? (
              <button className="added-btn">✔ Added</button>
            ) : (
              <button onClick={() => addToCart(item)} className="add-btn">
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>

      {/* 🛒 Fixed Go to Cart Button */}
      {cart.length > 0 && (
        <div className="fixed-cart-btn">
          <Link to="/cart">🛒 Go to Cart ({cart.length})</Link>
        </div>
      )}
    </section>
  );
}
