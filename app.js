// https://www.omnicalculator.com/conversion/cubic-feet-to-gallons

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const gallonsRadio = document.getElementById('gallonsRadio');
const cubicfeetRadio = document.getElementById('cubicfeetRadio');

let gallons;
let cubicfeet = v; 

// labels of the inpust
const variable = document.getElementById('variable');

gallonsRadio.addEventListener('click', function() {
  variable.textContent = 'Cubic feet';
  cubicfeet = v;
  result.textContent = '';
});

cubicfeetRadio.addEventListener('click', function() {
  variable.textContent = 'Gallons';
  gallons = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(gallonsRadio.checked)
    result.textContent = `Gallons = ${computegallons().toFixed(5)}`;

  else if(cubicfeetRadio.checked)
    result.textContent = `Cubic feet = ${computecubicfeet().toFixed(5)}`;
})

// calculation

function computegallons() {
  return Number(cubicfeet.value) * 7.481;
}

function computecubicfeet() {
  return Number(gallons.value) / 7.481;
}