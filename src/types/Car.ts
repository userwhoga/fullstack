// TypeScript типы для работы с данными машин

export interface Car {
  id?: number;
  brand: string;
  model: string;
  color: string;
  registrationNumber: string;
  modelYear: number;
  price: number;
  ownerId: number;
  ownerName?: string;
}

export type NewCar = Omit<Car, 'id' | 'ownerName'>;

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}






