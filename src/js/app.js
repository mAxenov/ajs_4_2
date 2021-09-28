"use strict"

// import GameSavingData, { Game, readGameSaving as loadGame, writeGameSaving as saveGame } from './game.js';

// const game = new Game();
// game.start();

export function sortByHealth(arr) {
    return arr.sort((a, b) => a.health < b.health ? 1 : -1);
}
