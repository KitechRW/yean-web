module.exports = {
    up: (queryInterface, DataTypes) =>
      queryInterface.createTable('extension_materials', {
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          unique: true,
        },
        title: DataTypes.TEXT,
        slug: DataTypes.TEXT,
        image: DataTypes.STRING,
        text: DataTypes.TEXT('long'),
        category_id: DataTypes.INTEGER,
        subcategory_id: DataTypes.INTEGER,
        material: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        views: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        author_id: DataTypes.INTEGER,
        tags: DataTypes.STRING,
        comment: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        createdAt:{
            type:DataTypes.DATE,
            allowNull: false,
            defaultValue:DataTypes.NOW
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE, 
            defaultValue:DataTypes.NOW
        }
      }),
    down: queryInterface => queryInterface.dropTable('extension_materials'),
  };
  