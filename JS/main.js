const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const cancell = document.querySelector("#cancell");
const voiti = document.querySelector(".voiti");
const modall = document.querySelector(".modall");
const cclose = document.querySelector(".cclose");
cartButton.addEventListener("click",function (event){
	modal.classList.add("is-open");
});
voiti.addEventListener("click",function (event){
	modall.classList.add("is-open");
});

close.addEventListener("click",function (event){
	modal.classList.remove("is-open");
});

cclose.addEventListener("click",function (event){
	modall.classList.remove("is-open");
});

cancell.addEventListener("click",function (event){
	modal.classList.remove("is-open");
});


new WOW().init();