"use strict"

// import GameSavingData, { Game, readGameSaving as loadGame, writeGameSaving as saveGame } from './game.js';

// const game = new Game();
// game.start();

export function getColorHealth(array) {
    if (array.health > 50) {
        return 'healthy';
    } else if (array.health < 15) {
        return 'critical';
    } else {
        return 'wounded';
    }
}
