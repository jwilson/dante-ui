import { makeAutoObservable } from 'mobx';

export class GameUIState {
    characterStats = {
        health: 1.0,
        energy: 1.0
    }

    constructor() {
        makeAutoObservable(this);
        this.characterStats.health = 100;
        this.characterStats.energy = 100;
    }
}
