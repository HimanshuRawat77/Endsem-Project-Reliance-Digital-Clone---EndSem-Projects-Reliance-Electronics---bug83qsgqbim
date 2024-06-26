import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProductsByCategory } from "../utils/api.js";

const TopRated = () => {
  const [products, setProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchTopRatedProducts = async () => {
      const fetchedProducts = await fetchProductsByCategory("top rated");
      setProducts(fetchedProducts);
    };
    

    fetchTopRatedProducts();
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  return (
    <div className="my-8 text-center bg-[#FAFAF9]">
      <h2 className="text-2xl text-black font-bold mb-4">Top Rated</h2>
      <div className="relative inline-block">
        <div className="flex overflow-x-auto space-x-4 justify-center">
          <div className="hover text-red-600 "></div>
          {products
            .slice(currentSlide * 5, (currentSlide + 1) * 5)
            .map((product) => (
              <Link
                key={product._id}
                to={`/products/${product._id}`}
                className="flex-shrink-0 w-60 bg-[#FAFAF9] p-4 rounded-lg shadow-md"
              >
                <img
                  src={product.displayImage}
                  alt={product.name}
                  className="w-full h-32 object-contain mb-2 rounded"
                />
                <h3 className="text-lg text-black font-semibold">
                  {product.name}
                </h3>
                <p className="text-[#0f0d0d]">${product.price}</p>
              </Link>
            ))}
        </div>
        <button
          onClick={handlePrevSlide}
          disabled={currentSlide === 0}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full ${
            currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          style={{ marginLeft: "10px" }}
        >
          &lt;
        </button>
        <button
          onClick={handleNextSlide}
          disabled={(currentSlide + 1) * 5 >= products.length}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full ${
            (currentSlide + 1) * 5 >= products.length
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          style={{ marginRight: "10px" }}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default TopRated;
