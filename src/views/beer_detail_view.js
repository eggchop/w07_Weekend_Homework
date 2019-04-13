const BeerDetailView = function() {

}

BeerDetailView.prototype.createBeerDetail = function(beer){
  const beerDetail = document.createElement('div');

  const name = document.createElement('h3');
  name.textContent = beer.name;
  beerDetail.appendChild(name);

  const beerDescription = document.createElement('p');
  beerDescription.textContent = beer.description;
  beerDetail.appendChild(beerDescription);

  const beerImage = document.createElement('img');
  beerImage.classList.add('beer-pic');
  beerImage.src = beer['image_url'];
  beerDetail.appendChild(beerImage);

  return beerDetail;
}

module.exports = BeerDetailView;
