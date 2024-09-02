const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  rating: { type: Number, required: true },
  comment: { type: String },
  isApproved: { type: Boolean, default: false },
}, {
  timestamps: true,
});

export const Review = mongoose.model('Review', reviewSchema);


