// const mongoose = require('mongoose')

// const subscriptionSchema = new mongoose.Schema({
//     fullName: { type: String, required: true },
//     email: { type: String, required: true }
// });


// module.exports = mongoose.model('Subscription', subscriptionSchema);

import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true }
});

export default mongoose.model('Subscription', subscriptionSchema);
