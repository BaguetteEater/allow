
let userId;

createUser = () => {
    $.ajax({
        method: "POST",
        url: "/add",
        dataType: "json"
    }).done((user) => {
        userId = user._id;
    })
};

addListener = (questionId) => {

    let questionNum = questionId.substring(9);

    if(questionNum === "8"){

        let grille = $("#grille")[0];

        $("#ok_link_popup8").click((event) => {
            answer(questionId);
            moveToNext();
        });

        for(let i = 0; i < grille.children.length; i++){
            grille.children[i].addEventListener("click", (event) => {
                eventCallback(questionId, questionNum, event);
            })
        }

    } else if (questionNum === "7"){

        let cercleChroma = $("#cercleChroma")[0];
        let colorArray = cercleChroma.children[0].children[0].children;

        cercleChroma.children[0].addEventListener("load", () => {
            console.log("load");
            for(let i = 0; i < colorArray; i++){
                colorArray[i].addEventListener("click", (event) => {
                    eventCallback(questionId, questionNum, event);
                });
            }

        });

    } else {

        $("#ok_link_popup" + questionNum).click((event) => {
            eventCallback(questionId, questionNum, event);
            answer(questionId);
            moveToNext();
        });
    }
};

let eventCallback = (questionId, questionNum, event) => {

    if(!event)
        event = window.event;

    let generatedAttributes = generateAttribute(questionNum, event);
    let data = JSON.stringify({
        questionId: questionNum,
        attributes: generatedAttributes
    });

    console.log(data);

    $.ajax({

        method: "POST",
        url: "/question/" + userId,
        contentType: "application/json",
        data: data

    }).done((figureData) => {

        console.log(figureData.graphics);
        generateFigures(figureData);
    });
};

let generateAttribute = (questionNum, event) => {
    switch (questionNum) {
        case "1": return { genre : getQ1Attr()+"" };
        case "2": return { name : getQ2Attr()+"" };
        case "3": return { birth : getQ3Attr()+"" };
        case "4": return {};
        case "5": return {};
        case "6": return {};
        case "7": return { glowingColor : getQ7Attr(event)+"" };
        case "8": return { interest : getQ8Attr(event)+""};
        case "9": return {};

    }
};

let getQ1Attr = () => {
    let genre = "";
    if($("#homme")[0].checked)
        genre = "h";
    else if($("#femme")[0].checked)
        genre = "f";
    else if($("#nonbinaire")[0].checked)
        genre = "nb";

    return genre;
};

let getQ2Attr = () => {
    let prenom = $("#prenom")[0].value;
    return prenom;
};

let getQ3Attr = () => {
    let dateOfBirth = $("#date")[0].value;
    return dateOfBirth;
};

let getQ7Attr = (event) => {
    return event.target.attributes.fill.value
}

let getQ8Attr = (event) => {
    let interest = event.target.id;
    return interest;
}