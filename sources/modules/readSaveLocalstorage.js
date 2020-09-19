const saveDataLocalStorage = (itemlocalstorage,data) => {
  localStorage.setItem(itemlocalstorage, JSON.stringify(data));
};

const readDataLocalStorage = (itemlocalstorage) => {
  let dataStorage = JSON.parse(localStorage.getItem(itemlocalstorage));
  return (dataStorage);
};

export { saveDataLocalStorage, readDataLocalStorage };
