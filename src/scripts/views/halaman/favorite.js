import RestaurantFavoriteIdb from '../../data/favorite-resto-idb';
import { createItemrestaurant } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="favorite">
        <h1 class="favoritehead">Restaurant Favorite</h1>
        <div id="empty_favorite" class="empty_favorite"></div>
    </div>  
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
