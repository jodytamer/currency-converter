# currency-converter
Currency converter built with HTML, Tailwind CSS and JavaScript
# 💱 Currency Converter

A responsive web app that converts an amount between currencies using live exchange rates.

🔗 **[Live Demo](https://jodytamer.github.io/currency-converter/)**



## Features

- Currency list loaded automatically from the [Frankfurter API](https://frankfurter.dev)
- Convert any amount between two currencies using the latest exchange rates
- Swap button to switch the "from" and "to" currencies
- Shows the date of the exchange rate used
- Defaults to USD → EUR on load
- Handles edge cases: empty or zero amount defaults to 1, and same-currency conversion skips the API call
- Error message if the rate can't be fetched
- Modern dark UI with a glass-style card, responsive on mobile and desktop

## Built With

- HTML5
- Tailwind CSS (via CDN)
- JavaScript (Fetch API, DOM manipulation)
- Google Fonts (Inter)

## How to Run Locally

1. Clone the repository:
```
   git clone https://github.com/jodytamer/currency-converter.git
```
2. Open the folder and double-click `index.html`, or run it with the Live Server extension in VS Code.

No installation or build step is needed. An internet connection is required for the exchange rates.

## What I Learned

- Fetching data from a public API with `fetch` and promises
- Filling dropdown menus dynamically from API data
- Handling button clicks and updating the page with the DOM
- Building URLs with template literals and handling errors
- Styling a responsive layout with Tailwind CSS

## Future Improvements

- Convert automatically when the swap button is clicked
- Add a chart of historical exchange rates
- Save favorite currency pairs
- Add a light/dark mode toggle

## Author

**Joudy** · [GitHub](https://github.com/jodytamer)
