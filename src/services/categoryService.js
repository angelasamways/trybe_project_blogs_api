const { Category } = require('../models');

const createCategory = ({ name }) => Category.create({ name });

const getCategories = () => Category.findAll();

const isCategoryExists = async (categoryIds) => {
  const categories = await Promise.all(
    categoryIds.map(async (id) => Category.findByPk(id)),
  );
  if (categories.some((id) => !id)) return false;
  return true;
};

module.exports = {
  createCategory,
  getCategories,
  isCategoryExists,
};