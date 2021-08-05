function clickFunction(){
	var button = document.getElementById("bars");
	var link = document.getElementById("link");
	var name = document.getElementById("nametag");
	console.log('success!!')
	if(link.style.left === '-6%'){
		link.style.left = '-90%';
	}
	else{
		link.style.left = '-6%';
	}
	
}
var clickLink = document.querySelectorAll(".c");
for( var click of clickLink){
	click.addEventListener('click',function(){
		link.style.left = '-90%';
	})
}

var defValue = 0;
var text = 'Hiiii, Saya Dwi Zulyan';
var speed = 300;

function typeWriter(){
	if(defValue < text.length){
		document.getElementById("typewrite").innerHTML += text.charAt(defValue);
		defValue++;
		setTimeout(typeWriter, speed)
	}
}

