var main = function () {

	 };

function changeText() {
	var date= new Date();
	text = String(date);

	document.getElementById('pText').innerHTML=date.toDateString();
	document.getElementById('Hour').innerHTML= date.getHours();
	document.getElementById('Minute').innerHTML=date.getMinutes();
	document.getElementById('Second').innerHTML=date.getSeconds();
}
		


function changePicture(image){
	  document.getElementById("imgClickAndChange").src = image;
}

$(document).ready(main);