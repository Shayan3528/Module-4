import { useEffect, useState } from "react";

export default function Product({ product, addToCart }) {
  const [notificationMessage, setNotificationMessage] = useState(null);

  // useEffect(() => {
  //   if (product.isInCart) {
  //     showNotification(`Added ${product.titile} to the shopping cart!`);
  //   }
  // }, [product]);


  function handleBuyClick() {
    addToCart(product);
  }
  function handleCheckoutClick() {
    addToCart(product);
    nevigateTo("/checkout");
  }

  function showNotification(msg) {
    setNotificationMessage(msg);
  }

  function nevigateTo(url) {
    console.log(`Assume that we have nevigated to ${url}`);
  }

  return (
    <div className=" p-3 m-1 ">
      <div className=" border border-gray-100 bg-amber-100 px-3 py-2 rounded mb-10 ">
        <h2 className="font-bold "> {product.titile}</h2>
        <p className=" m-2">{product.description}</p>
        <h1 className="mt-5 ml-2 font-bold">{product.price.toFixed(2)} tk </h1>

        <div>
          <button
            className="border border-gray-400 rounded bg-white px-3 py-0.5 mr-4 mt-5 font-bold text-green-900 hover:bg-gray-200"
            onClick={handleBuyClick}
          >
            {" "}
            Buy Now{" "}
          </button>
          <button
            className="border border-gray-400 rounded bg-white px-3 py-0.5 mr-4 mt-5 font-bold text-green-900 hover:bg-gray-200"
            onClick={handleCheckoutClick}
          >
            Checkout
          </button>
        </div>
      </div>

      {notificationMessage && (
        <div
          className="bg-cyan-100 px-2 py-2 rounded-xl font-bold "
          onClick={() => setNotificationMessage(null)}
        >
          <span> {notificationMessage}</span>
        </div>
      )}
    </div>
  );
}
