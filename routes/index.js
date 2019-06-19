let express = require('express');
const users = require("../dao/users");
const transform = require("../transform");
let router = express.Router();

// Initialise un nouvel utilisateur
router.post('/add', (req, res) => {
    users.insert((status, msg) => {
        res.status(status).send(msg);
    });

});

// Retourne tous les utilisateurs
router.get('/users', (req, res) => {
    users.findAll((status, msg) => {
        if (status === 200)
            res.header('Content-Type', 'application/json');
        res.status(status).send(msg);
    });
});

// Retourne un utilisateur en fonction de son ID
router.get('/users/:userId', (req, res) => {
    users.find(req.params.userId, (status, msg) => {
        if (status === 200)
            res.header('Content-Type', 'application/json');
        res.status(status).send(msg);
    });
});

// Supprime un utilisateur en fonction de son ID
router.delete('/users/:userId', (req, res) => {
    users.remove(req.params.userId, (status, msg) => {
        res.status(status).send(msg);
    });
});

// Ajoute un graphic à un userId en fonction de la réponse à une question et retourne l'user associé
// Body sous la forme: { "questionId": 1, "attributes": {} }
router.post('/question/:userId', (req, res) => {
    const userId = req.params.userId;
    const questionId = parseInt(req.body.questionId);
    const attributes = req.body.attributes;
    console.log(questionId);
    const graphic = transform.transformInGraphic(questionId, attributes);
    console.log(graphic);
    users.addGraphic(userId, graphic, (status, msg) => {
        if (status === 200)
            res.header('Content-Type', 'application/json');
        console.log(status);
        console.log(msg);
        res.status(status).send(msg);
    });

    const sound = transform.transformInSound(questionId, attributes);
    /*users.addSound(userId, sound, (status, msg) => {
        if (status === 200)
            res.header('Content-Type', 'application/json');
        res.status(status).send(msg);
    });*/
});


// Vérifie la syntaxe d'un graphic, potentiellement déjà déprécié
checkGraphicObject = (graphic) => {
    return (
        graphic !== undefined &&
        graphic.id !== undefined && Number.isInteger(graphic.id) &&
        graphic.type !== undefined && graphic.type.match('(^polygon$|^word$|^glow$|^picture$)') &&
        graphic.attributes !== undefined &&
        graphic.scale !== undefined && Number.isInteger(graphic.scale)
    )
};


module.exports = router;
