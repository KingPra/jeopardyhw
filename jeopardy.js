function init() {

    let questionButton = document.querySelector('#gButton');
    questionButton.addEventListener('click', getNewQuestion);

    getNewQuestion()

    //getting value from textbox
     let button = document.querySelector('#gButton');
     button.addEventListener('click', function() {  
     let textBox = document.querySelector('input');
     console.log(textBox.value);
     textBox.value = '';
     
     addScore();
 
     });
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
    let answer = str.answer;
    console.log(str.answer);
    let pointValue = str.value;
    console.log('points:', str.value);



function addScore() {
    let score = 0;
     for (i =0; i < textBox.length; i++) {
         for ( j = 0; j < answer.length; j++) {
             if (textBox[i].toLowerCase() === answer[j].toLowerCase()) {
                 score = score + pointValue;
                 console.log(score);
             }
         }

     }
     return score;
}
     


// only need to appendChild when making new element (createElement)
    // let parent = document.querySelector('#body');
    // parent.appendChild(name);
    console.log('should have output on screen')
}

window.addEventListener('load', init);