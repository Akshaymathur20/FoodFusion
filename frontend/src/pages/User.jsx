import React, { useState, useEffect } from 'react';
import axios from '../services/api.js';

function UserProfilePage() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get('/profile')
      .then(response => setProfile(response.data))
      .catch(error => console.error(error));
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Your Profile</h1>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
    </div>
  );
}

export default UserProfilePage;
