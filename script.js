fetch("https://api.frankfurter.dev/v1/currencies")
  .then(response => response.json())
  .then(data => {
    const currencies = Object.keys(data);
    const fromSelect = document.getElementById("from-currency");
    const toSelect = document.getElementById("to-currency");

    currencies.forEach(currency => {
      const option1 = document.createElement("option");
      option1.value = currency;
      option1.textContent = currency;
      fromSelect.appendChild(option1);

      const option2 = document.createElement("option");
      option2.value = currency;
      option2.textContent = currency;
      toSelect.appendChild(option2);
    });

    // Set some nice default values if available (e.g., USD to EUR)
    if (fromSelect.querySelector("option[value='USD']")) fromSelect.value = "USD";
    if (toSelect.querySelector("option[value='EUR']")) toSelect.value = "EUR";
  })
  .catch(error => console.error("Error loading currencies:", error));


// 2. Handle the Convert Button Click
const convertBtn = document.getElementById("convert-btn");

convertBtn.addEventListener("click", () => {
  let amount = document.getElementById("amount").value;
  const fromCurrency = document.getElementById("from-currency").value;
  const toCurrency = document.getElementById("to-currency").value;
  const resultDiv = document.getElementById("result");

  // If amount is empty or zero, default to 1 as per mentor instructions
  if (!amount || amount <= 0) {
    amount = 1;
  }

  // If both currencies are the same, no need to call API
  if (fromCurrency === toCurrency) {
    resultDiv.innerHTML = `<h3 class="text-violet-300 font-semibold text-lg">${amount}${fromCurrency} = ${amount}${toCurrency}</h3>`;
    return;
  }

  // Construct the API URL using template literals (backticks ``)
  const apiUrl = `https://api.frankfurter.dev/v1/latest?amount=${amount}&base=${fromCurrency}&symbols=${toCurrency}`;

  // Call the conversion API
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const convertedRate = data.rates[toCurrency];
      
      // Display the final calculation result inside the result div
      resultDiv.innerHTML = `
        <h3 class="text-violet-300 font-bold text-lg">
          ${amount}${fromCurrency} = ${convertedRate}${toCurrency}
        </h3>
        <p class="text-xs text-slate-500 mt-1">Exchange Date: ${data.date}</p>
      `;
    })
    .catch(error => {
      console.error("Conversion error:", error);
      resultDiv.innerHTML = `<h3 class="text-red-500 font-medium">Failed to fetch conversion rate. Try again!</h3>`;
    });
});


// 3. Handle the Swap Button Click
const swapBtn = document.getElementById("swap-btn");

swapBtn.addEventListener("click", () => {
  const fromSelect = document.getElementById("from-currency");
  const toSelect = document.getElementById("to-currency");

  // Temporarily store the value of 'from'
  const tempValue = fromSelect.value;

  // Swap the values
  fromSelect.value = toSelect.value;
  toSelect.value = tempValue;
});