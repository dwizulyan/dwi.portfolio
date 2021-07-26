function clickFunction(){
	var link = document.getElementById("link");

	if(link.style.display === "flex"){
		link.style.display = "none";
	}else{
		link.style.display = "flex";
	}
}