let namee = document.getElementById('name');
let email = document.getElementById('email');
let title = document.getElementById('title');
let content = document.getElementById('content');
let button = document.getElementById('submit');

button.addEventListener('click', () => {
    alert(`Ho va ten: ${namee.value}\nEmail: ${email.value}\nTieu de: ${title.value}\nNoi dung gop y: ${content.value}`);
});