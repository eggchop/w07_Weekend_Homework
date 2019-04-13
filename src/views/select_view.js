const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('all-beers-data', (evt) => {
    const allBeers = evt.detail;
    this.populate(allBeers);
  });

  this.element.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('selected-beer', selectedIndex);
  });
};

SelectView.prototype.populate = function (allBeerNames) {
  allBeerNames.forEach((beer, index) => {
    const option = document.createElement('option');
    option.textContent = beer.name;
    option.value = index;
    this.element.appendChild(option);
  });
};

module.exports = SelectView;
