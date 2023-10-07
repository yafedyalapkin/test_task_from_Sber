<script>
    export let currentRates;
    let fromCurrency = 'RUB';
    let toCurrency = 'RUB';
    let fromAmount = '';
    let toAmount = '';

    const calculateFromAmount = (newValue) => {
        fromAmount = (newValue * currentRates[toCurrency].rates[fromCurrency]).toFixed(2);
    };

    const calculateToAmount = (newValue) => {
        toAmount = (newValue * currentRates[fromCurrency].rates[toCurrency]).toFixed(2);
    };

    const convertCurrency = (event) => {
        const newInputValue = event.target.value;

        if(event.target.id === 'sell') {
            fromAmount = newInputValue;
            calculateToAmount(newInputValue);
        } else if(event.target.id === 'buy') {
            toAmount = newInputValue;
            calculateFromAmount(newInputValue)
        }
    };

    const handleFromCurrencySelect = (event) => {
        fromCurrency = event.target.textContent;
        calculateFromAmount(toAmount);
    };

    const handleToCurrencySelect = (event) => {
        toCurrency = event.target.textContent;
        calculateToAmount(fromAmount);
    };
</script>

<body>
  <section class="currency">
    <h1 class="currency__title">Конвертер валют</h1>

    <div>
        <div class="currency__exchanger">
            <div class="currency__sell">
                <div class="sell__title">Одна валюта</div>

                <div class="currency__btns">
                    <button class={`currency__btn ${fromCurrency === 'RUB' ? 'active': ''}`} on:click={handleFromCurrencySelect}>
                        RUB
                    </button>
                    <button class={`currency__btn ${fromCurrency === 'USD' ? 'active': ''}`} on:click={handleFromCurrencySelect}>
                        USD
                    </button>
                    <button class={`currency__btn ${fromCurrency === 'EUR' ? 'active': ''}`} on:click={handleFromCurrencySelect}>
                        EUR
                    </button>
                    <button class={`currency__btn ${fromCurrency === 'GBP' ? 'active': ''}`} on:click={handleFromCurrencySelect}>
                        GBP
                    </button>
                </div>

                <input id="sell" type="number" placeholder="0" bind:value={fromAmount} on:input={convertCurrency}>
            </div>

            <div class="currency__buy">
                <div class="sell__title">Другая валюта</div>

                <div class="currency__btns">
                    <button class={`currency__btn ${toCurrency === 'RUB' ? 'active': ''}`} on:click={handleToCurrencySelect}>
                        RUB
                    </button>
                    <button class={`currency__btn ${toCurrency === 'USD' ? 'active': ''}`} on:click={handleToCurrencySelect}>
                        USD
                    </button>
                    <button class={`currency__btn ${toCurrency === 'EUR' ? 'active': ''}`} on:click={handleToCurrencySelect}>
                        EUR
                    </button>
                    <button class={`currency__btn ${toCurrency === 'GBP' ? 'active': ''}`} on:click={handleToCurrencySelect}>
                        GBP
                    </button>
                </div>

                <input id="buy" type="number" placeholder="0" bind:value={toAmount} on:input={convertCurrency}>
            </div>
        </div>
    </div>
  </section>
</body>

<style>
    .currency {
      text-align: center;
  }
  .currency__title {
      font-family: 'AR One Sans', sans-serif;
      color: #141414;
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin-bottom: 50px;
  }
  div {
      margin: 0 auto;
  }
  .currency__exchanger {
      display: flex;
      justify-content: space-between;
      width: 960px;
      gap: 60px;
  }
  .currency__sell,
  .currency__buy {
      flex: 1;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .sell__title {
      color: #9F9F9F;
      font-family: 'AR One Sans', sans-serif;
      font-size: 12px;
      font-weight: 400;
      display: flex;
      margin-bottom: 10px;
  }
  .currency__btns {
      display: flex;
      margin-bottom: 10px;
  }
  .currency__btn {
      padding: 10px 20px;
      background-color: #fff;
      border: 1px solid #E5E5E5;
      border-radius: 10px;
      cursor: pointer;
      color: #C6C6C6;
      text-align: center;
      font-family: 'AR One Sans', sans-serif;
      font-size: 12px;
      font-weight: 400;
  }
  .currency__btn:not(:last-child) {
      margin-right: 10px;
  }
  .active {
      border-radius: 3px 0px 0px 3px;
      background: #833AE0;
      color: #FFF;
      text-align: center;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      border-radius: 10px;
  }
  input {
      width: 280px;
      height: 80px;
      display: flex;
      border-radius: 10px;
      border: 1px solid #E5E5E5;
      outline: none;
      color: #000;
      font-family: 'AR One Sans', sans-serif;
      font-size: 36px;
      font-style: normal;
      padding: 5px;
      font-weight: 700;
      line-height: normal;
  }
</style>