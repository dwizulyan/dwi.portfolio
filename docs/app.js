function clickFunction(){
	var button = document.getElementById("bars");
	var link = document.getElementById("link");

	if(link.style.marginLeft === '-200px'){
		link.style.marginLeft = '-20px'
	}
	else{
		link.style.marginLeft = '-200px'
	}
	
}
var clickLink = document.querySelectorAll(".c");
for( var click of clickLink){
	click.addEventListener('click',function(){
		link.style.marginLeft = '-200px'
	})
}
