export default class Guest {
  constructor(name, lastname, email, phone, datestart, dateend, numrooms) {
    (this._name = name),
      (this._lastname = lastname),
      (this._phone = phone),
      (this._email = email),
      (this._datestart = datestart),
      (this._dateend = dateend),
      (this._numrooms = numrooms);
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get lastname() {
    return this._lastname;
  }
  set lastname(lastname) {
    this._lastname = lastname;
  }

  get phone() {
    return this._phone;
  }
  set phone(phone) {
    this._phone = phone;
  }

  get email() {
    return this._email;
  }
  set email(email) {
    this._email = email;
  }

  get numrooms() {
    return this._numrooms;
  }
  set numrooms(numrooms) {
    this._numrooms = numrooms;
  }

  get dateend() {
    return this._dateend;
  }
  set dateend(date) {
    this._dateend = date;
  }

  get datestart() {
    return this._datestart;
  }
  set datestart(date) {
    this._datestart = date;
  }

  get dataGuest() {
    const guest = {
      name: this.name,
      lastname: this.lastname,
      phone: this.phone,
      email: this.email,
      datestart: this.datestart,
      dateend: this.dateend,
      numrooms: this.numrooms,
    };

    return guest;
  }
}
