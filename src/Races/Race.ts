export default abstract class Race {
  constructor(private _name: string, private _dexterity: number) {}
        
  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances() {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}