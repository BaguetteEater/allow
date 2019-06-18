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
                            "word": newname,
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
                                    "x": 0,
                                    "y": 1,
                                    "z": 2
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
                                    "x": 0,
                                    "y": 1,
                                    "z": 2
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
                                    "x": 0,
                                    "y": 1,
                                    "z": 2
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
                                "x": 2,
                                "y": 3,
                                "z": 1
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
                                "x": 2,
                                "y": 3,
                                "z": 1
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
                                "x": 2,
                                "y": 3,
                                "z": 1
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
                                "x": 2,
                                "y": 3,
                                "z": 1
                            }
                    }
                }
                let current = new Date().getFullYear();//BIRTHDAY.YEAR
                //for (let i = 1; i < (current-year); i++) {
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
                                "x": 1.5,       // première question donc première forme au centre
                                "y": -1.5,
                                "z": 0.5
                            }
                    };
                //}

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
                    case "avion":
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

                    case "basket":
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

                    case "bateau":
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

                    case "bowling":
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

                    case "chat":
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

                    case "chien":
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

                    case "chocolat":
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

                    case "courir":
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

                    case "danse":
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

                    case "dessiner":
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

                    case "foot":
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

                    case "guitare":
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

                    case "jeu":
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

                    case "lit":
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

                    case "livre":
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

                    case "microscope":
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

                    case "muscu":
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

                    case "nager":
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

                    case "nature":
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

                    case "origami":
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

                    case "peluche":
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

                    case "piano":
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

                    case "poisson":
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

                    case "poulet":
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

                    case "robot":
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

                    case "saturne":
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

                    case "tenis":
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

                    case "train":
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
