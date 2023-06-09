const Category = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: { allowNull: false, type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING }
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'categories',
  },
  );
   return Category;
};

module.exports = Category;