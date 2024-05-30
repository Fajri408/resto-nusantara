import RestaurantFavoriteIdb from '../../data/favorite-resto-idb';
import { createItemrestaurant } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <h1 class="favorite">Restaurant Favorite</h1>
        <div id="content" class="content"></div>
        `;
  },
  async afterRender() {
    const restaurants = await RestaurantFavoriteIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#content');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createItemrestaurant(restaurant);
    });
  },

};
export default Favorite;
