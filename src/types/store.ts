/**
 * Store-related type definitions
 */

export interface StoreCoordinates {
  lat: number;
  lng: number;
}

export interface StoreAddress {
  line1: string;
  line2: string;
  city: string;
  state: string;
  pincode: string;
}

export interface StoreHours {
  weekday: string;
  weekend: string;
}

export interface Store {
  id: string;
  name: string;
  address: StoreAddress;
  coordinates: StoreCoordinates;
  phone: string;
  email: string;
  hours: StoreHours;
  orderUrl: string;
  features: string[];
  image: string;
}

export interface StoresData {
  stores: Store[];
}
