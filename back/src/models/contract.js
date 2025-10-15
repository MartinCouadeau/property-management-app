const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('contract', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    tenantId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    propertyId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    monthlyRent: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    deposit: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('ACTIVE', 'TERMINATED', 'EXPIRED'),
      defaultValue: 'ACTIVE',
    },
  }, { timestamps: true });
};
