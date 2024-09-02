const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema(
    {
        name: { 
            type: String,
             required: true },
        description: { 
            type: String
         },
        location: { 
            type: String, 
            required: true 
        },
        cuisineType: { 
            type: String 
        },
        priceRange: { 
            type: String 
        },
        rating: { 
            type: Number,
             default: 0
         },
        numReviews: { 
            type: Number,
             default: 0 },
        owner: { 
            type: mongoose.Schema.Types.ObjectId,
             ref: 'User', required: true },
    }, {
        timestamps: true,
  });

  export const Restaurant = mongoose.model("Restaurant",restaurantSchema)