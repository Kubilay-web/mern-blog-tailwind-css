import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetAllProductsQuery } from "../redux/products/productsApi";
import { addToCart } from "../redux/products/cartSlice";
import { useDispatch } from "react-redux";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetAllProductsQuery();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      const foundProduct = data.find((prod) => prod._id === id);
      setProduct(foundProduct);
    }
  }, [data, id]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (error)
    return (
      <p className="text-center text-red-500">Error loading product details.</p>
    );

  return (
    <div className="container mx-auto py-12 px-6">
      {product ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="flex justify-center items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-lg h-auto object-cover rounded-lg shadow-xl transition-transform transform hover:scale-105 duration-500"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-between">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            <p className="text-xl text-gray-600">{product.brand}</p>
            <p className="text-lg text-gray-700 mt-6">{product.desc}</p>
            <div className="flex items-center justify-between mt-6">
              <p className="text-3xl font-semibold text-blue-600">
                {product.price} TL
              </p>
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-blue-500 text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Product not found</p>
      )}
    </div>
  );
};

export default ProductDetails;
