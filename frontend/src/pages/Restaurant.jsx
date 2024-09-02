import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../services/api.js';

function Restaurant() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    axios.get(`/restaurants/${id}`)
      .then(response => setRestaurant(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!restaurant) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{restaurant.name}</h1>
      <p>{restaurant.description}</p>
      <h2 className="text-2xl font-semibold mt-4">Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {restaurant.menuItems.map(item => (
          <div key={item._id} className="p-4 border rounded shadow-lg hover:shadow-xl">
            <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover" />
            <h3 className="text-xl font-semibold mt-2">{item.name}</h3>
            <p>{item.description}</p>
            <p className="font-bold mt-1">${item.price}</p>
            <p className="text-sm text-gray-600 mt-1">{item.dietaryTags.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Restaurant;
