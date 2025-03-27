import { useState } from "react";
import Product from "./Product";

const productionInitialData = {
  titile: "iPhone 15 pro",
  description: " Ami kinte parbo na karon ami gorib",
  price: 200000,
  isInCart: false,
};

export default function Example4() {
  const [product, setProduct] = useState(productionInitialData);

  const handleAddToCart = () => {
    setProduct({
      ...product,
      isInCart: true,
    });
  };

  return (
    <div >
      <Product product={product} addToCart={handleAddToCart} />
    </div>
  );
}
