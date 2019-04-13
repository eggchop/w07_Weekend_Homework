const PubSub = require('../helpers/pub_sub.js');
const BeerDetailView = require('./beer_detail_view.js')

const BeerListView = function(container){
  this.container = container;
};

BeerListView.prototype.bindEvents = function(){
  PubSub.subscribe('all-beers-data', (evt)=> {
    this.container.innerHTML = '';
    evt.detail.forEach( (beer)=> {
      const beerItem = new BeerDetailView();
      const beerDetail = beerItem.createBeerDetail(beer);
      this.container.appendChild(beerDetail);
    })
  });
};

module.exports = BeerListView;
