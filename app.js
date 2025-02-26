const productName = document.querySelector('#productName');
const productPrice = document.querySelector('#productPrice');
const buttonSave = document.querySelector('#button-save');
const buttonCancel = document.querySelector('#button-cancel');

buttonSave.addEventListener('click', () => {
  const name = productName.value;
  const price = productPrice.value;
  console.log(name, price);

})