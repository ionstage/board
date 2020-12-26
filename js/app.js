import { Main } from './main.js';

class App {
  constructor() {
    this.main = new Main({ element: document.querySelector('.main') });
  }

  load() { /* TODO */ }
}

const main = () => {
  const app = new App();
  app.load();
};

main();
