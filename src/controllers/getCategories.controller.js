const { CategoryService } = require('../services');

const getCategories = async (_req, res) => {
  try {
    const categories = await CategoryService.getCategories();

    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = getCategories;