const addZero = (i) => {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
};

const getdate = () => {
  let date = new Date();

  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  let yyyy = date.getFullYear();

  dd = addZero(dd);
  mm = addZero(mm);

  return yyyy + "-" + mm + "-" + dd;
};

const addEndReserve = (datestart, numNigths) => {
  var dateparts = datestart.split("-").map((d) => parseInt(d));

  let day = dateparts[2] + numNigths;
  let month = dateparts[1];
  let year = dateparts[0];

  day = addZero(day);
  month = addZero(month);

  return year + "-" + month + "-" + day;
};

const updateDateEnd = (date) => {
  document.getElementById("form-dateend").value = date;
};

export { getdate, updateDateEnd, addEndReserve };
