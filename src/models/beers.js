const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Beers = function(){
  this.beerData = [];
}

Beers.prototype.getData = function(){
  const request = new RequestHelper('https://api.punkapi.com/v2/beers');
  request.get().then((data) => {
    this.beerData = data;
    PubSub.publish('all-beers-data', this.beerData)
  });

}

module.exports = Beers;
