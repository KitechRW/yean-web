'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('files', {
            id: {
                type: Sequelize.STRING,
                primaryKey: true
            },
            filename: {
                type: Sequelize.STRING,
                allowNull: false
            },
            originalName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            mimeType: {
                type: Sequelize.STRING,
                allowNull: false
            },
            size: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            publicUrl: {
                type: Sequelize.STRING,
                allowNull: false
            },
            uploadDate: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            }
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('files');
    }
};
