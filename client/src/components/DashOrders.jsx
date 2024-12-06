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

  return (
    <div className="p-6 max-w-full mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Orders & Payments</h1>

      {/* Payments Table */}
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full table-auto">
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
              payments.map((payment) => (
                <tr key={payment.conversationId}>
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
