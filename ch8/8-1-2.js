export class Account {
  #type;
  #daysOverdrawn;
  constructor(accountType, daysOverdrawn) {
    this.#type = accountType;
    this.#daysOverdrawn = daysOverdrawn;
  }

  get daysOverdrawn() {
    return this.#daysOverdrawn;
  }

  get isPremium() {
    return this.#type === 'Premium';
  }

  get bankCharge() {
    return this.daysOverdrawn > 0 ? result + this.overdraftCharge : result;
  }

  get overdraftCharge() {
    if (!this.isPremium) {
      return this.daysOverdrawn * 1.75;
    }
    const baseCharge = 10;
    return this.daysOverdrawn <= 7
      ? baseCharge
      : baseCharge + (this.daysOverdrawn - 7) * 0.85;
  }
}
