const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Beers = function(){
  this.beerData = [];
}

Beers.prototype.bindEvents = function(){
  PubSub.subscribe('selected-beer', (evt)=> {
    const selectedBeer = evt.detail;
    PubSub.publish('all-beers-data', [this.beerData[selectedBeer-1]]);
  })
}


Beers.prototype.getData = function(){
  const request = new RequestHelper('https://api.punkapi.com/v2/beers');
  request.get().then((data) => {
    this.beerData = data;
    PubSub.publish('all-beers-data', this.beerData)
    PubSub.publish('all-beers-data-dropdown', this.beerData)
  });

}

module.exports = Beers;
