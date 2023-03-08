const { CreateCategory } = require('../services');

const createCategory = async (req, res) => {
    const { name } = req.body;
    const category = await CreateCategory.createCategory({ name });
    if (!name) return res.status(400).json({ message: '"name" is required' });
    return res.status(201).json(category);
};

module.exports = createCategory;