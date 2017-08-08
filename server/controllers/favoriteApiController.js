const User = require('../models/User');
const Place = require('../models/Place');
const FavoriteRelation = require('../models/FavoriteRelation');

module.exports = {

  index: (req, res, next) => {
    const placeId = req.params.id;
    FavoriteRelation.find({
        placeID: placeId
      })
      .exec().then(favoriteRelations => {
        relationsPromise = [];
        favoriteRelations.forEach(relation => {
          relationsPromise.push(
            new Promise((resolve, reject) => {
              relation.populate('userID', (err, userPopulated) => {
                resolve(userPopulated);
              });
            })
          );
        });
        Promise.all(relationsPromise).then(populatedUsersResolved => {
          res.status(200).json(populatedUsersResolved);
        });
      })
      .catch(e => res.json(e));
  }
};
