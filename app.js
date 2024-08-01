const currencyEl_one = document.getElementById('currency-1');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

function calculate() {
  const currencyCode_one = currencyEl_one.value;
  const currencyCode_two = currencyEl_two.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currencyCode_one}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currencyCode_two];

      rateEl.innerText = `1 ${currencyCode_one} = ${rate} * ${currencyCode_two} `;
      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
}

// add Event listeners
currencyEl_one.addEventListener('change', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value= currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate()
});
