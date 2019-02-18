const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const parcelSchema = new mongoose.Schema({
  articleContent: String,
  id: String,
  description: String,
  quantity: Number,
  volume: Number,
  weight: Number,
  serviceLogo: {
    src: String,
    alt: String,
    width: Number
  },
  service: String,
  deliveredOn: String,
  packageNumber: String,
  pickupTime: String,
  orderNumber: String,
  history: [{
    localTime: String,
    location: String,
    action: String,
  }]
});

module.exports = mongoose.model('Parcel', parcelSchema);
