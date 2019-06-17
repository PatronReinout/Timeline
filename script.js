const slider = document.querySelector(".scroll"); //haalt class uit index
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", e => { //activeert functie als je muis indrukt
	isDown = true;
	slider.classList.add("active");
	startX = e.pageX - slider.offsetLeft;
	scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => { //activeert functie als je buiten div gaat
	isDown = false;
	slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => { //activeert functie als je lost laat
	isDown = false;
	slider.classList.remove("active"); // zorgt dat de actieve status weggaat
});
slider.addEventListener("mousemove", e => {
	if (!isDown) return;
	e.preventDefault();  //zorgt dat er geen link wordt geoepend 
	const x = e.pageX - slider.offsetLeft;
	const walk = (x - startX) * 3; //scroll snelheid
	slider.scrollLeft = walk;
	console.log(walk);
});
