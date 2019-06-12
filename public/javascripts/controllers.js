
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

        let genre = "";

        $.ajax({
            method: "POST",
            url: "/question/"+userId,
            data: {"questionId": questionNum, "attributes": {"genre": genre}},
            dataType: "json",
        }).done((figureData) => {
            generateFigures(figureData);
            answer(questionId);
            moveToNext();
        });
    });
};