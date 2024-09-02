const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema(
    {
        restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
        name: { type: String, required: true },
        description: { type: String },
        price: { type: Number, required: true },
        dietaryTags: { type: [String], default: [] },
        availability: { type: Boolean, default: true },
        imageUrl: { type: String },
    }, {
        timestamps: true,
    });

export const MenuItem = mongoose.model('MenuItem', menuItemSchema);

