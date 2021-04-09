module.exports = (sequelize, DataTypes) => {
  const Comentario = sequelize.define(
    'Comentario',
    {
      texto: DataTypes.STRING,
      posts_id: DataTypes.NUMBER,
    },
    {
      tableName: 'comentarios',
      timestamps: false,
    }
  );

  return Comentario;
};
