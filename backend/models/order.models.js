const mongoose = require('mongoose');


const orderItemsSchema = new mongoose.Schema(
    {
        menuItem: { 
              type: mongoose.Schema.Types.ObjectId,
             ref: 'MenuItem',
              required: true
             },
        quantity: { 
             type: Number,
             required: true },
      }
)

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  orderItems:{
    type:[orderItemsSchema]
},
  totalPrice: { type: Number, required: true },
  paymentMethod: { type: String, required: true },
  isPaid: { type: Boolean, default: false },
  paidAt: { type: Date },
  status: { type: String, default: 'Pending' },
}, {
  timestamps: true,
});

export const Order = mongoose.model('Order', orderSchema);


