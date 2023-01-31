
let euro = 5.55;
let dolar = 5.12;
let francosuico = 5.53;

    const valor = document.querySelector('#valores');
    const converter = document.querySelector('#converter');
    const numero = document.querySelector('#valorFinal');
    const dolarType = document.querySelector('#dolar');
    const euroType = document.querySelector('#euro');

    function moneyConvert() {

    converter.addEventListener('click', () => {
        if (valor.value >= 1) {
            dolarType.addEventListener('click', () => {
                const dinheiro = valor.value * dolar;
                numero.innerHTML = 'R$ ' + dinheiro.toFixed(2);
            });

            euroType.addEventListener('click', () => {
                const dinheiro = valor.value * euro;
                numero.innerHTML = 'R$ ' + dinheiro.toFixed(2);
                console.log('euro');
            });

        }
    })};

function lightYearConvert() {
    var inputValor = document.getElementById("anos-luz").value;
    var valorEmKMetros = inputValor * 9.461 * 10 ** 12;
    var valorEmKMetros = valorEmKMetros.toFixed(1);
    alert(`${inputValor} anos-luz equivalem a ${valorEmKMetros} metros`);
  }
  
  function celsiusConvert() {
    var inputValor = document.getElementById("celsius").value;
    var valorEmFahrenheit = (inputValor * 9) / 5 + 32;
    alert(`${inputValor}°C equivalem a ${valorEmFahrenheit}°F`);
  }
  