const active = document.getElementsByClassName("center");

const send = document.getElementsByClassName("send");

const revert = document.getElementsByClassName("revert");

function changeClass (){
	active[0].classList.toggle("active")
};

send[0].addEventListener("click", changeClass);
revert[0].addEventListener("click", changeClass);