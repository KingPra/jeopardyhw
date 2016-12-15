function init() {

    let questionButton = document.querySelector('#gButton');
    questionButton.addEventListener('click', getNewQuestion);

    getNewQuestion()






}


function getNewQuestion() {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://jservice.io/api/random');
    console.log('getNewQuestion function is now running');

    request.addEventListener('load', function () {
        console.log('you got mail');
        let response = JSON.parse(request.responseText);
        let info = response[0];
        showQuestion(info);
    });
    request.send();
    console.log('mail is sent');
}


function showQuestion(str) {
    let randomQ = document.querySelector('#outputQuestion');
    randomQ.textContent = str.question;
    let category = document.querySelector('#cat');
    category.textContent =  str.category.title;





// only need to appendChild when making new element (createElement)
    // let parent = document.querySelector('#body');
    // parent.appendChild(name);
    console.log('should have output on screen')
}

window.addEventListener('load', init);