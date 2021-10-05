let btnToggle = document.getElementById('btn');
let btnFormLogin = document.getElementById('login');
let btnFormRegister = document.getElementById('register');
let toggleRegister = document.getElementById('togRegister');
let toggleLogin = document.getElementById('togLogin');
let facebookLogin = document.getElementById('facebook');
let twitterLogin = document.getElementById('twitter');
let googleLogin = document.getElementById('google');
let logInBut = document.getElementById('logsb');
let fName = document.getElementById('fname');
let fPass = document.getElementById('fpass');


logInBut.addEventListener('click',this.getData());


function getData(){
    
}



toggleRegister.addEventListener('click',this.onToggleRegister);
toggleLogin.addEventListener('click',this.onToggleLogin);

function onToggleRegister(){
    btnFormLogin.style.left = "-400px";
    btnFormRegister.style.left = "50px";
    btnToggle.style.left = "110px";
}

function onToggleLogin(){
    btnFormLogin.style.left = "50px";
    btnFormRegister.style.left = "450px";
    btnToggle.style.left = "0px";
}

facebookLogin.addEventListener('click',()=>{
window.open("https://en-gb.facebook.com/")
})

twitterLogin.addEventListener('click',()=>{
    window.open("https://twitter.com/?lang=en")
})

googleLogin.addEventListener('click',()=>{
    window.open("https://accounts.google.com/signin/v2/identifier?hl=en&continue=https%3A%2F%2Fmail.google.com%2Fmail&service=mail&ec=GAlAFw&flowName=GlifWebSignIn&flowEntry=AddSession")
})


