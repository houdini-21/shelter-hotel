let templateTable = "";

const tableBody = (data) => {
  const tabletemp = `
  <tr>
  <td>${data.id}</td>
  <td>${data.datestart}</td>
  <td>${data.dateend}</td>
  <td>${data.nameGuest}</td>
  <td>${data.roomdata}</td>
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
  showReserves() {
    return this._reserves;
  }
}

class NewReserve {
  constructor(id, datestart, dateend, nameGuest, roomdata, phone, email) {
    (this._id = id),
      (this._datestart = datestart),
      (this._dateend = dateend),
      (this._nameGuest = nameGuest),
      (this._roomdata = roomdata),
      (this._phone = phone),
      (this._email = email);

    new Reserves().addReserve(this.dataReserve);
  }

  set id(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }

  set datestart(datestart) {
    this._datestart = datestart;
  }

  get datestart() {
    return this._datestart;
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

  set dateend(dateend) {
    this._dateend = dateend;
  }

  get dateend() {
    return this._dateend;
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
      datestart: this.datestart,
      dateend: this.dateend,
      nameGuest: this.nameGuest,
      roomdata: this.roomdata,
      phone: this.phone,
      email: this.email,
    };
    return data;
  }
}
export { NewReserve };
