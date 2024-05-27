  /*  Stwórz obiekt JavaScript reprezentujący osobę o imieniu "Maciej". Obiekt powinien mieć następujące  właściwości i metody:
  -  username: Ciąg znaków reprezentujący imię osoby.
  -  showName(): Metoda, która zapisuje właściwość username w konsoli, używając słowa kluczowego this.
  -  Zaimplementuj metodę showName() używając słowa kluczowego this, aby odnosić się do samego obiektu.
  -  Przetestuj swój obiekt, wywołując metodę showName() i sprawdzając, czy poprawnie zapisuje właściwość username w konsoli. */

const osoba = { 
	username: "Maciej",
	showName(){console.log(this.username)
	}
};
osoba.showName();



	