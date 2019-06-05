const ObjectID = require("mongodb").ObjectID;
const MongoClient = require('mongodb').MongoClient;
const dbHost = 'localhost';
const dbPort = 27017;
const dbName = 'allow';
const dbCollectionName = 'user';

const dbUrl = 'mongodb://' + dbHost + ':' + dbPort;

// Initialise un nouvel utilisateur
exports.insert = (next) => {
    MongoClient.connect(dbUrl, { useNewUrlParser: true })
        .then((client) => {
            client
                .db(dbName)
                .collection(dbCollectionName)
                .insertOne({ graphics: [], sounds: []})
                .then((user) => {
                    next(200, user.ops[0]);
                    client.close();
                })
                .catch((error) => {
                    console.warn(error);
                    next(400, 'An error occurred while trying to add a new user');
                });
        })
        .catch((error) => {
            console.error(error);
            next(500, 'MongoDB responded: ' + error);
        });
};

exports.remove = (userId, next) => {
    MongoClient.connect(dbUrl, { useNewUrlParser: true })
        .then((client) => {
            client
                .db(dbName)
                .collection(dbCollectionName)
                .deleteOne({_id: ObjectID(userId)})
                .then(() => {
                    next(200, "User successfully deleted");
                    client.close();
                })
                .catch((error) => {
                    console.warn(error);
                    next(400, 'An error occurred while trying to delete an user');
                });
        })
        .catch((error) => {
            console.error(error);
            next(500, 'MongoDB responded: ' + error);
        });
};

// Retourne un utilisateur précis
exports.find = (userId, next) => {
    MongoClient.connect(dbUrl, { useNewUrlParser: true })
        .then((client) => {
            client
                .db(dbName)
                .collection(dbCollectionName)
                .findOne(ObjectID(userId))
                .then((user) => {
                    if (user)
                        next(200, user);
                    else
                        next(404, 'This user does not exist');
                    client.close();
                })
                .catch((error) => {
                    console.warn(error);
                    next(400, 'An error occurred while trying to get the user');
                    client.close();
                });
        })
        .catch((error) => {
            console.error(error);
            next(500, 'MongoDB responded: ' + error);
        });
};

// Retourne tous les utilisateurs
exports.findAll = (next) => {
    MongoClient.connect(dbUrl, { useNewUrlParser: true })
        .then((client) => {
            client
                .db(dbName)
                .collection(dbCollectionName)
                .find({})
                .sort({ from: 1 })
                .toArray(function(err, res) {
                    if (err) {
                        next(400, 'An error occurred while trying to get the users');
                        client.close();
                        return;
                    }
                    next(200, res);
                    client.close();
            });
        })
        .catch((error) => {
            console.error(error);
            next(500, 'MongoDB responded: ' + error);
        });
};

// Met à jour les informations graphiques d'un utilisateur
exports.addGraphic = (userId, graphic, next) => {
    MongoClient.connect(dbUrl)
        .then((client) => {
            client
                .db(dbName)
                .collection(dbCollectionName)
                .findOneAndUpdate(ObjectID(userId), { $addToSet: {graphics: graphic} }, { returnOriginal: false })
                .then((user) => {
                    next(200, user.value);
                    client.close();
                })
                .catch((error) => {
                    console.warn(error);
                    next(400, "An error occurred while trying to update an user's graphics");
                });
        })
        .catch((error) => {
            console.error(error);
            next(500, 'MongoDB responded: ' + error);
        });

};

// Met à jour les informations sonores d'un utilisateur
exports.addSound = function (userId, sound, next) {
    MongoClient.connect(dbUrl)
        .then((client) => {
            client
                .db(dbName)
                .collection(dbCollectionName)
                .findOneAndUpdate(ObjectID(userId), { $addToSet: {sounds: sound} }, { returnOriginal: false })
                .then((user) => {
                    next(200, user.value);
                    client.close();
                })
                .catch((error) => {
                    console.warn(error);
                    next(400, "An error occurred while trying to update an user's sounds");
                });
        })
        .catch((error) => {
            console.error(error);
            next(500, 'MongoDB responded: ' + error);
        });
};
