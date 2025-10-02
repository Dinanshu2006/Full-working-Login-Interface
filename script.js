let passcode=Math.floor(Math.random()*10000);

function sendOTP(){
    let parms={
     email:document.getElementById('email').value,
     CompanyName:"DinanshuJain",
     passcode:passcode,
}
document.getElementById("hide").style.display="flex";
document.getElementById("btn").style.display="flex";
emailjs.send("service_1t6mbhf","template_24tqvgo",parms).then()

}
function verify(){
    let otp = document.getElementById('hide').value;
    if(otp==passcode){
        alert("email verified")
    }
    else{
        alert("Invalid")
    }
}
