import Race from './Race';

class Dwarf extends Race {
  private static _instances = 0;
  private _maxLifePoints: 80;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._instances += 1;
  }

  static createdRacesInstances() {
    return Dwarf._instances;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}

export default Dwarf;