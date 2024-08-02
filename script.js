const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');

function getQuote() {
    const url = 'https://quotes-api-self.vercel.app/quote';
    fetch(url)
        .then(response => response.json())
        .then(function(data) {
            const quote = data;
            quoteElement.innerText = quote.quote;
            authorElement.innerText = `- ${quote.author}`;
        });
}

getQuote()