/* 
Utworzyć obiekt JavaScript reprezentujący półkę na książki. Obiekt powinien mieć następujące właściwości i metody:
- authors: Tablica do przechowywania imion autorów na półce z książkami.
- getAuthors(): Metoda zwracająca tablicę autorów przechowywanych na półce z książkami.
- addAuthor(authorName): Metoda, która przyjmuje imię autora jako argument i dodaje je do tablicy autorów na półce z książkami.

Zaimplementuj metody obiektu półki na książki, używając słowa kluczowego this, aby odnosić się do samego obiektu.

Przetestuj swój obiekt, dodając kilku autorów do półki na książki, a następnie pobierając listę autorów za pomocą metody getAuthors(). 
*/




const bookShelf = {								//deklaracja obiektu bookShelf
	authors: ["Prus", "Mickiewicz", "Poe", ],				//właściwość: tablica autorów	
	getAuthors(){								//definicja metody  
	return this.authors},							//wywołanie właściwości(tablicy) przy użyciu 
										//this odwołującego się do bookShelf
	addAuthor(authorName){this.authors.push(authorName)},			//definicja metody użycie this jako bookShelf
}
	console.log(bookShelf.getAuthors());					//wywołanie w konsoli metody getAuthors
	bookShelf.addAuthor("Platon");						//wywołanie metody addAuthor i dodanie do 
										//do tablicy nowego autora (Platon)
	console.log(bookShelf.getAuthors());					//wywołanie w konsoli metody getAuthors
										//z dodanym nowym autorem
