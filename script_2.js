// Un prompt s'affiche avec la question suivante
nombre=prompt("De quel nombre veut tu calculer la factorielle ?");


for (var i = nombre-1; i > 1; i--) {
	console.log(`voici mon chiffre ${i}`)
	multiplication = nombre*i
	nombre=multiplication
}

console.log(`le resultat est :  ${nombre}`)

