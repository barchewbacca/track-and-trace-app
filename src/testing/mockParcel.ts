import { Parcel } from '../app/parcel';

export const mockParcel: Parcel = {
  id: '222',
  description:
    'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  quantity: 4,
  volume: 0.1,
  weight: 5,
  serviceLogo: {
    src: '/assets/shipper-logo-2.png',
    alt: 'PostNL Logo',
    width: 38
  },
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
