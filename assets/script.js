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


/*
img__slider = document.getElementsByClassName('img__slider')

etape = 0

nbr__img = img__slider.length
*/
let position = 0

function fonction1() {
	debugger
	console.log("message")
	position = position + 1
	let groupSlide = slides[ position ]
	imageTag.src="./assets/images/slideshow/"+groupSlide.image
	/*
	for( i = 0; i < nbr__img; i++) {
		img__slider[i].classList.remove('active')
	}

	if(etape >= nbr__img) {
		etape = 0;
	}
	*/

}

let suivant = document.querySelector('.arrow.arrow_right')
let precedent = document.querySelector('.arrow.arrow_left')

let imageTag = document.querySelector('.img__slider')

console.log(imageTag)

suivant.addEventListener('click', function(){
	console.log("message2")
})

//precedent.addEventListener('click', fonction2)







/*
function fonction2() {
	for( i = 0; i > nbr__img; i--) {
		img__slider[i].classList.remove('active')
	}
}

*/