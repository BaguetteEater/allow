module.exports = {
    // Retourne un objet JSON "graphic" sous la forme disponible dans user-example.json
    transformInGraphic: function(questionId, attributes) {

        // Exemple que j'utilise pour tester
        return {
            "type": "polygon",
            "attributes": {
                "shape": "square",
                "3D": true,
                "color": "#FF0000"
            },
            "scale": 100,
            "material": "autretruc",
            "coordinates": {
                "x": 1,
                "y": 0,
                "z": -5
            }
        }

    },

    // Retourne un objet JSON "sound" sous la forme disponible dans user-example.json
    transformInSound: function (questionId, attributes) {

        // Exemple que j'utilise pour tester
        return {
            "type": "creation",
            "attributes": {
                "frequency": 2000
            },
            "rythm": 4
        };
    }
};
