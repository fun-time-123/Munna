const aiEngine = async (stock) => {
  // Example rule-based logic (can upgrade to ML later)
  const stopLoss = Math.floor(Math.random() * 3) + 95;
  const targetProfit = stopLoss + Math.floor(Math.random() * 10) + 5;

  return {
    stock,
    suggestion: "Buy",
    stopLoss: stopLoss.toFixed(2),
    target: targetProfit.toFixed(2),
    confidence: `${Math.floor(Math.random() * 15) + 85}%`
  };
};

module.exports = aiEngine;