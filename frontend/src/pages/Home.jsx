import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../services/api.js';

function HomePage() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get('/restaurants')
      .then(response => setRestaurants(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Welcome to Foodie Fusion</h1>
      <p>Discover the best restaurants in your city.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {restaurants.map(restaurant => (
          <Link to={`/restaurant/${restaurant._id}`} key={restaurant._id}>
            <div className="p-4 border rounded shadow-lg hover:shadow-xl">
              <h2 className="text-xl font-semibold">{restaurant.name}</h2>
              <p>{restaurant.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
