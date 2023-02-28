import Race from './Race';

class Elf extends Race {
  private static _instances = 0;
  private _maxLifePoints: 99;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._instances += 1;
  }

  static createdRacesInstances() {
    return Elf._instances;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}

export default Elf;