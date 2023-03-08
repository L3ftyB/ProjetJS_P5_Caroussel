// Tableau qui contient les informations pour chaque slide.
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

// Initialiser la position à 0.
let position = 0

// Selection des éléments HTML pour afficher l'image et le texte.
let imageSlide = document.querySelector('.img_slide')
let texte = document.getElementById('text-slide')

// Selection des éléments HTML pour les bullet points.
let point = document.getElementsByClassName('dot')
const nbrPoints = point.length	// Tableau representant les bulletpoints

// La fonction enleverPoint sert à enlever la classe 'dot_selected' des bullet points.
function enleverPoint(){
	for( let i = 0 ; i < nbrPoints; i++){    
		point[i].classList.remove('dot_selected')	// Enlever le point initial suite à l'acrementation
	}
}

// Fonction imgSuivante pour afficher la slide suivante.
function imgSuivante() {
	// Incrémentation de la position actuelle.
	position = position + 1

	// Si la position dépasse la longueur du tablau, elle est réinitialisée à 0.
	if( position > 3){
		position = 0
	}

	// Enlever la classe 'dot_selected' du bullet point actuel.
	enleverPoint()
	//Ajouter la class 'dot_selected' au bullet point correspondant à la nouvelle position.		
	point[position].classList.add('dot_selected')      
	
	//Selectionner l'objet de la slide correspondant à la nouvelle position.
	let imageWithTag = slides[position]
	//mise à jour de l'image affiché avec l'objet correspondant.
	imageSlide.src = "./assets/images/slideshow/" + imageWithTag.image
	//mise à jour du texte affiché avec l'objet correpondant.
	texte.innerHTML = imageWithTag.tagLine

}

function imgPrecedent() {
	position = position - 1

	if( position < 0){
		position = 3
	}

	enleverPoint()
	point[position].classList.add('dot_selected')

	let imageWithTag = slides[position]                                // On nomme la variable qui regroupe l'image et le texte dans le tableau
	imageSlide.src = "./assets/images/slideshow/" + imageWithTag.image // On definie la source de l'image dans la variable
	texte.innerHTML = imageWithTag.tagLine                             // On definie quel texte du tableau on souhaite remplacer
}

let suivant = document.querySelector('.arrow.arrow_right')             // On selectionne l'element de la class qu'on souhaite attribuer
let precedent = document.querySelector('.arrow.arrow_left')

suivant.addEventListener('click', function(){                // On attribue un evenement au click pour les fleches suivant et precedents
	imgSuivante()
})
					 
precedent.addEventListener('click', function(){
	imgPrecedent()
})