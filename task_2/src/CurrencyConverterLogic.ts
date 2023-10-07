export let currencyPairs: Record<string, Record<string, number>> = {};

// Функция для получения актуальных курсов валют с API
async function fetchExchangeRates() {
  const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
  const data = await response.json();
  currencyPairs = data.rates;
}

fetchExchangeRates();
