
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

    }
};

let getQ1Attr = () => {
    let genre = "";
    if($("#homme")[0].checked)
        genre = "h";
    else if($("#femme")[0].checked)
        genre = "f";
    else if($("#nb")[0].checked)
        genre = "nb";
    console.log(genre);
    return genre;
};