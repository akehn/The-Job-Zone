module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      title: {
        type: DataTypes.STRING, 
          validate: { 
            notNull: true, 
            notEmpty: true
        }
      },
      description: {
        type: DataTypes.TEXT,
        validate: { 
          notNull: true, 
          notEmpty: true
        }
      },
      contact_info: {
        type: DataTypes.TEXT,
        validate: { 
          notNull: true, 
          notEmpty: true
        }
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
          type: DataTypes.DATE
      }
    });

  
    return Post;
  };