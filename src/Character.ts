import Fighter from './Fighter';
import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
    
  constructor(name: string) {
    const randonStats = getRandomInt(1, 10);

    this._dexterity = randonStats;
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = randonStats;
    this._defense = randonStats;
    this._energy = {
      type_: this._archetype.energyType,
      amount: randonStats,
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  receiveDamage(attackPoints: number): number {
    const damageReceived = attackPoints - this._defense;

    if (damageReceived > 0) this._lifePoints -= damageReceived;
    if (damageReceived <= 0) this._lifePoints -= 1;
    if (damageReceived >= this._lifePoints) this._lifePoints = -1;

    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    const randonStats = getRandomInt(1, 10);
    this._maxLifePoints += randonStats;
    this._strength += randonStats;
    this._dexterity += randonStats;
    this._defense += randonStats;
    this._energy.amount = 10;

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: Fighter): void {
    const criticalDamage = getRandomInt(1, 10);
    enemy.receiveDamage(this._strength * Number(criticalDamage));
  }
}
