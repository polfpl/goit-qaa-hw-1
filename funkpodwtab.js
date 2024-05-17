
function podwojenieTablicy (argumenty) {   		// zdefiniowanie funkcji 
  const tablica = [];					   		// zdefiniowanie tablicy
  for (let i=0; i<argumenty.length; i++){  		// pętla tworzaca tablicę
	  tablica.push(argumenty[i] * 2 );     		// i mnożąca elementy tablicy przez 2
	}
	  return tablica					   		// zwrócenie tablicy
} 
const tablica2 = [1, 2, 3, 4];             		// zdefiniowanie argumentów dla funkcji
const resultat = podwojenieTablicy(tablica2) 	// wywołanie funkcji z przekazaniem argumentów
console.log(resultat);						 	// wyświetlenie wyniku w konsoli	