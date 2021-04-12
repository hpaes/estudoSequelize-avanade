const { Usuario, Post, sequelize, Comentario } = require('./models');
const { Op } = require('sequelize');

//Usuario

// Usuario.create({
//   nome: 'Rogerio Parízio',
//   email: 'rogerio@email.com',
//   senha: 'rogerio123',
// }).then((resultado) => {
//   console.table(resultado.toJSON());
// });

Usuario.update(
  {
    email: 'sergio@digitalhouse.com',
  },
  {
    where: {
      nome: { [Op.like]: 'Sergio%' },
    },
  }
).then((resultado) => {
  console.log(resultado);
});

// Usuario.destroy({
//   where: {
//     id: 3,
//   },
// }).then((resultado) => {
//   console.log(resultado);
// });

// Usuario.findAll({
//   where: {
//     nome: { [Op.like]: '%a%' },
//   },
// }).then((resultado) => {
//   console.table(resultado.map((user) => user.toJSON()));
// });

// Usuario.findAll({
//   where: {
//     nome: { [Op.notLike]: '%a%' },
//   },
// }).then((resultado) => {
//   console.table(resultado.map((user) => user.toJSON()));
// });

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

//POST;

// Post.create({
//   texto: 'NodeJS é top de bola!',
//   usuarios_id: 7,
//   n_likes: 1,
// }).then((resultado) => {
//   console.log(resultado.toJSON());
// });

// Post.findAll({
//   order: [['texto', 'ASC']],
//   limit: 2,
//   offset: 2,
// }).then((resultado) => {
//   console.log(resultado.map((post) => post.toJSON()));
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

// Post.findAll({}).then((resultado) => {
//   console.log(resultado.map((post) => post.toJSON()));
// });

// Comentario
// for (let i = 0; i < 6; i += 2) {
//   Comentario.findAll({
//     order: [['id', 'DESC']],
//     offset: i,
//     limit: 2,
//   }).then((resultado) => {
//     console.table(resultado.map((comment) => comment.toJSON()));
//   });
// }

// Comentario.findOne({
//   where: {
//     id: '2',
//   },
// }).then((resultado) => {
//   console.table(resultado.toJSON());
// });

// Comentario.findByPk(3).then((resultado) => {
//   console.log(resultado.toJSON());
// });
