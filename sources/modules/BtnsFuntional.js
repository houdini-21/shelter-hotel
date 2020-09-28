let numNigths = 1;
let Total = 0;

const hiddendiv = (div) => {
  const itemsnavbar = document.querySelectorAll(".div");
  for (let i = 0; i < itemsnavbar.length; i++) {
    let itemdiv = itemsnavbar[i];
    div === itemdiv.id ? showElement(itemdiv) : hiddeElement(itemdiv);
  }
};

const hiddenandshowCards = (optionselect) => {
  let cardRooms = document.querySelectorAll(".card-room");
  let btnPlusMinus = document.querySelectorAll("#nigths-btn");
  for (let i = 0; i < cardRooms.length; i++) {
    const divRoom = cardRooms[i];
    const btnNigths = btnPlusMinus[i];
    resetInputNights(i);
    optionselect === "0"
      ? (showElement(divRoom), hiddeElement(btnNigths))
      : optionselect === divRoom.id
      ? (showElement(divRoom), showElement(btnNigths))
      : (hiddeElement(divRoom), hiddeElement(btnNigths));
  }
};

const hiddeElement = (div) => {
  div.classList.add("hidden");
};

const showElement = (div) => {
  div.classList.remove("hidden");
};

const resetInputNights = (nArray) => {
  console.log(numNigths);
  const inputValue = document.querySelectorAll(".nigths-input");
  const subCantNights = document.querySelectorAll(".subtitle-night");
  const roomsPrice = document.querySelectorAll(".price-night");
  numNigths = 1;
  Total = 0;
  inputValue[nArray].value = numNigths;
  subCantNights[nArray].innerText = `Por Noche(s)`;
  let priceReseted = roomsPrice[nArray].id;
  roomsPrice[nArray].innerText = `$${priceReseted}`;
};

const CalculePrice = (nigths, nArray) => {
  const priceRoom = document.querySelectorAll(".price-night");
  let price = priceRoom[nArray].id;
  Total = nigths * price;
  priceRoom[nArray].innerText = `$${Total}`;
};

const minusBtn = (nArray) => {
  const inputValue = document.querySelectorAll(".nigths-input");
  console.log(numNigths);
  const subCantNights = document.querySelectorAll(".subtitle-night");
  numNigths--;
  if (numNigths < 1) {
    numNigths = 1;
  }
  CalculePrice(numNigths, nArray);
  inputValue[nArray].value = numNigths;
  subCantNights[nArray].innerText = `Por ${numNigths} Noche(s)`;
};

const plusBtn = (nArray) => {
  const inputValue = document.querySelectorAll(".nigths-input");
  console.log(numNigths);
  const subCantNights = document.querySelectorAll(".subtitle-night");
  numNigths++;
  CalculePrice(numNigths, nArray);
  inputValue[nArray].value = numNigths;
  subCantNights[nArray].innerText = `Por ${numNigths} Noche(s)`;
};

export { hiddenandshowCards, minusBtn, plusBtn, numNigths, Total, hiddendiv };
