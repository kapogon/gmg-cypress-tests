## Wyszukiwanie w kategorii mieszkania

**Przypadek testowy:** Resetowanie filtrów

**Warunki wstępne:** Użytkownik jest na stronie https://gratka.pl/nieruchomosci/mieszkania

**Kroki testowe:**
    
    1. Uzupełnij pola 
        - Lokalizacja: Warszawa
        - Cena do: 500000, 
        - Liczba pokoi od: 2 do: 3
    2. Kliknij przycisk Filtruj. (Wyświetlone ogłoszenia zostały wyszukane wg filtrów).
    3. Kliknij przycisk Wyczyść filtry, a następnie przycisk "Filtruj".

**Oczekiwany rezultat:** Wszystkie filtry, po za kategorią i rodzajem ogłoszenia zostały usunięte. Wyświetlone zostały wszystkie ogłoszenia w kategorii Mieszkania. 

##

**Przypadek testowy:** Weryfikacja działania filtrów wyszukiwarki 

**Warunki wstępne:** Użytkownik jest na stronie https://gratka.pl/nieruchomosci/mieszkania

**Kroki testowe:**
    
    1. Uzupełnij filtry: 
        - Lokalizacja: Warszawa, Gdańsk
        - Cena do: 500000 
        - Liczba pokoi od: 2 do: 3
        - Powierzchnia dodatkowa: balkon
    2. Kliknij przycisk Filtruj.

**Oczekiwany rezultat:** Wynikiem wyszukiwania są mieszkania 2 lub 3 pokojowe z balkonem zlokalizowane w Warszawie i Gdańsku, w cenie do 500000.

##

**Przypadek testowy:** Sortowanie wg ceny od najniższej

**Warunki wstępne:** Użytkownik jest na stronie https://gratka.pl/nieruchomosci/mieszkania

**Kroki testowe:**
    
    1. Uzupełnij filtry: 
        - Lokalizacja: Warszawa, Gdańsk
        - Cena do: 500000 
        - Liczba pokoi od: 2 do: 3
        - Powierzchnia dodatkowa: balkon
    2. Kliknij przycisk Filtruj.
    3. Z listy rozwijanej Sortowanie wybierz: Cena - od najniższej.

**Oczekiwany rezultat:** Ogłoszenia są posortowane po cenie rosnąco.

## 

**Przypadek testowy:** Weryfikacja działania filtrów wyszukiwarki z uwzględnieniem promienia

**Warunki wstępne:** Użytkownik jest na stronie https://gratka.pl/nieruchomosci/mieszkania

**Kroki testowe:**
    
    1. Uzupełnij filtry: 
        - Lokalizacja: Warszawa, promień +5km
        - Cena do: 500000 
        - Liczba pokoi od: 2 do: 3
        - Powierzchnia dodatkowa: balkon
    3. Kliknij przycisk Filtruj.

**Oczekiwany rezultat:** Wynikiem wyszukiwania są mieszkania 2 lub 3 pokojowe z balkonem zlokalizowane w Warszawie w promieniu 5km od centrum, w cenie do 500000.



