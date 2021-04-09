module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      texto: DataTypes.STRING,
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
