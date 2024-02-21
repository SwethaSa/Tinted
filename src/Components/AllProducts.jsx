import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import "./Products.css";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("Alphabetically,A-Z");

  useEffect(() => {
    // Fetch products from the API
    fetch("https://backend-swethasa.vercel.app/products/all")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "Alphabetically,A-Z") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "Alphabetically,Z-A") {
      return b.name.localeCompare(a.name);
    } else if (sortBy === "Price,low to high") {
      return a.price - b.price;
    } else if (sortBy === "Price,high to low") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <>
      <Header />
      <div className="all-pri">
        <div className="all-price">Price</div>
        <div className="all-sort">
          Sort by:
          <select name="all-sorting" value={sortBy} onChange={handleSortChange}>
            <option value="Alphabetically,A-Z">Alphabetically, A-Z</option>
            <option value="Alphabetically,Z-A">Alphabetically, Z-A</option>
            <option value="Price,low to high">Price, low to high</option>
            <option value="Price,high to low">Price, high to low</option>
          </select>
        </div>
        <div className="all-prod">{products.length} products</div>
      </div>
      <div className="product-container">
        {sortedProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img
                src={product.image1}
                alt={product.name}
                style={{
                  width: "8cm",
                  height: "10cm",
                  borderRadius: "0px",
                }}
              />
            </Link>
            <div className="product-name">
              <Link to={`/products/${product.id}`}>
                <strong>{product.name}</strong>
              </Link>
            </div>
            <div className="product-price">Price: Rs. {product.price}</div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

