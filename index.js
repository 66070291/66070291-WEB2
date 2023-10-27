function setusername(){
    document.getElementById("username-p").innerHTML = document.getElementById("username").value + "'s Gallery";
}
function setprofile(){
    document.getElementById("ProfileImg").style.backgroundImage = "url(" + document.getElementById("profileimg").value + ")";
}