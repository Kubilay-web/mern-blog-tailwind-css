import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetAllProductsQuery } from "../redux/products/productsApi";
import { addToCart } from "../redux/products/cartSlice";
import { Link } from "react-router-dom"; // Import Link for navigation

const HomeCommerce = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, error, isLoading, refetch } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = data?.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div className="home-container">
      <div className="flex justify-center py-4">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="px-4 py-2 border border-gray-300 rounded-md w-1/2 md:w-1/3"
        />
      </div>
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">
          An error occurred: {error.message}
        </p>
      ) : (
        <>
          <h2 className="text-center text-2xl font-bold py-6">New Arrivals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts?.map((product) => (
              <div
                key={product._id}
                className="border rounded-lg overflow-hidden shadow-lg"
              >
                {/* Use Link to navigate to the product details page */}
                <Link to={`/product/${product._id}`} className="block">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <p className="text-gray-600">{product.desc}</p>
                    <p className="text-lg font-bold text-blue-600">
                      {product.price} TL
                    </p>
                  </div>
                </Link>
                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HomeCommerce;
