const showMoreButton = document.getElementById('showMoreButton');
const showMoreList = document.getElementById('showMoreList');

showMoreButton.addEventListener('click', function(){
    if (showMoreList.style.display === 'none'){
        showMoreList.style.display = 'block';
    } else {
        showMoreList.style.display = 'none';
    }
});

// End Toogle Button 

// Show Alert

const alertButton = document.getElementById('alertButton');

alertButton.addEventListener('click', function(){
    alert('Hello, I am your alert button.');

});


// GREET ME Button

const usernameInput = document.getElementById('username');
const greetButton = document.getElementById('greetButton');
const greetingMessage = document.getElementById('greetingMessage');
const reloadButton = document.getElementById('reloadButton');


 function isValidName(name) {
    const namePattern = /^[a-zA-Z\s]+$/; 
    return namePattern.test(name);
 }

 greetButton.addEventListener('click', function(){

    const username = usernameInput.value.trim();

    if (username === '') {
        greetingMessage.textContent = 'Please enter your name.';
    } else if (!isValidName(username)) {
        greetingMessage.textContent = 'Invalid input. Please use letters only.';
    } else {
        greetingMessage.textContent = `Hello, ${username}! Thank you for reaching out.`;
    }
 });

 reloadButton.addEventListener('click', function(){
    location.reload();
 });

//  Add Message 

const sendMessageButton = document.getElementById('sendMessageButton');
const yourMessageHere = document.getElementById('yourMessageHere');
const resetButton = document.getElementById('resetButton');

sendMessageButton.addEventListener('click', function(){

   const newMessage = document.createElement ('p');

    newMessage.textContent = 'Hello, this is a new message sent to you...';

    yourMessageHere.appendChild(newMessage);

});

resetButton.addEventListener('click', function(){
    location.reload();
})

// Increment and Decrement

const counterDisplay = document.getElementById('count');
const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');
const refreshButton = document.getElementById('refreshButton');

let count = 0;

incrementButton.addEventListener('click', function(){
    count += 1;
    counterDisplay.textContent = count;
});

decrementButton.addEventListener('click', function(){
    count -=1;
    counterDisplay.textContent = count;

})

refreshButton.addEventListener('click', function(){
    location.reload();
})


