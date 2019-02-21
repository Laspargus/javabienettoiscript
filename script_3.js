etages=prompt("Salut, bienvenue dans ma super pyramide ! Combien d’étages veux-tu ?");


for(let step = 1; step <=etages; step++){
 let space = etages-step;
 console.log(" ".repeat(space) + "#".repeat(step))
}

