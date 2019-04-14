const Beers = require('./models/beers.js')
const BeerListView = require('./views/beer_list_view.js')
const SelectView = require('./views/select_view.js')

document.addEventListener('DOMContentLoaded', () => {

  const selectElement = document.querySelector('#beer-select');
  const selectedBeer = new SelectView(selectElement);
  selectedBeer.bindEvents();

  const listContainer = document.querySelector('#brewdog-beers-list');
  const beerListView = new BeerListView(listContainer);
  beerListView.bindEvents();

  const beers = new Beers;
  beers.bindEvents();
  beers.getData();

});
