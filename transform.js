module.exports = {
    // Retourne un objet JSON "graphic" sous la forme disponible dans user-example.json

    transformInGraphic: function (questionId, attributes) {
        switch(questionId){
            case 1:
                switch(attributes.genre){
                    case "h":
                        return {
                            "type": "polygon",
                            "properties":
                                {
                                    "shape": "cube",
                                    "3D": true,
                                    "color": '#' + (function co(lor){   return (lor +=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])&& (lor.length === 6) ?  lor : co(lor); })('')
                                },
                            "scale": 20,        //pourcentage
                            "material": "truc",   // need liste matériaux
                            "coordinates":
                                {
                                    "x": 0,       // première question donc première forme au centre
                                    "y": 0,
                                    "z": 0
                                }
                        };

                    case "f":
                        console.log("couou");
                        return{
                            "type": "polygon",
                            "properties":
                                {
                                    "shape": "cube",
                                    "3D": true,
                                    "color": '#' + (function co(lor){   return (lor +=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])&& (lor.length === 6) ?  lor : co(lor); })('')
                                },
                            "scale": 20,        //pourcentage
                            "material": "truc",   // need liste matériaux
                            "coordinates":
                                {
                                    "x": 0,       // première question donc première forme au centre
                                    "y": 0,
                                    "z": 0
                                }
                        };

                    case "nb":
                        return{
                            "type": "polygon",
                            "properties":
                                {
                                    "shape": "cube",
                                    "3D": true,
                                    "color": '#' + (function co(lor){   return (lor +=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])&& (lor.length === 6) ?  lor : co(lor); })('')
                                },
                            "scale": 20,        //pourcentage
                            "material": "truc",   // need liste matériaux
                            "coordinates":
                                {
                                    "x": 0,       // première question donc première forme au centre
                                    "y": 0,
                                    "z": 0
                                }
                        };
                }

                break;

            case 2:
                let boucle = attributes.name;
                attributes.name = attributes.name.toLowerCase();
                let newname = "";
                let permut = "";
                let pos;

                for (let i=0; i<(boucle.length);i++) {
                    permut = "";

                    while(permut === ""){
                        pos = Math.floor(Math.random()*attributes.name.length);
                        permut = attributes.name.charAt(pos);
                    }

                    attributes.name=attributes.name.replace(permut,"");
                    newname+=permut;
                }
                return{
                    "type": "word",
                    "properties":
                        {
                            "word": "newname",
                            "moving":true,
                            "3D": true,
                            "color": '#' + (function co(lor){   return (lor +=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])&& (lor.length === 6) ?  lor : co(lor); })('')
                        },
                    "scale": 20,        //pourcentage
                    "material": "truc",   // need liste matériaux
                    "coordinates":
                        {
                            "x": 0,       // première question donc première forme au centre
                            "y": 0,
                            "z": 0
                        }
                };

            case 3:

                let day = attributes.birth.substring(0,2);
                let month = attributes.birth.substring(3,5);
                let year = attributes.birth.substring(6,10);

                if (day<=10)                                    //BIRTHDAY.DAY
                    day=1;
                else {
                    if (day<=20)
                        day=2;
                    else
                        day=3;
                }

                switch (day){
                    case 1:
                        return{
                            "type": "polygon",
                            "properties":
                                {
                                    "shape": "cube",
                                    "3D": true,
                                    "color": '#' + (function co(lor){   return (lor +=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])&& (lor.length === 6) ?  lor : co(lor); })('')
                                },
                            "scale": 20,        //pourcentage
                            "material": "truc",   // need liste matériaux
                            "coordinates":
                                {
                                    "x": 0,       // première question donc première forme au centre
                                    "y": 0,
                                    "z": 0
                                }
                        };

                    case 2:
                        return{
                            "type": "polygon",
                            "properties":
                                {
                                    "shape": "cube",
                                    "3D": true,
                                    "color": '#' + (function co(lor){   return (lor +=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])&& (lor.length === 6) ?  lor : co(lor); })('')
                                },
                            "scale": 20,        //pourcentage
                            "material": "truc",   // need liste matériaux
                            "coordinates":
                                {
                                    "x": 0,       // première question donc première forme au centre
                                    "y": 0,
                                    "z": 0
                                }
                        };

                    case 3:
                        return{
                            "type": "polygon",
                            "properties":
                                {
                                    "shape": "cube",
                                    "3D": true,
                                    "color": '#' + (function co(lor){   return (lor +=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])&& (lor.length === 6) ?  lor : co(lor); })('')
                                },
                            "scale": 20,        //pourcentage
                            "material": "truc",   // need liste matériaux
                            "coordinates":
                                {
                                    "x": 0,       // première question donc première forme au centre
                                    "y": 0,
                                    "z": 0
                                }
                        };
                }

                if (month === 12 || month === 1 || month === 2){
                    return{
                        "type": "polygon",
                        "properties":
                            {
                                "shape": "cube",
                                "3D": true,
                                "color": '#' + (function co(lor){   return (lor +=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])&& (lor.length === 6) ?  lor : co(lor); })('')
                            },
                        "scale": 20,        //pourcentage
                        "material": "truc",   // need liste matériaux
                        "coordinates":
                            {
                                "x": 0,       // première question donc première forme au centre
                                "y": 0,
                                "z": 0
                            }
                    }
                }
                if (month === 3 || month === 4 || month === 5){
                    return{
                        "type": "polygon",
                        "properties":
                            {
                                "shape": "cube",
                                "3D": true,
                                "color": '#' + (function co(lor){   return (lor +=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])&& (lor.length === 6) ?  lor : co(lor); })('')
                            },
                        "scale": 20,        //pourcentage
                        "material": "truc",   // need liste matériaux
                        "coordinates":
                            {
                                "x": 0,       // première question donc première forme au centre
                                "y": 0,
                                "z": 0
                            }
                    }
                }
                if (month === 6 || month === 7 || month === 8){
                    return{
                        "type": "polygon",
                        "properties":
                            {
                                "shape": "cube",
                                "3D": true,
                                "color": '#' + (function co(lor){   return (lor +=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])&& (lor.length  ===  6) ?  lor : co(lor); })('')
                            },
                        "scale": 20,        //pourcentage
                        "material": "truc",   // need liste matériaux
                        "coordinates":
                            {
                                "x": 0,       // première question donc première forme au centre
                                "y": 0,
                                "z": 0
                            }
                    }
                }
                if (month === 9 || month === 10 || month === 11){
                    return{
                        "type": "polygon",
                        "properties":
                            {
                                "shape": "cube",
                                "3D": true,
                                "color": '#' + (function co(lor){   return (lor +=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])&& (lor.length  ===  6) ?  lor : co(lor); })('')
                            },
                        "scale": 20,        //pourcentage
                        "material": "truc",   // need liste matériaux
                        "coordinates":
                            {
                                "x": 0,       // première question donc première forme au centre
                                "y": 0,
                                "z": 0
                            }
                    }
                }
                let current = new Date().getFullYear();                                                               //BIRTHDAY.YEAR
                for (let i = 1; i < (current-year)+1; i++) {
                    return{
                        "type": "polygon",
                        "properties":
                            {
                                "shape": "cube",
                                "3D": true,
                                "color": '#' + (function co(lor){   return (lor +=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])&& (lor.length  === 6) ?  lor : co(lor); })('')
                            },
                        "scale": 20,        //pourcentage
                        "material": "truc",   // need liste matériaux
                        "coordinates":
                            {
                                "x": 0,       // première question donc première forme au centre
                                "y": 0,
                                "z": 0
                            }
                    }
                }
                break;

            case 4:
                return{
                    "type": "polygon",
                    "properties":
                        {
                            "shape": "cube",
                            "3D": true,
                            "color": attributes.color,
                        },
                    "scale": 20,        //pourcentage
                    "material": "truc",   // need liste matériaux
                    "coordinates":
                        {
                            "x": 0,       // première question donc première forme au centre
                            "y": 0,
                            "z": 0
                        }
                };

            case 5:
                return{
                    "type": "polygon",
                    "properties":
                        {
                            "shape": "cube",
                            "3D": true,
                            "color": '#' + (function co(lor){   return (lor +=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])&& (lor.length  ===  6) ?  lor : co(lor); })('')
                        },
                    "scale": attributes.second,        //pourcentage
                    "material": "truc",   // need liste matériaux
                    "coordinates":
                        {
                            "x": 0,       // première question donc première forme au centre
                            "y": 0,
                            "z": 0
                        }
                };

            case 6:
                let boucle2 = attributes.fbName;
                attributes.name = attributes.fbName.toLowerCase();
                let newFbName = "";
                let permut2 = "";
                let pos2;

                for (let i = 0; i<(boucle2.length);i++) {
                    permut2 = "";

                    while(permut2 === ""){
                        pos2 = Math.floor(Math.random()*attributes.fbName.length);
                        permut2=attributes.fbName.charAt(pos2);
                    }

                    attributes.name=attributes.fbName.replace(permut2,"");
                    newFbName+=permut2;
                }

                return{
                    "type": "word",
                    "properties":
                        {
                            "word": "newFbName",
                            "moving":true,
                            "3D": true,
                            "color": '#' + (function co(lor){   return (lor +=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])&& (lor.length === 6) ?  lor : co(lor); })('')
                        },
                    "scale": attributes.second,        //pourcentage
                    "material": "truc",   // need liste matériaux
                    "coordinates":
                        {
                            "x": 0,       // première question donc première forme au centre
                            "y": 0,
                            "z": 0
                        }
                };

            case 8:
                switch(attributes.interest){
                    case "sport":
                        return{
                            "type": "polygon",
                            "properties":
                                {
                                    "shape": "cube",
                                    "3D": true,
                                    "color": '#' + (function co(lor){   return (lor +=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])&& (lor.length === 6) ?  lor : co(lor); })('')
                                },
                            "scale": 20,        //pourcentage
                            "material": "truc",   // need liste matériaux
                            "coordinates":
                                {
                                    "x": 0,       // première question donc première forme au centre
                                    "y": 0,
                                    "z": 0
                                }
                        };

                    case "musique":
                        return{
                            "type": "polygon",
                            "properties":
                                {
                                    "shape": "cube",
                                    "3D": true,
                                    "color": '#' + (function co(lor){   return (lor +=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])&& (lor.length === 6) ?  lor : co(lor); })('')
                                },
                            "scale": 20,        //pourcentage
                            "material": "truc",   // need liste matériaux
                            "coordinates":
                                {
                                    "x": 0,       // première question donc première forme au centre
                                    "y": 0,
                                    "z": 0
                                }
                        };

                    case "voyage":
                        return{
                            "type": "polygon",
                            "properties":
                                {
                                    "shape": "cube",
                                    "3D": true,
                                    "color": '#' + (function co(lor){   return (lor +=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])&& (lor.length === 6) ?  lor : co(lor); })('')
                                },
                            "scale": 20,        //pourcentage
                            "material": "truc",   // need liste matériaux
                            "coordinates":
                                {
                                    "x": 0,       // première question donc première forme au centre
                                    "y": 0,
                                    "z": 0
                                }
                        };

                    case "lecture":
                        return{
                            "type": "polygon",
                            "properties":
                                {
                                    "shape": "cube",
                                    "3D": true,
                                    "color": '#' + (function co(lor){   return (lor +=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])&& (lor.length === 6) ?  lor : co(lor); })('')
                                },
                            "scale": 20,        //pourcentage
                            "material": "truc",   // need liste matériaux
                            "coordinates":
                                {
                                    "x": 0,       // première question donc première forme au centre
                                    "y": 0,
                                    "z": 0
                                }
                        };

                    case "cuisine":
                        return{
                            "type": "polygon",
                            "properties":
                                {
                                    "shape": "cube",
                                    "3D": true,
                                    "color": '#' + (function co(lor){   return (lor +=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])&& (lor.length === 6) ?  lor : co(lor); })('')
                                },
                            "scale": 20,        //pourcentage
                            "material": "truc",   // need liste matériaux
                            "coordinates":
                                {
                                    "x": 0,       // première question donc première forme au centre
                                    "y": 0,
                                    "z": 0
                                }
                        };

                    case "jeux-vidéo":
                        return{
                            "type": "polygon",
                            "properties":
                                {
                                    "shape": "cube",
                                    "3D": true,
                                    "color": '#' + (function co(lor){   return (lor +=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])&& (lor.length === 6) ?  lor : co(lor); })('')
                                },
                            "scale": 20,        //pourcentage
                            "material": "truc",   // need liste matériaux
                            "coordinates":
                                {
                                    "x": 0,       // première question donc première forme au centre
                                    "y": 0,
                                    "z": 0
                                }
                        };

                    case "théatre":
                        return{
                            "type": "polygon",
                            "properties":
                                {
                                    "shape": "cube",
                                    "3D": true,
                                    "color": '#' + (function co(lor){   return (lor +=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])&& (lor.length === 6) ?  lor : co(lor); })('')
                                },
                            "scale": 20,        //pourcentage
                            "material": "truc",   // need liste matériaux
                            "coordinates":
                                {
                                    "x": 0,       // première question donc première forme au centre
                                    "y": 0,
                                    "z": 0
                                }
                        };

                    case "animaux":
                        return{
                            "type": "polygon",
                            "properties":
                                {
                                    "shape": "cube",
                                    "3D": true,
                                    "color": '#' + (function co(lor){   return (lor +=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])&& (lor.length === 6) ?  lor : co(lor); })('')
                                },
                            "scale": 20,        //pourcentage
                            "material": "truc",   // need liste matériaux
                            "coordinates":
                                {
                                    "x": 0,       // première question donc première forme au centre
                                    "y": 0,
                                    "z": 0
                                }
                        };

                    case "jardinage":
                        return{
                            "type": "polygon",
                            "properties":
                                {
                                    "shape": "cube",
                                    "3D": true,
                                    "color": '#' + (function co(lor){   return (lor +=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])&& (lor.length === 6) ?  lor : co(lor); })('')
                                },
                            "scale": 20,        //pourcentage
                            "material": "truc",   // need liste matériaux
                            "coordinates":
                                {
                                    "x": 0,       // première question donc première forme au centre
                                    "y": 0,
                                    "z": 0
                                }
                        };

                    case "apéro":
                        return{
                            "type": "polygon",
                            "properties":
                                {
                                    "shape": "cube",
                                    "3D": true,
                                    "color": '#' + (function co(lor){   return (lor +=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])&& (lor.length === 6) ?  lor : co(lor); })('')
                                },
                            "scale": 20,        //pourcentage
                            "material": "truc",   // need liste matériaux
                            "coordinates":
                                {
                                    "x": 0,       // première question donc première forme au centre
                                    "y": 0,
                                    "z": 0
                                }
                        };

                    case "clubbing":
                        return{
                            "type": "polygon",
                            "properties":
                                {
                                    "shape": "cube",
                                    "3D": true,
                                    "color": '#' + (function co(lor){   return (lor +=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])&& (lor.length === 6) ?  lor : co(lor); })('')
                                },
                            "scale": 20,        //pourcentage
                            "material": "truc",   // need liste matériaux
                            "coordinates":
                                {
                                    "x": 0,       // première question donc première forme au centre
                                    "y": 0,
                                    "z": 0
                                }
                        };

                    case "cinéma":
                        return{
                            "type": "polygon",
                            "properties":
                                {
                                    "shape": "cube",
                                    "3D": true,
                                    "color": '#' + (function co(lor){   return (lor +=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])&& (lor.length === 6) ?  lor : co(lor); })('')
                                },
                            "scale": 20,        //pourcentage
                            "material": "truc",   // need liste matériaux
                            "coordinates":
                                {
                                    "x": 0,       // première question donc première forme au centre
                                    "y": 0,
                                    "z": 0
                                }
                        };
                }
                break;


        }
    },

    // Retourne un objet JSON "sound" sous la forme disponible dans user-example.json
    transformInSound: function (questionId, attributes) {
        return {};
    }
};

////////////////////////////////////////////////////////
////Comment on traite les cylindres d'anniversaires ?
////positionner les scales de façon à tourner autour de l'axe au fur et à mesure des questions ( 000, 222, -222, -2-22, 2-22 ....)
////
////////////////////////////////////////////////////////
