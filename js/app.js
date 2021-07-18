class Main {
  constructor(props) {
    this.element = props.element;
  }
}

class App {
  constructor() {
    this.main = new Main({ element: document.querySelector('.main') });
  }

  load() { /* TODO */ }
}

const main = () => {
  const app = new App();
  app.load();

  if (location.hostname === 'localhost') {
    window.app = app;
  }
};

main();
