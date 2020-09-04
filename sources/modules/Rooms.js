class Bedrooms {
  constructor() {
    this._bedrooms = [];
  }

  addRooms(room) {
    this._bedrooms.push(room);
  }

  bedroomsdata() {
    return this._bedrooms;
  }
}

let bedroomdata = new Bedrooms();

class Room {
  constructor(
    id,
    name,
    description,
    img,
    price,
    numbeds,
    numpeople,
    icons,
    include,
    avaiable
  ) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._img = img;
    this._price = price;
    this._numbeds = numbeds;
    this._numpeople = numpeople;
    this._icons = icons;
    this._include = include;
    this._avaiable = avaiable;
    bedroomdata.addRooms(this.dataRoom);
  }

  get id() {
    return this._id;
  }

  set id(id) {
    this._id = id;
  }
  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get description() {
    return this._description;
  }

  set description(description) {
    this._description = description;
  }
  get img() {
    return this._img;
  }

  set img(img) {
    this._img = img;
  }
  get price() {
    return this._price;
  }

  set price(price) {
    this._price = price;
  }
  get numbeds() {
    return this._numbeds;
  }

  set numbeds(numbeds) {
    this._numbeds = numbeds;
  }
  get numpeople() {
    return this._numpeople;
  }

  set numpeople(numpeople) {
    this._numpeople = numpeople;
  }
  get icons() {
    return this._icons;
  }

  set icons(icons) {
    this._icons = icons;
  }
  get include() {
    return this._include;
  }

  set include(include) {
    this._include = include;
  }
  get avaiable() {
    return this._avaiable;
  }

  set avaiable(avaiable) {
    this._avaiable = avaiable;
  }

  get dataRoom() {
    let dataRoom = {
      id: this.id,
      name: this.name,
      description: this.description,
      img: this.img,
      price: this.price,
      numbeds: this.numbeds,
      numpeople: this.numpeople,
      icons: this.icons,
      include: this.include,
      avaiable: this.avaiable,
    };
    return dataRoom;
  }

  verifiedAvaiable(){
  }
}

export { Room, bedroomdata };
