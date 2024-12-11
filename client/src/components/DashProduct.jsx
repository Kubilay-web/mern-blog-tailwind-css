import React, { useState, useEffect } from "react";
import axios from "axios";

const DashProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    brand: "",
    desc: "",
    price: "",
    image: null,
  });
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Ürünleri getirme
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://mern-blog-0lv8.onrender.com/api/products"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Ürünler alınırken hata oluştu:", error);
      }
    };
    fetchProducts();
  }, []);

  // Form inputlarını işleme
  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  // Görsel dosyası değişimi
  const handleImageChange = (e) => {
    setNewProduct({ ...newProduct, image: e.target.files[0] });
  };

  // Yeni ürün ekleme veya var olan ürünü güncelleme işlemi
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", newProduct.name);
    formData.append("brand", newProduct.brand);
    formData.append("desc", newProduct.desc);
    formData.append("price", newProduct.price);
    formData.append("image", newProduct.image);

    try {
      let response;
      if (editingProduct) {
        // Mevcut ürünü güncelle
        response = await axios.put(
          `https://mern-blog-0lv8.onrender.com/api/products/${editingProduct._id}`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        // Ürün güncellendikten sonra listeyi güncelle
        setProducts((prev) =>
          prev.map((product) =>
            product._id === editingProduct._id ? response.data : product
          )
        );

        setEditingProduct(null); // Düzenleme sonrasında edit modunu sıfırla
        setShowModal(false); // Modalı kapat
      } else {
        // Yeni ürün ekle
        response = await axios.post(
          "https://mern-blog-0lv8.onrender.com/api/products",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        // Yeni ürünü listeye ekle
        setProducts((prev) => [...prev, response.data]);
      }
      alert("Ürün başarıyla yüklendi!");
      setNewProduct({
        name: "",
        brand: "",
        desc: "",
        price: "",
        image: null,
      });
    } catch (error) {
      console.error("Ürün yüklenirken hata oluştu:", error);
      alert(
        "Ürün yüklenirken hata oluştu: " +
          (error.response?.data?.error || error.message)
      );
    }
  };

  // Düzenleme işlemi için modalı aç
  const handleEdit = (product) => {
    setEditingProduct(product);
    setNewProduct({
      name: product.name,
      brand: product.brand,
      desc: product.desc,
      price: product.price,
      image: null, // Eğer yeni bir görsel seçilecekse, mevcut görseli sıfırla
    });
    setShowModal(true); // Modalı göster
  };

  // Ürünü silme işlemi
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://mern-blog-0lv8.onrender.com/api/products/${id}`
      );
      setProducts(products.filter((product) => product._id !== id));
      alert("Ürün başarıyla silindi!");
    } catch (error) {
      console.error("Ürün silinirken hata oluştu:", error);
      alert(
        "Ürün silinirken hata oluştu: " +
          (error.response?.data?.error || error.message)
      );
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-6">
        {editingProduct ? "Ürünü Düzenle" : "Yeni Ürün Ekle"}
      </h1>

      {/* Ürün Formu */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-8 rounded-lg shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700"
            >
              Ürün Adı
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={newProduct.name}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Ürün Adı"
            />
          </div>

          <div>
            <label
              htmlFor="brand"
              className="block text-lg font-medium text-gray-700"
            >
              Marka
            </label>
            <input
              type="text"
              id="brand"
              name="brand"
              value={newProduct.brand}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Marka"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="desc"
            className="block text-lg font-medium text-gray-700"
          >
            Açıklama
          </label>
          <textarea
            id="desc"
            name="desc"
            value={newProduct.desc}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Ürün Açıklaması"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="price"
              className="block text-lg font-medium text-gray-700"
            >
              Fiyat
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={newProduct.price}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Fiyat"
            />
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-lg font-medium text-gray-700"
            >
              Ürün Görseli
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              className="w-full mt-2 text-gray-700 border rounded-md shadow-sm focus:outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300"
        >
          {editingProduct ? "Ürünü Güncelle" : "Ürün Ekle"}
        </button>
      </form>

      {/* Ürün Listesi */}
      <h2 className="text-2xl font-bold text-center mt-12 mb-6">
        Ürünler Listesi
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-700">{product.brand}</p>
            <p className="text-gray-500 text-sm">{product.desc}</p>
            <p className="text-xl font-semibold mt-2">${product.price}</p>

            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleEdit(product)}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Düzenle
              </button>
              <button
                onClick={() => handleDelete(product._id)}
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-1/2">
            <h2 className="text-xl font-bold mb-4">Ürün Düzenle</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-lg">Ürün Adı</label>
                <input
                  type="text"
                  name="name"
                  value={newProduct.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-lg">Marka</label>
                <input
                  type="text"
                  name="brand"
                  value={newProduct.brand}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-lg">Açıklama</label>
                <textarea
                  name="desc"
                  value={newProduct.desc}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md"
                ></textarea>
              </div>
              <div>
                <label className="block text-lg">Fiyat</label>
                <input
                  type="number"
                  name="price"
                  value={newProduct.price}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-lg">Ürün Görseli</label>
                <input
                  type="file"
                  name="image"
                  onChange={handleImageChange}
                  className="w-full py-2 border rounded-md"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-md"
              >
                Güncelle
              </button>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="w-full mt-2 bg-gray-500 text-white py-2 rounded-md"
              >
                Kapat
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashProduct;
