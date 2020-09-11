class Guests {
  constructor() {
    this._guests = [];
  }

  newGuest(guestdata) {
    this._guests.push(guestdata);
  }
  showGuests() {
    return this._guests;
  }
}

export default class Guest {
  constructor(
    name,
    lastname,
    email,
    phone,
    datestart,
    dateend,
    address,
    rooms
  ) {
    (this._name = name),
      (this._lastname = lastname),
      (this._phone = phone),
      (this._email = email),
      (this._datestart = datestart),
      (this._dateend = dateend),
      (this._address = address),
      (this._room = rooms);
    new Guests().newGuest(this.dataGuest);
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

  get address() {
    return this._address;
  }
  set address(address) {
    this._address = address;
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

  set room(room) {
    this._room = room;
  }

  get room() {
    return this._room;
  }

  get dataGuest() {
    const guest = {
      name: this.name,
      lastname: this.lastname,
      phone: this.phone,
      email: this.email,
      datestart: this.datestart,
      dateend: this.dateend,
      address: this.address,
      room: this._room,
    };

    return guest;
  }
}
