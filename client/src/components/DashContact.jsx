import { useEffect, useState } from "react";

export default function DashContact() {
  const [contactForms, setContactForms] = useState([]);

  useEffect(() => {
    const fetchContactForms = async () => {
      try {
        const res = await fetch("/api/form/get/contact");
        const data = await res.json();

        if (res.ok) {
          setContactForms(data);
        } else {
          console.error("Error fetching contact forms:", data.message);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchContactForms();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Forms</h2>
      {contactForms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactForms.map((form) => (
            <div
              key={form._id}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
            >
              <p className="text-sm text-gray-600">
                <strong className="font-semibold text-gray-700">Name:</strong>{" "}
                {form.nameSurname}
              </p>
              <p className="text-sm text-gray-600">
                <strong className="font-semibold text-gray-700">Email:</strong>{" "}
                {form.email}
              </p>
              <p className="text-sm text-gray-600">
                <strong className="font-semibold text-gray-700">
                  Message:
                </strong>{" "}
                {form.message}
              </p>
              <p className="text-sm text-gray-600">
                <strong className="font-semibold text-gray-700">
                  Submitted At:
                </strong>{" "}
                {new Date(form.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No contact forms available.</p>
      )}
    </div>
  );
}
