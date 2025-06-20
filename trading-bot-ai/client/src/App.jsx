import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [stock, setStock] = useState("");
  const [response, setResponse] = useState(null);

  const analyzeStock = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/analyze", { stock });
      setResponse(res.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-4">📊 ChartMitra - Your Trading Buddy</h1>
      <input
        className="p-2 text-black rounded mr-2"
        type="text"
        placeholder="Enter stock name (e.g., TCS)"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />
      <button
        onClick={analyzeStock}
        className="px-4 py-2 bg-green-600 rounded hover:bg-green-700"
      >
        Analyze
      </button>

      {response && (
        <div className="mt-6 bg-gray-800 p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-2">Result</h2>
          <p><b>Stock:</b> {response.stock}</p>
          <p><b>Suggestion:</b> {response.suggestion}</p>
          <p><b>Stop Loss:</b> ₹{response.stopLoss}</p>
          <p><b>Target:</b> ₹{response.target}</p>
          <p><b>Confidence:</b> {response.confidence}</p>
        </div>
      )}
    </div>
  );
};

export default App;