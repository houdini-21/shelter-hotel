let templateTable = "";

const tableBody = (data) => {
  const tabletemp = `
  <tr>
  <td>${data.id}</td>
  <td>${data.dateReserve}</td>
  <td>${data.nameGuest}</td>
  <td>${data.roomdata}</td>
  <td>${data.datestart}</td>
  <td>${data.phone}</td>
  <td>${data.email}</td>
</tr>`;
  templateTable += tabletemp;
  document.getElementById("body-table").innerHTML = templateTable;
};

class Reserves {
  constructor() {
    this._reserves = [];
  }

  addReserve(reservedata) {
    this._reserves.push(reservedata);
    tableBody(reservedata);
  }

  readReserve() {
    return this._reserves;
  }
}
let reserve = new Reserves();

class NewReserve {
  constructor(id, dateReserve, nameGuest, roomdata, datestart, phone, email) {
    (this._id = id),
      (this._dateReserve = dateReserve),
      (this._nameGuest = nameGuest),
      (this._roomdata = roomdata),
      (this._datestart = datestart),
      (this._phone = phone),
      (this._email = email);

    reserve.addReserve(this.dataReserve);
  }

  set id(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }

  set dateReserve(dateReserve) {
    this._dateReserve = dateReserve;
  }

  get dateReserve() {
    return this._dateReserve;
  }

  set nameGuest(nameGuest) {
    this._nameGuest = nameGuest;
  }

  get nameGuest() {
    return this._nameGuest;
  }
  set roomdata(roomdata) {
    this._roomdata = roomdata;
  }

  get roomdata() {
    return this._roomdata;
  }

  set datestart(datestart) {
    this._datestart = datestart;
  }

  get datestart() {
    return this._datestart;
  }

  set phone(phone) {
    this._phone = phone;
  }

  get phone() {
    return this._phone;
  }

  set email(email) {
    this._email = email;
  }

  get email() {
    return this._email;
  }

  get dataReserve() {
    const data = {
      id: this.id,
      dateReserve: this.dateReserve,
      nameGuest: this.nameGuest,
      roomdata: this.roomdata,
      datestart: this.datestart,
      phone: this.phone,
      email: this.email,
    };
    return data;
  }
}

export { NewReserve, Reserves };
