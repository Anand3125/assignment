import React, { useState, useEffect } from "react";
import axios from "../utils/api";

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the data from the backend API
    const fetchData = async () => {
      try {
        const response = await axios.get("/data"); // Adjust your API endpoint as needed
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">Submitted Data</h1>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">Full Name</th>
            <th className="border px-4 py-2">Date of Birth</th>
            <th className="border px-4 py-2">Qualification</th>
            <th className="border px-4 py-2">Other Qualification</th>
            <th className="border px-4 py-2">Message/Comments</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.fullName}</td>
              <td className="border px-4 py-2">{item.dob}</td>
              <td className="border px-4 py-2">{item.qualification}</td>
              <td className="border px-4 py-2">
                {item.otherQualification || "N/A"}
              </td>
              <td className="border px-4 py-2">{item.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
