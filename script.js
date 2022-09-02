"use strict"

//Dom elements
const inputPassword = document.getElementById('password');
const inputConfirmPassword = document.getElementById('confirm-password');
const submitBtn = document.getElementById('create-account');


submitBtn.addEventListener('click', ()=> {
    if(inputPassword.value === inputConfirmPassword.value) return;
    else alert('error');
});


