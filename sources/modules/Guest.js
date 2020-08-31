export default class Guest {
  constructor(name, lastname, phone, email, date, numpeople) {
    (this._name = name),
      (this._lastname = lastname),
      (this._phone = phone),
      (this._email = email),
      (this._date = date),
      (this._numpeople = numpeople);
  }

  Reservar() {
    containerReservacion.classList.add("hidden");
    containerReservacionFinalizada.classList.replace("hidden", "fadeIn");
  }
  imprimir() {
    console.log(this._name);
  }
}
