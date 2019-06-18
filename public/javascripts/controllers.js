
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

    $("#ok_link_popup"+questionNum).click((event) => {

        let generatedAttributes = generateAttribute(questionNum);
        let data = JSON.stringify({
            questionId : questionNum,
            attributes : generatedAttributes
        });

        $.ajax({

            method: "POST",
            url: "/question/"+userId,
            contentType: "application/json",
            data: data

        }).done((figureData) => {

            console.log(figureData.graphics);
            generateFigures(figureData);
            answer(questionId);
            moveToNext();
        });
    });
};

let generateAttribute = (questionNum) => {
    switch (questionNum) {
        case "1": return { genre : getQ1Attr()+"" };
        case "2": return { name : getQ2Attr()+"" };
        case "3": return { birth : getQ3Attr()+"" };
        case "4": return {};
        case "5": return {};

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
    console.log(genre);
    return genre;
};

let getQ2Attr = () => {
    let prenom = $("#prenom")[0].value;
    return prenom;
};

let getQ3Attr = () => {
    let dateOfBirth = $("#date");
    return dateOfBirth;
}