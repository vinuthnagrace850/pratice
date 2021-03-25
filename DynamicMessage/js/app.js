const date = new Date();
const hour = date.getHours();
const button = document.querySelector('button');
const messageArea = document.querySelector('#message');
button.addEventListener('click', function(){
if (hour > 17){
    messageArea.innerHTML = `<h1>Good evening!</h1>`;
} else if (hour > 12){
    messageArea.innerHTML = `<h1>Good afternoon!</h1>`;
} else {
    messageArea.innerHTML = `<h1>Good morning!</h1>`;
}
})

