const Art = require('../../db/db').Art;

module.exports = {
  // Update color for user
  changeColor: (req, res) => {
    req.user.updateAttributes({ markerColor: req.body.color })
      .then(() => res.status(200).send(`Color updated to ${req.body.color}`))
      .catch(err => res.status(500).json(err));
  },

  // Get all art associated with a given user
  getUserArt: (req, res) => {
    console.log(req.user.dataValues.id);
    Art.findAll({ where: { UserId: req.user.dataValues.id } })
      .then(arts => {
        res.status(200).send(JSON.stringify(arts));
      })
      .catch(err => res.status(500).json(err));
  },
};
