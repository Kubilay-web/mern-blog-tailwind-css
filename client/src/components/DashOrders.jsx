// components/AdminDashboard.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DashOrders = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [paymentsPerPage] = useState(5);
  const [selectedPayment, setSelectedPayment] = useState(null); // State for selected payment details

  useEffect(() => {
    // Fetch payments from API
    axios
      .get("/api/payments")
      .then((response) => {
        setPayments(response.data.payments);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching payments:", error);
        setLoading(false);
      });
  }, []);

  // Prepare chart data
  const chartData = {
    labels: payments.map((payment) => payment.conversationId),
    datasets: [
      {
        label: "Paid Price",
        data: payments.map((payment) => parseFloat(payment.paidPrice || 0)),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Pagination Logic
  const indexOfLastPayment = currentPage * paymentsPerPage;
  const indexOfFirstPayment = indexOfLastPayment - paymentsPerPage;
  const currentPayments = payments.slice(
    indexOfFirstPayment,
    indexOfLastPayment
  );

  const totalPages = Math.ceil(payments.length / paymentsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleRowClick = (payment) => {
    setSelectedPayment(payment === selectedPayment ? null : payment);
  };

  const handleCloseDetails = () => {
    setSelectedPayment(null); // Close the details panel
  };

  return (
    <div className="p-6 max-w-full mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Orders & Payments</h1>

      {/* Payments Table */}
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">Order ID</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Paid Price</th>
              <th className="px-4 py-2 text-left">Payment Status</th>
              <th className="px-4 py-2 text-left">Payment Method</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  Loading...
                </td>
              </tr>
            ) : (
              currentPayments.map((payment) => (
                <tr
                  key={payment.conversationId}
                  onClick={() => handleRowClick(payment)}
                  className="cursor-pointer hover:bg-gray-100"
                >
                  <td className="px-4 py-2">{payment.conversationId}</td>
                  <td className="px-4 py-2">{payment.price}</td>
                  <td className="px-4 py-2">{payment.paidPrice}</td>
                  <td className="px-4 py-2">{payment.status}</td>
                  <td className="px-4 py-2">{payment.paymentChannel}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Payment Details Panel */}
      {selectedPayment && (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>

          {/* Close Button */}
          <button
            onClick={handleCloseDetails}
            className="mb-4 text-red-500 hover:text-red-700"
          >
            Close
          </button>

          <p>
            <strong>Order ID:</strong> {selectedPayment.conversationId}
          </p>
          <p>
            <strong>Price:</strong> {selectedPayment.price}
          </p>
          <p>
            <strong>Paid Price:</strong> {selectedPayment.paidPrice}
          </p>
          <p>
            <strong>Currency:</strong> {selectedPayment.currency}
          </p>
          <p>
            <strong>Installment:</strong> {selectedPayment.installment}
          </p>
          <p>
            <strong>Basket ID:</strong> {selectedPayment.basketId}
          </p>
          <p>
            <strong>Payment Status:</strong> {selectedPayment.status}
          </p>
          <p>
            <strong>Payment Method:</strong> {selectedPayment.paymentChannel}
          </p>

          {/* Customer Information */}
          {selectedPayment.buyer && (
            <>
              <h3 className="mt-4 text-xl font-semibold">Customer Info</h3>
              <p>
                <strong>Name:</strong> {selectedPayment.buyer.name}
              </p>
              <p>
                <strong>Email:</strong> {selectedPayment.buyer.email}
              </p>
            </>
          )}

          {/* Shipping & Billing Address */}
          {selectedPayment.shippingAddress && (
            <>
              <h3 className="mt-4 text-xl font-semibold">Shipping Address</h3>
              <p>{selectedPayment.shippingAddress.address}</p>
              <p>{selectedPayment.shippingAddress.city}</p>
              <p>{selectedPayment.shippingAddress.country}</p>
            </>
          )}

          {selectedPayment.billingAddress && (
            <>
              <h3 className="mt-4 text-xl font-semibold">Billing Address</h3>
              <p>{selectedPayment.billingAddress.address}</p>
              <p>{selectedPayment.billingAddress.city}</p>
              <p>{selectedPayment.billingAddress.country}</p>
            </>
          )}

          {/* Basket Items */}
          {selectedPayment.basketItems &&
            selectedPayment.basketItems.length > 0 && (
              <>
                <h3 className="mt-4 text-xl font-semibold">Basket Items</h3>
                <ul>
                  {selectedPayment.basketItems.map((item, index) => (
                    <li key={index}>
                      {item.name} - {item.price} {item.currency}
                    </li>
                  ))}
                </ul>
              </>
            )}
        </div>
      )}

      {/* Pagination with Numbers */}
      <div className="flex justify-center mb-8">
        <div className="flex space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 rounded-md ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Chart Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Payments Overview</h2>
        <Bar
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              title: { display: true, text: "Total Payments Overview" },
            },
          }}
        />
      </div>
    </div>
  );
};

export default DashOrders;
