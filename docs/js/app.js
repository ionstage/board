import { Main } from './components/main.js';

export class App {
  constructor() {
    this._main = new Main(document.querySelector('.main'));
  }

  init() {
    this._main.init();
  }
}
