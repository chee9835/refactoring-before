class Enterprise {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }
  get title() {
    return this._name;
  }
  set title(value) {
    this._name = value;
  }
  get country() {
    return this._country;
  }
  set country(value) {
    this._country = value;
  }
}
const enterprise = new Enterprise({
  name: '드림코딩',
  country: '대한민국',
});
