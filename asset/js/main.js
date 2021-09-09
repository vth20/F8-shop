const logIn = document.getElementById("js_LogIn");
const signIn = document.getElementById("js_SignIn");

const formLogin = document.querySelector('.modal.form_login')
const formSignin = document.querySelector('.modal.form_signin')

const overlays = document.querySelectorAll('.modal__overlay')

const logInlink = document.querySelector('.desc__link.js_login-link')
const signInlink = document.querySelector('.desc__link.js_signin-link')


logIn.onclick = function() {
    formLogin.style.display = 'flex';
}

signIn.onclick = function() {
    formSignin.style.display = 'flex';
}

for(var i = 0; i < overlays.length; i++) {
    overlays[i].onclick = function() {
        formSignin.style.display = 'none'
        formLogin.style.display = 'none';
    }
}


logInlink.onclick = function() {
    formLogin.style.display = 'flex';
    formSignin.style.display = 'none';
}

signInlink.onclick = function() {
    formSignin.style.display = 'flex';
    formLogin.style.display = 'none';
}

