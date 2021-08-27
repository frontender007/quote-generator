const quoteContainer = document.getElementById('quote-container');
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuote = document.getElementById('new-quote');

let quotes = [];

async function getQuote() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        quotes = await fetch(apiUrl)
        .then(response => response.json())
        .then(data => data);
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quote.textContent = randomQuote.text;
        

        if (!randomQuote.author) {
            author.textContent = "Unknown";
        } else {
            author.textContent = randomQuote.author;
        }

        if (randomQuote.text.length > 100) {
            quote.classList.add('long-quote');
        } else {
            quote.classList.remove('long-quote');
        }

        
        
        
    } catch (error) {
        console.log(error.message);
    }
}


function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.textContent} - ${author.textContent}`;
    window.open(twitterUrl, '_blank');
}

twitterBtn.addEventListener('click', tweetQuote);
newQuote.addEventListener('click', getQuote);

getQuote();