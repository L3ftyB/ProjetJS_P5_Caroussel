const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let position = 0

let imageSlide = document.querySelector('.img_slide')
let texte = document.getElementById('text-slide')

let point = document.getElementsByClassName('dot')
let nbrPoints = point.length

function enleverPoint(){
	for( let i = 0 ; i < nbrPoints; i++){
		point[i].classList.remove('dot_selected')
	}
}

function imgSuivante() {
	position = position + 1

	if( position > 3){
		position = 0
	}

	enleverPoint()
	point[position].classList.add('dot_selected')
	
	let imageWithTag = slides[position]
	imageSlide.src = "./assets/images/slideshow/" + imageWithTag.image
	texte.innerHTML = imageWithTag.tagLine

}

function imgPrecedent() {
	position = position - 1

	if( position < 0){
		position = 3
	}

	enleverPoint()
	point[position].classList.add('dot_selected')

	let imageWithTag = slides[position]
	imageSlide.src = "./assets/images/slideshow/" + imageWithTag.image
	texte.innerHTML = imageWithTag.tagLine
}

let suivant = document.querySelector('.arrow.arrow_right')
let precedent = document.querySelector('.arrow.arrow_left')

suivant.addEventListener('click', function(){
	imgSuivante()
})

precedent.addEventListener('click', function(){
	imgPrecedent()
})