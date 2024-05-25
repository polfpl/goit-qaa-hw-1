/*Napisz funkcję JavaScript, która przyjmuje jako dane wejściowe tablicę liczb i zwraca nową tablicę, w której każda liczba jest podwojona.
Wykorzystaj metodę map() do zaimplementowania funkcji. Wewnątrz metody map() użyj funkcji strzałkowej, aby podwoić każdą liczbę.
Przetestuj swoją funkcję, tworząc tablicę liczb i przekazując ją jako argument do swojej funkcji. Wyświetl oryginalną tablicę i tablicę podwojoną w konsoli.*/

const tablica = [1,2,3,4,5]
const tab2 = tablica.map(tab => tab *2 )
console.log(`Pierwotna tablica: ${tablica}`);
console.log(tablica);
console.log(`Tablica z elementami pomnożonymi przez 2: ${tab2}`);
console.log(tab2);



/*1. Deklaracja tablic:**

`const tablica = [1,2,3,4,5]`: Tworzy nową stałą tablicę o nazwie `tablica` i inicjuje ją wartościami `[1,2,3,4,5]`.

 `const tab2 = tablica.map(tab => tab *2 )`: Tworzy nową stałą tablicę o nazwie `tab2` przy użyciu metody `map()` zastosowanej do `tablica`. Metoda `map()` tworzy nową tablicę, transformując każdy element oryginalnej tablicy za pomocą podanej funkcji strzałkowej `(tab => tab * 2)`. W tym przypadku funkcja mnoży każdy element przez 2.

2. Wyświetlanie tablic:**

`console.log(`Pierwotna tablica: ${tablica}`);`: Wyświetla w konsoli napis "Pierwotna tablica:" i zawartość `tablica`.

`console.log(tablica);`: Wyświetla w konsoli zawartość `tablica`.

`console.log(`Tablica z elementami pomnożonymi przez 2: ${tab2}`);`: Wyświetla w konsoli napis "Tablica z elementami pomnożonymi przez 2:" i zawartość `tab2`.

`console.log(tab2);`: Wyświetla w konsoli zawartość `tab2`.

**Wynik:**

Po wykonaniu tego kodu w konsoli zostaną wyświetlone następujące dane:

```
Pierwotna tablica: 1,2,3,4,5
[ 1, 2, 3, 4, 5 ]
Tablica z elementami pomnożonymi przez 2: 2,4,6,8,10
[ 2, 4, 6, 8, 10 ]
```

Jak widać, oryginalna tablica `tablica` pozostaje niezmieniona, a nowa tablica `tab2` zawiera elementy pomnożone przez 2.*/