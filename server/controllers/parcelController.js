const mongoose = require('mongoose');
const Parcel = mongoose.model('Parcel');

exports.getParcels = async (req, res) => {
  const parcels = await Parcel.find();
  if (!parcels.length) return res.status(404).send({ error: "No results found" });
  res.json(parcels);
};

exports.getParcelById = async (req, res) => {
  const parcel = await Parcel.findOne({ id: req.params.id });
  if (!parcel) return res.status(404).send({ error: `No results with the tracking number ${req.params.id} found` });;
  res.json(parcel);
};

// TODO: remove later
exports.addParcel = async (req, res) => {
  const parcelItem = {
    id: 222,
    description:
      'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    quantity: 4,
    volume: 0.1,
    weight: 5,
    service: 'PostNL',
    deliveredOn: '1st April',
    packageNumber: '555555',
    pickupTime: '24th April',
    orderNumber: '94024FAF',
    history: [
      {
        localTime: '08:11',
        location: 'Hilversum',
        action: 'Lorem ipsum dolor sit'
      },
      {
        localTime: '08:11',
        location: 'Amsterdam',
        action: 'Lorem ipsum dolor sit amet'
      }
    ]
  };
  const parcel = await new Parcel(parcelItem).save();
  res.send('A new parcel has been added to the database!');
};
