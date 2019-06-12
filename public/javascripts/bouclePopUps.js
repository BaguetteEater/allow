let questionsIds = [
    "#question1",
    "#question2",
    "#question3",
    "#question4",
    "#question5",
    "#question6",
    "#question7",
    "#question8",
    "#question9",
];

let all = questionsIds;

hideAll = () => {
    all.forEach(questionId => $(questionId).hide());
};

moveTo = (questionId) => {
    console.log(questionId)
    hideAll();
    $(questionId).show();
};

// Passe à la question suivante si elle est disponible
moveToNext = () => {
    for (let i = 0; i < questionsIds.length; i++) {
        if ($(questionsIds[i]).is(":visible")) {
            if (i === (questionsIds.length - 1))
                moveTo(questionsIds[0]);
            else
                moveTo(questionsIds[i+1]);
            return;
        }
    }
    moveTo(questionsIds[0]);
};

bindListenerToPopUps = () => {
    all.forEach((questionId) => {
        addListener(questionId);
    })
};

// Répond à une question (la retire de la boucle)
answer = (questionId) => {
    questionsIds = questionsIds.filter(name => name !== questionId);
};

// initialisation :

questionsIds.forEach(questionId => {
    $(questionId).children(":first").children(":first").click(function () {
        moveToNext();
    });
});


hideAll();
moveToNext();

createUser();
bindListenerToPopUps();
