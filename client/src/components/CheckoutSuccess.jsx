import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getTotals } from "../redux/products/cartSlice"; // clearCart burada kullanılmadığı için import etmiyoruz
import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [paymentStatus, setPaymentStatus] = useState(null); // Başarı durumu

  useEffect(() => {
    if (cart.cartTotalAmount === 0) {
      // Eğer ödeme başarılıysa, ödeme durumu başarıya ayarlanır
      setPaymentStatus("success");
    } else {
      // Eğer ödeme başarısızsa, ödeme durumu başarısız yapılır
      setPaymentStatus("failure");
    }
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <Container status={paymentStatus}>
      {paymentStatus === "success" ? (
        <>
          <h2>Ödeme Başarılı</h2>
          <p>Siparişiniz işleme alınmaya başlandı.</p>
          <p>
            Sipariş durumu için profilinizden yaklaşık 10 dakika sonra kontrol
            edebilirsiniz.
          </p>
          <p>
            Yardım için bizimle iletişime geçebilirsiniz:{" "}
            <strong>support@onlineshop.com</strong>
          </p>
          <div className="mt-3">
            <Link to="/">
              <b>Ana Sayfaya Git</b>
            </Link>
          </div>
        </>
      ) : (
        <>
          <h2>Ödeme Başarısız</h2>
          <p>Ödeme işlemi başarısız oldu. Lütfen tekrar deneyin.</p>
          <div className="mt-3">
            <Link to="/checkout">
              <b>Ödemeyi Tekrar Yap</b>
            </Link>
          </div>
        </>
      )}
    </Container>
  );
};

export default CheckoutSuccess;

const Container = styled.div`
  min-height: 80vh;
  max-width: 800px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin-bottom: 0.5rem;
    color: ${(props) =>
      props.status === "success"
        ? "#029e02"
        : "#d9534f"}; /* Başarı yeşil, hata kırmızı */
  }

  p {
    text-align: center;
  }

  .mt-3 {
    margin-top: 1rem;
  }
`;
