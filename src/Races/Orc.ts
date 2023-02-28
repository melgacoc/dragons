import Race from './Race';

class Orc extends Race {
  private static _numberOfInstances = 0;
  private _maxLifePoints: 74;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._numberOfInstances += 1;
  }

  static createdRacesInstances() {
    return Orc._numberOfInstances;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}

export default Orc;