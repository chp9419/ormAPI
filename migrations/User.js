const Sequelize = require('sequelize');

class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                name: {
                    type: Sequelize.STRING(20),
                    allowNull: false,
                },
                age: {
                    type: Sequelize.INTEGER.UNSIGNED,
                    allowNull: false,
                },
                phone: {
                    type: Sequelize.STRING,
                },
                created_at: {
                    type: Sequelize.DATE,
                    allowNull: false,
                    defaultValue: Sequelize.NOW,
                },
            },
            {
                sequelize,
                timestamps: false,
                underscored: false,
                modelName: 'User',
                tableName: 'users',
                paranoid: false,
                charset: 'utf8mb4',
                collate: 'utf8mb4_general_ci',
            }
        );
    }
    static associate(db) {}
}

module.exports = User;

// belognsTo and Many
