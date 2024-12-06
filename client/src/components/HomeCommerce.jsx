import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; // useDispatch eklenmeli
import { useGetAllProductsQuery } from "../redux/products/productsApi";
import { useNavigate } from "react-router-dom"; // useHistory yerine useNavigate
import { addToCart } from "../redux/products/cartSlice";

const HomeCommerce = () => {
  const { data, error, isLoading, refetch } = useGetAllProductsQuery();
  const dispatch = useDispatch(); // useDispatch hook'u eklenmeli
  const navigate = useNavigate(); // useNavigate hook'u kullanılıyor

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  useEffect(() => {
    refetch(); // Refetch data when the page is loaded
  }, [refetch]);

  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occurred: {error.message}</p> // Hata mesajı daha açıklayıcı hale getirildi
      ) : (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {data?.map((product) => (
              <div key={product._id} className="product">
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <div className="details">
                  <span>{product.desc}</span>
                  <span className="price">{product.price}TL</span>
                </div>
                <button onClick={() => handleAddToCart(product)}>
                  Add To Cart
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
