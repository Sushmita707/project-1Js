let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
  {
    quote: "The best way to find yourself is to lose yourself in the service of others.",
    person: 'Mahatma Gandhi'
  },
  {
    quote: "Be the change you wish to see in the world.",
    person: "Mahatma Gandhi"
  },
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    person: "Nelson Mandela"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    person: "Steve Jobs"
  },
  {
    quote: "Believe you can and you're halfway there.",
    person: "Theodore Roosevelt"
  },
  {
    quote: "Happiness is not something ready made. It comes from your own actions.",
    person: "Dalai Lama"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    person: "Eleanor Roosevelt"
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    person: "Winston Churchill"
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    person: "Wayne Gretzky"
  },
  {
    quote: "If you want to go fast, go alone. If you want to go far, go together.",
    person: "African Proverb"
  }
];

function getRandomQuote() {
  let random = Math.floor(Math.random() * quotes.length);
  return quotes[random];
}

function displayQuote() {
  let randomQuote = getRandomQuote();
  quote.textContent = randomQuote.quote;
  person.textContent = randomQuote.person;
}

btn.addEventListener('click', displayQuote);
