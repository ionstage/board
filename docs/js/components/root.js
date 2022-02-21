import { Main } from './main.js';

export class Root {
  constructor() {
    this._main = new Main(document.querySelector('.main'));
  }

  init() {
    this._main.init();
  }
}
