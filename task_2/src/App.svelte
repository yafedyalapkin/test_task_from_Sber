<script>
  import CurrencyConverter from './CurrencyConverter.svelte';

  async function fetchCurrency() {
    const [rub, usd, eur, gbp] = await Promise.all([
      fetch(`https://open.er-api.com/v6/latest/RUB`),
      fetch(`https://open.er-api.com/v6/latest/USD`),
      fetch(`https://open.er-api.com/v6/latest/EUR`),
      fetch(`https://open.er-api.com/v6/latest/GBP`),
    ]);
    const rubData = await rub.json();
    const usdData = await usd.json();
    const eurData = await eur.json();
    const gbpData = await gbp.json();

    return {
      RUB: rubData,
      USD: usdData,
      EUR: eurData,
      GBP: gbpData
    };
  }

  const promise = fetchCurrency()
</script>

<main>
  {#await promise}
    <span>Loading</span>
  {:then data}
    <CurrencyConverter currentRates={data} />
  {:catch error}
    <span>Error: {error}</span>
  {/await}
</main>

