const aiEngine = require("../services/aiEngine");

const analyzeStock = async (req, res) => {
  const { stock } = req.body;

  if (!stock) {
    return res.status(400).json({ error: "Stock name is required" });
  }

  const result = await aiEngine(stock.toUpperCase());
  res.json(result);
};

module.exports = analyzeStock;