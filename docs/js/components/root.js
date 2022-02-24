import { Controls } from './controls.js';
import { Main } from './main.js';

export class Root {
  constructor() {
    this._main = new Main(document.querySelector('.main'));
    this._controls = new Controls(document.querySelector('.controls'));
  }

  init() {
    this._main.init();
    this._controls.init();
  }
}
