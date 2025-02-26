const productName = document.querySelector('#productName');
const productPrice = document.querySelector('#productPrice');
const buttonSave = document.querySelector('#button-save');
const buttonCancel = document.querySelector('#button-cancel');
const productList = document.querySelector('#product-list');

const createNewProduct = (name, price) => {
  const ionCard = document.createElement('ion-card');
  const newProductItem = document.createElement('ion-card-content');
  newProductItem.textContent = name + ': $' + price;
  ionCard.appendChild(newProductItem);
  productList.appendChild(ionCard);
}

const clearInputs = () => {
  productName.value = '';
  productPrice.value = '';
}

const presentAlert = () => {
  const alert = document.createElement('ion-alert');
  alert.header = 'Datos no válidos';
  alert.subHeader = 'Por favor, complete los datos';
  alert.message = 'Nombre o Precio vacíos';
  alert.buttons = ['OK'];

  document.body.appendChild(alert);
  return alert.present();
}

const isEmpty = str => !str.trim().length;

buttonSave.addEventListener('click', () => {
  const name = productName.value;
  const price = productPrice.value;

  if (isEmpty(name) || isEmpty(price)) {
  console.log('Datos no válidos');
  return;
}

  createNewProduct(name, price);
  clearInputs();

})

buttonCancel.addEventListener('click', clearInputs);