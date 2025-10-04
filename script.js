let passcode = Math.floor(Math.random() * 10000);
const email = document.getElementById('email').value;
const password = document.getElementById('pass').value;
function login() {
    const email = document.getElementById('email1').value;
    const password = document.getElementById('pass1').value;
    const user=JSON.parse(localStorage.getItem('user'));
    if (user&&email===user.email && password===user.password) {
        document.getElementById('reg').style.display="none";
        document.getElementById('form1').style.display="none";
        document.getElementById('sec').style.display="flex";
        document.getElementById('sr').style.display="none";
    }
    else {
        alert("Me nhi chaluga tu kuch bhi karle");
    }
}
function loginshow(){
    document.getElementById('form1').style.display="block";
    document.getElementById('reg').style.display="none";

}
function register(){
    document.getElementById('reg').style.display="block";
    document.getElementById('form1').style.display="none";
}
function singup(){
    const email=document.getElementById('email2').value;
    const password=document.getElementById('pass2').value;
    if(email && password){
        localStorage.setItem('user',JSON.stringify({email,password}));
        alert("singup successfully");
    }
    else{
        alert("Enter valid Email & password");
    }
}
function logout(){
    localStorage.removeItem('user');
}
function acc(){
    document.getElementById('delete').style.display="block";
}