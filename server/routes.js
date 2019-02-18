const express = require('express');
const router = express.Router();
const parcelController = require('./controllers/parcelController');
const { catchErrors } = require('./handlers/errorHandlers');

router.get('/api/v1/parcels', catchErrors(parcelController.getParcels));
router.get('/api/v1/parcels/:id', catchErrors(parcelController.getParcelById));
router.get('/api/add', catchErrors(parcelController.addParcel));

module.exports = router;
