import Race from './Race';

class Halfling extends Race {
  private static _numberOfInstances = 0;
  private _maxLifePoints: 60;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._numberOfInstances += 1;
  }

  static createdRacesInstances() {
    return Halfling._numberOfInstances;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}

export default Halfling;