/*

inputs: bill, number of people in party, QoS

outputs: bill with tip, divided bill with tip

*/

const price = document.getElementById('price');
const guests = document.getElementById('numberOfPeople');
const quality = document.getElementById('quality');
const tipAmount = document.getElementById('Tip');
const totalBill = document.getElementById('TotalBill');
const split = document.getElementById('split');
let submit = document.getElementById('submit');

submit.addEventListener('click',calculate);

function calculate(e){
if (price.value <=0 || price.value == '')
{
    alert('Enter price greater than 0:');
}
else if (quality.value == '0')
{
    alert('Please choose quality of service:');
}
else if (guests.value <=0 || guests.value == '' ){

    alert('Please enter number greater than 0:');
}
else
{
const tip = ((price.value * quality.value)).toFixed(2);
tipAmount.innerHTML = 'Tip Amount: $' + tip;
totalBill.innerHTML = 'Grand Total: $' + (Number(price.value) + Number(tip)).toFixed(2);
split.innerHTML = 'Share Per Person: $'+ ((Number(tip) + Number(price.value))/guests.value).toFixed(2) + ' each';
showAmount();
price.value = '';
guests.value = '';
quality.value = '';
}

}

function showAmount(){
   var x = document.getElementById('display');
   x.className = 'show';
   setTimeout(() => {
       x.className = x.className.replace('show','');
   }, 5000);

}