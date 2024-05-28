import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../utils/api";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const fetchedProduct = await fetchProductById(productId);
        setProduct(fetchedProduct);
        setSelectedImage(fetchedProduct.images[0]); // Set the first image as default
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    getProduct();
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4 h-screen flex justify-center items-center bg-[#FAFAF9]">
      <div className="flex flex-col md:flex-row">
        <div
          className="md:w-1/6 mb-4 md:mb-0 flex justify-center items-center overflow-auto"
          style={{ maxHeight: "400px" }}
        >
          <div className="flex flex-col items-center">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product Image ${index}`}
                className="w-full h-auto cursor-pointer rounded border mb-2"
                onClick={() => setSelectedImage(image)}
               
              />
            ))}
          </div>
        </div>
        <div className="md:w-1/2 pl-4 mb-4 md:mb-0">
          <div className="mb-4">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-auto object-cover rounded"
            />
          </div>
        </div>
        <div className="md:w-1/3 pl-4">
          <h1 className="text-2xl text-[#F43F5E] font-bold mb-2">
            {product.name}
          </h1>
          <h1 className="hover:first-line text-[#F43F5E]"> {product.name}</h1>
          <h2 className="text-xl text-[#171717] mb-4">${product.price}</h2>
          <div className="bg-[#FAFAF9] p-4 rounded-lg shadow-md">
            <h3 className="text-lg text-[#171717] font-semibold mb-2">
              Key Features
            </h3>
            <ul>
              {product.features
                .slice(0, showMore ? product.features.length : 3)
                .map((feature, index) => (
                  <li key={index} className="text-black">
                    {feature}
                  </li>
                ))}
            </ul>
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-[#F43F5E] mt-2 hover:underline"
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
            {/* <div className="hover: text-[#F43f5E]"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
