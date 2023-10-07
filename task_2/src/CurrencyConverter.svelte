<script>
  import { currencyPairs } from './CurrencyConverterLogic.ts';
  let amount = 1;
  let fromCurrency = 'USD';
  let toCurrency = 'EUR';
  
  function updateConvertedAmount() {
    return amount * currencyPairs[fromCurrency][toCurrency];
  }

  let convertedAmount = updateConvertedAmount();

  $: {
    convertedAmount = updateConvertedAmount();
  }
</script>

<div class="currency-converter">
  <h1>Currency Converter</h1>
  <div class="input-fields">
    <input type="number" bind:value={amount} />
    <select bind:value={fromCurrency}>
      {#each Object.keys(currencyPairs) as currency}
        <option value={currency}>{currency}</option>
      {/each}
    </select>
    <span>to</span>
    <select bind:value={toCurrency}>
      {#each Object.keys(currencyPairs) as currency}
        <option value={currency}>{currency}</option>
      {/each}
    </select>
  </div>
  <div class="result">
    {amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
  </div>
</div>
