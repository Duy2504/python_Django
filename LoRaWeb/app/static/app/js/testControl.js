
const sttden = document.getElementById("deviceLight")
const sttPump = document.getElementById("devicePump")
const sttrem = document.getElementById("rem")
function on_off_auto() {
    alert("Hello from a static file!");
}
function on_off_den() {
  if(){
    document.getElementById("checkboxThreeInput_den").checked =true
    document.getElementById("light-icon").src="static/app/images/icon/light-on.png"
    sttden.style.backgroundColor = "greenyellow";
  }
  else{
    document.getElementById("checkboxThreeInput_den").checked = false
    document.getElementById("light_icon").src='static/app/images/icon/light-off.png'
    sttden.style.backgroundColor = "DarkGray";
  }
}
  

