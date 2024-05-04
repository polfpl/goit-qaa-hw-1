const numbers = [13, 5, 7, 55, 34, 23, 1, 3];
const treshold = 5;

for (let i=0; i < numbers.length; i += 1){
	if (numbers[i] <= treshold){
	continue;}
	console.log(`Liczba większa od ${treshold} : ${numbers[i]}`);
}