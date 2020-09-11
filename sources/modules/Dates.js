const addZero = (i) => {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
};

const getdate = () => {
  let date = new Date();

  let dd = date.getDate()+1;
  let mm = date.getMonth() + 1;
  let yyyy = date.getFullYear();

  dd = addZero(dd);
  mm = addZero(mm);

  return yyyy + "-" + mm + "-" + dd;
};

const addEndReserve = (datestart, numNigths) => {
  let dateparts = datestart.split("-").map((d) => parseInt(d));

  let day = dateparts[2];
  let month = dateparts[1];
  let year = dateparts[0];
  
  let date = new Date(year, month - 1, day + numNigths);
  day = date.getDate();
  month = date.getMonth() + 1;
  year = date.getFullYear();

  day = addZero(day);
  month = addZero(month);

  return year + "-" + month + "-" + day;
};


const updateDateEnd = (date) => {
  document.getElementById("form-dateend").value = date;
};

export { getdate, updateDateEnd, addEndReserve };
