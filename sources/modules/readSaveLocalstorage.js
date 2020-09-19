const saveDataLocalStorage = (data) => {
  localStorage.setItem("rooms-data", JSON.stringify(data));
};

const readDataLocalStorage = () => {
  let dataStorage = JSON.parse(localStorage.getItem("rooms-data"));
  return (dataStorage);
};

export { saveDataLocalStorage, readDataLocalStorage };
