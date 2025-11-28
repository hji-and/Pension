import React from 'react';

export interface Room {
  id: string;
  name: string;
  type: string;
  description: string;
  features: string[];
  imageUrl: string;
  price: string;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum ViewState {
  HOME = 'HOME',
  ROOMS = 'ROOMS',
  AMENITIES = 'AMENITIES',
  RESERVATION = 'RESERVATION'
}