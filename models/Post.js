module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define(
        "Post",
        {
            texto: DataTypes.STRING,
            usuarios_id: DataTypes.NUMBER,
            img: DataTypes.STRING,
            n_likes: DataTypes.NUMBER,
        },
        {
            tableName: "posts",
            timestamps: false,
        }
    );

    Post.associate = (models) => {
        Post.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "usuarios_id",
        });
    };

    Post.associate = (models) => {
        Post.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "posts_id",
        });
    };

    return Post;
};
