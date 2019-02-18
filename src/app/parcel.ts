export class Parcel {
  id: string;
  description: string;
  quantity: number;
  volume: number;
  weight: number;
  serviceLogo: {
    src: string;
    alt: string;
    width: number;
  };
  service: string;
  deliveredOn: string;
  packageNumber: string;
  pickupTime: string;
  orderNumber: string;
  history: {
    localTime: string;
    location: string;
    action: string;
  }[];
}
