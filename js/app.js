(function() {
  'use strict';

  var Main = function(props) {
    this.element = props.element;
  };

  var App = function() {
    this.main = new Main({ element: document.querySelector('.main') });
  };

  App.prototype.load = function() { /* TODO */ };

  var main = function() {
    var app = new App();
    app.load();

    if (location.hostname === 'localhost') {
      window.app = app;
    }
  };

  main();
})();
