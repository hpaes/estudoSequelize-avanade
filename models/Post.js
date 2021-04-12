module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      texto: DataTypes.STRING,
      usuarios_id: DataTypes.NUMBER,
      img: DataTypes.STRING,
      n_likes: DataTypes.NUMBER,
    },
    {
      tableName: 'posts',
      timestamps: false,
    }
  );

  return Post;
};
