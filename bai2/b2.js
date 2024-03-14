let namee = document.getElementById('name');
let cardID = document.getElementById('cardID');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let guestType = document.getElementById('guestType');
let billID = document.getElementById('billID');
let content = document.getElementById('content');
let button = document.getElementById('button');

button.addEventListener('click', () => {
    alert(`Ho va ten: ${namee.value}\nMa the: ${cardID.value}\nSo dien thoai: ${phone.value}\nEmail: ${email.value}\nLoai KH: ${guestType.value}\nMa don hang: ${billID.value}\nNoi dung gop y: ${content.value}`);
});