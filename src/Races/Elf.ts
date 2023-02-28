import Race from './Race';

class Elf extends Race {
  private static _numberOfInstances = 0;
  private _maxLifePoints: 99;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._numberOfInstances += 1;
  }

  static createdRacesInstances() {
    return Elf._numberOfInstances;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}

export default Elf;