import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTotals } from "../redux/products/cartSlice";
import "../commerce.css";

const Checkout = () => {
  const { currentUser } = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Sepet verileri varsa, toplamları hesaplayın
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  // Sepet öğelerini basketItems'a aktarıyoruz
  const basketItems =
    cart.cartItems && Array.isArray(cart.cartItems) ? cart.cartItems : [];

  const [paymentDetails, setPaymentDetails] = useState({
    locale: "tr",
    conversationId: "123456789", // Örnek ID, her işlem için benzersiz olmalı
    price: cart.cartTotalAmount || 0, // Ödeme fiyatı (örneğin: 1 TL)
    paidPrice: cart.cartTotalAmount || 0, // Ödenen fiyat
    currency: "TRY", // Para birimi
    installment: "1", // Taksit sayısı
    basketId: "B67832", // Sepet ID'si
    paymentChannel: "WEB", // Ödeme kanalı
    paymentGroup: "PRODUCT", // Ödeme grubu
    paymentCard: {
      cardHolderName: "", // Kart sahibi ismi
      cardNumber: "", // Kart numarası
      expireMonth: "", // Son kullanma ayı
      expireYear: "", // Son kullanma yılı
      cvc: "", // CVC kodu
      registerCard: "0", // Kart kaydetme isteği (0 ise kayıt etme)
    },
    buyer: {
      id: currentUser?._id || "BY789", // Kullanıcı ID'si
      name: currentUser?.name || "John", // Kullanıcı adı
      surname: currentUser?.surname || "Doe", // Kullanıcı soyadı
      gsmNumber: currentUser?.gsmNumber || "+905350000000", // Kullanıcı telefon numarası
      email: currentUser?.email || "email@email.com", // Kullanıcı email
      identityNumber: "74300864791", // Kimlik numarası
      lastLoginDate: "2015-10-05 12:43:35", // Son giriş tarihi
      registrationDate: "2013-04-21 15:12:09", // Kayıt tarihi
      registrationAddress: "dfgdfgfdgfd", // Kayıt adresi
      ip: "85.34.78.112", // Kullanıcının IP adresi
      city: currentUser?.city || "Istanbul", // Şehir
      country: "Turkey", // Ülke
      zipCode: "34732", // Posta kodu
    },
    shippingAddress: {
      contactName: currentUser?.name || "", // Teslimat adı
      city: currentUser?.city || "", // Şehir
      country: "Turkey", // Ülke
      address: "", // Teslimat adresi
      zipCode: "", // Posta kodu
    },
    billingAddress: {
      contactName: currentUser?.name || "Jane Doe", // Fatura adı
      city: currentUser?.city || "Istanbul", // Şehir
      country: "Turkey", // Ülke
      address: "sdfdsfdsfsdsdfds", // Fatura adresi
      zipCode: "34742", // Posta kodu
    },
    basketItems: basketItems.map((item) => ({
      id: item._id, // Ürün ID'si
      name: item.name, // Ürün adı
      category1: item.category1 || "Other", // Kategori 1 (Varsa)
      category2: item.category2 || "Other", // Kategori 2 (Varsa)
      itemType: item.itemType || "PHYSICAL", // Fiziksel/Virtüel
      price: item.price || 0, // Ürün fiyatı
    })),
    cartTotalAmount: cart.cartTotalAmount || 0, // Sepet toplam tutarı
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nameParts = name.split(".");

    if (nameParts[0] === "paymentCard") {
      setPaymentDetails((prevDetails) => ({
        ...prevDetails,
        paymentCard: {
          ...prevDetails.paymentCard,
          [nameParts[1]]: value,
        },
      }));
    } else if (nameParts[0] === "buyer") {
      setPaymentDetails((prevDetails) => ({
        ...prevDetails,
        buyer: {
          ...prevDetails.buyer,
          [nameParts[1]]: value,
        },
      }));
    } else if (nameParts[0] === "shippingAddress") {
      setPaymentDetails((prevDetails) => ({
        ...prevDetails,
        shippingAddress: {
          ...prevDetails.shippingAddress,
          [nameParts[1]]: value,
        },
      }));
    } else if (nameParts[0] === "billingAddress") {
      setPaymentDetails((prevDetails) => ({
        ...prevDetails,
        billingAddress: {
          ...prevDetails.billingAddress,
          [nameParts[1]]: value,
        },
      }));
    } else {
      setPaymentDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value,
      }));
    }
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const apiUrl = "https://mern-blog-0lv8.onrender.com/api/payments/create"; // API endpoint

    try {
      // Ödeme verilerini API'ye gönderiyoruz
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentDetails), // JSON olarak ödeme verilerini gönderiyoruz
      });

      const responseData = await response.json(); // Yanıtı JSON olarak alıyoruz
      console.log(responseData); // Yanıtı konsola yazdırın

      if (response.ok) {
        navigate("/checkout-success"); // Ödeme başarılıysa başarı sayfasına yönlendir
      } else {
        alert("Ödeme işlemi başarısız oldu. Lütfen tekrar deneyin.");
      }
    } catch (error) {
      console.error("Error during payment:", error);
      alert("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">
        Ödeme Sayfası
      </h1>
      <form onSubmit={handlePayment} className="space-y-6">
        {/* Ödeme Kartı Bilgileri */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Ödeme Kartı Bilgileri
          </h3>
          <div className="space-y-4">
            <input
              type="text"
              name="paymentCard.cardHolderName"
              value={paymentDetails.paymentCard.cardHolderName}
              onChange={handleChange}
              placeholder="Kart Sahibi"
              required
            />
            <input
              type="text"
              name="paymentCard.cardNumber"
              value={paymentDetails.paymentCard.cardNumber}
              onChange={handleChange}
              placeholder="Kart Numarası"
              required
            />
            <input
              type="text"
              name="paymentCard.expireMonth"
              value={paymentDetails.paymentCard.expireMonth}
              onChange={handleChange}
              placeholder="Son Kullanma Ayı"
              required
            />
            <input
              type="text"
              name="paymentCard.expireYear"
              value={paymentDetails.paymentCard.expireYear}
              onChange={handleChange}
              placeholder="Son Kullanma Yılı"
              required
            />
            <input
              type="text"
              name="paymentCard.cvc"
              value={paymentDetails.paymentCard.cvc}
              onChange={handleChange}
              placeholder="CVC"
              required
            />
          </div>
        </div>

        {/* Shipping Address */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Teslimat Bilgileri
          </h3>
          <div className="space-y-4">
            <input
              type="text"
              name="shippingAddress.contactName"
              value={paymentDetails.shippingAddress.contactName}
              onChange={handleChange}
              placeholder="Teslimat Adı"
              required
            />
            <input
              type="text"
              name="shippingAddress.address"
              value={paymentDetails.shippingAddress.address}
              onChange={handleChange}
              placeholder="Teslimat Adresi"
              required
            />
            <input
              type="text"
              name="shippingAddress.city"
              value={paymentDetails.shippingAddress.city}
              onChange={handleChange}
              placeholder="Şehir"
              required
            />
            <input
              type="text"
              name="shippingAddress.zipCode"
              value={paymentDetails.shippingAddress.zipCode}
              onChange={handleChange}
              placeholder="Posta Kodu"
              required
            />
          </div>
        </div>

        {/* Sepet Bilgileri */}
        <div className="cart-items">
          {cart.cartItems?.map((cartItem) => (
            <div className="cart-item" key={cartItem.id}>
              <div className="cart-product">
                <img src={cartItem.image} alt={cartItem.name} />
                <div>
                  <h3>{cartItem.name}</h3>
                  <p>{cartItem.desc}</p>
                </div>
              </div>

              <div className="cart-product-price">{cartItem.price}TL</div>
              <div className="cart-product-quantity">
                <div className="count">x{cartItem.cartQuantity}</div>
              </div>

              <div className="cart-product-total-price">
                {cartItem.price * cartItem.cartQuantity}TL
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-4 align-baseline">
          <span>
            <b>Subtotal</b>
          </span>
          <span>{cart.cartTotalAmount}TL</span>
        </div>

        {/* Continue Shopping Button */}
        <div className="flex justify-start">
          <button
            type="button"
            className="bg-gray-600 text-white px-6 py-2 rounded-lg shadow-md"
            onClick={() => navigate("/homecommerce")}
          >
            Continue Shopping
          </button>
        </div>

        {/* Ödeme Butonu */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md"
            disabled={isLoading}
          >
            {isLoading ? <div className="loader"></div> : "Ödeme Yap"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
