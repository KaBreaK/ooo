let currentDate = new Date('2024-06-29');
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');

    // Funkcja do pobierania danych z pliku JSON
    async function fetchTexts() {
        try {
            const response = await fetch('text.json'); // Załaduj dane z pliku JSON
            const texts = await response.json();
            createSquares(texts);
        } catch (error) {
            console.error('Błąd podczas pobierania danych:', error);
        }
    }

    // Funkcja do tworzenia kwadratów z tekstem
    function createSquares(textArray) {
        textArray.forEach(text => {
            adzien = currentDate.toLocaleDateString('pl-PL', {
                year: 'numeric',   // Rok w formacie liczbowym
                month: 'long',     // Pełna nazwa miesiąca
                day: 'numeric'     // Dzień miesiąca
            });
            const square = document.createElement('div');
            square.classList.add('square');
            square.innerHTML = `<h2>${adzien}</h2>`
            square.addEventListener('click', () => {
                displayCard(text.content);
            });
            container.appendChild(square);
            currentDate.setDate(currentDate.getDate() + 1);
        });
    }
    function displayCard(text) {
        cardContent.innerHTML = text;
        card.style.display = 'block';
    }
    fetchTexts();
});