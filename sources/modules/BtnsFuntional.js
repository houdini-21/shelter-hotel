let numNigths = 1;
let Total = 0;

const hiddendiv = (div) => {
  const itemsnavbar = document.querySelectorAll(".div");
  for (let i = 0; i < itemsnavbar.length; i++) {
    let itemdiv = itemsnavbar[i];
    div === itemdiv.id
      ? (showElement(itemdiv))
      : (hiddeElement(itemdiv));
  }
};

const hiddenshowCards = (optionselect) => {
  let cardRooms = document.querySelectorAll(".card-room");
  let btnPlusMinus = document.querySelectorAll("#nigths-btn");
  for (let i = 0; i < cardRooms.length; i++) {
    const divRoom = cardRooms[i];
    const btnNigths = btnPlusMinus[i];
    reset(i);
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
  div.classList.replace("hidden", "fadeIn");
};

const reset = (nArray) => {
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

const CalcPrice = (nigths, nArray) => {
  const priceRoom = document.querySelectorAll(".price-night");
  let price = priceRoom[nArray].id;
  Total = nigths * price;
  priceRoom[nArray].innerText = `$${Total}`;
};

const minInput = (nArray) => {
  const inputValue = document.querySelectorAll(".nigths-input");
  const subCantNights = document.querySelectorAll(".subtitle-night");
  numNigths--;
  if (numNigths < 1) {
    numNigths = 1;
  }
  CalcPrice(numNigths, nArray);
  inputValue[nArray].value = numNigths;
  subCantNights[nArray].innerText = `Por ${numNigths} Noche(s)`;
};

const plusInput = (nArray) => {
  const inputValue = document.querySelectorAll(".nigths-input");
  const subCantNights = document.querySelectorAll(".subtitle-night");
  numNigths++;
  CalcPrice(numNigths, nArray);
  inputValue[nArray].value = numNigths;
  subCantNights[nArray].innerText = `Por ${numNigths} Noche(s)`;
};

export { hiddenshowCards, minInput, plusInput, numNigths, Total, hiddendiv };
