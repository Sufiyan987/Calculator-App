 const display = document.getElementById('display');

    function appendValue(value) {
      if (display.innerText === '0' || display.innerText === 'Error') {
        display.innerText = value;
      } else {
        display.innerText += value;
      }
    }

    function clearDisplay() {
      display.innerText = '0';
    }

    function offDisplay() {
      isOn = false
      display.innerText = ''
    }


    function calculate() {
      try {
        const result = eval(display.innerText.replace(/÷/g, '/').replace(/×/g, '*'));
        display.innerText = result;
      } catch (e) {
        display.innerText = 'Error';
      }
    }