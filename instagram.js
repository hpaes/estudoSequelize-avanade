const { Usuario, Post, sequelize, Comentario } = require('./models');

// Usuario.findAll().then((resultado) => {
//   console.table(resultado.map((user) => user.toJSON()));
// });

// Usuario.findOne({
//   where: {
//     nome: 'Gabriel Brunetti',
//   },
// }).then((resultado) => {
//   console.log(resultado.toJSON());
// });

// Usuario.findByPk(3).then((resultado) => {
//   console.log(resultado.toJSON());
// });

// POST
// Post.findAll().then((resultado) => {
//   console.table(resultado.map((post) => post.toJSON()));
// });

// Post.findOne({
//   where: {
//     id: '1',
//   },
// }).then((resultado) => {
//   console.table(resultado.toJSON().texto);
// });

// Post.findByPk(1).then((resultado) => {
//   console.log(resultado.toJSON());
// });

// Comentario
// Comentario.findAll().then((resultado) => {
//   console.table(resultado.map((comment) => comment.toJSON()));
// });

Comentario.findOne({
  where: {
    id: '2',
  },
}).then((resultado) => {
  console.table(resultado.toJSON());
});

Comentario.findByPk(3).then((resultado) => {
  console.log(resultado.toJSON());
});
