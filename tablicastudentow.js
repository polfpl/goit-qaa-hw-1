/*
Napisz funkcję JavaScript, która przyjmuje jako dane wejściowe tablicę obiektów reprezentujących   studentów i zwraca nową tablicę zawierającą tylko imiona studentów.
   1. Wykorzystaj metodę map() do zaimplementowania funkcji. Wewnątrz metody map() użyj funkcji strzałkowej, aby uzyskać dostęp do właściwości name każdego obiektu studenta.
   2. Przetestuj swoją funkcję, tworząc tablicę obiektów studentów i przekazując ją jako argument do swojej funkcji. Wyświetl oryginalną tablicę obiektów studentów oraz tablicę zawierającą tylko imiona w konsoli.
   */

const students = [
	{name: " Paweł",
	 surname: " Pawłowski"},
	 
	{name: " Adam",
	 surname: " Adamowski"},
	 
	 {name: " Kasia",
	  surname:" Kasińska"},
]
console.log(`Oryginalnie utowrzona tablica obiektów ${students}`);
console.log(students);

const studOryginalMod = students.flatMap((student => (student.name + " " + student.surname)))
console.log(`Lista studentów (imiona i nazwiska): ${studOryginalMod}`);
	console.log(studOryginalMod);


const studTab = students.map(student => student.name)
		console.log(`Lista studentów (tylko imiona): ${studTab}`);
	console.log(studTab);
	
/*

Utworzono tablicę obiektów `students` zawierającą dane uczniów (imię i nazwisko).

 Wyświetlono oryginalną tablicę `students` za pomocą `console.log`.

 Utworzono nową tablicę `studOryginalMod` za pomocą metody `flatMap`, która łączy imię i nazwisko każdego ucznia w jeden string.

 Wyświetlono `studOryginalMod` za pomocą `console.log`.

 Utworzono nową tablicę `studTab` za pomocą metody `map`, która pobiera tylko imiona uczniów z tablicy `students`.

 Wyświetlono `studTab` za pomocą `console.log`.

Po uruchomieniu kodu zostanie wyświetlona następująca informacja:

Oryginalnie utowrzona tablica obiektów [
  { name: 'Paweł', surname: 'Pawłowski' },
  { name: 'Adam', surname: 'Adamowski' },
  { name: 'Kasia', surname: 'Kasińska' }
]
Lista studentów (imiona i nazwiska): Paweł Pawłowski,Adam Adamowski,Kasia Kasińska
Lista studentów (tylko imiona): Paweł,Adam,Kasia

*/
