const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('all-beers-data-dropdown', (evt) => {
    const allBeers = evt.detail;
    console.log(allBeers);
    this.populate(allBeers);
  });

  this.element.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('selected-beer', selectedIndex);
  });
};

SelectView.prototype.populate = function (allBeerNames) {
  allBeerNames.forEach((beer) => {
    const option = document.createElement('option');
    option.textContent = beer.name;
    console.log(beer.name);
    option.value = beer.id;
    this.element.appendChild(option);
  });
};

module.exports = SelectView;
