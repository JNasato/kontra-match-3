import { resize } from './resize.js';
import Game from './Game.js';

const HEIGHT = 640;
const WIDTH = 360;

const game = new Game(WIDTH, HEIGHT);

resize(WIDTH, HEIGHT);
window.addEventListener('resize', () => {
  resize(WIDTH, HEIGHT);
}, false);
