import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const getRestaurants = () => API.get('/restaurants');
export const getRestaurantById = (id) => API.get(`/restaurants/${id}`);
export const placeOrder = (orderData) => API.post('/orders', orderData);
export const getUserProfile = () => API.get('/profile');
