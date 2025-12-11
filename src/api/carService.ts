import axios from 'axios';
import type { Car, NewCar, LoginCredentials, LoginResponse } from '../types/Car';

const API_URL = 'http://localhost:8081';

// Создаем axios instance
export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwt');
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export const login = async (credentials: LoginCredentials): Promise<string> => {
  try {
    const response = await axios.post<LoginResponse>(
      `${API_URL}/login`,
      credentials
    );
    
    const token = response.headers.authorization;
    if (token) {
      localStorage.setItem('jwt', token);
      return token;
    }
    throw new Error('No token received');
  } catch (error: any) {
    console.error('Login error:', error);
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

export const logout = (): void => {
  localStorage.removeItem('jwt');
};

export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem('jwt');
};



// READ - Получить все машины
export const getCars = async (): Promise<Car[]> => {
  try {
    const response = await apiClient.get<Car[]>('/api/cars');
    return response.data;
  } catch (error: any) {
    console.error('Get cars error:', error);
    throw error;
  }
};

// READ - Получить машину по ID
export const getCarById = async (id: number): Promise<Car> => {
  try {
    const response = await apiClient.get<Car>(`/api/cars/${id}`);
    return response.data;
  } catch (error: any) {
    console.error('Get car by ID error:', error);
    throw error;
  }
};

// CREATE - Создать новую машину
export const createCar = async (car: NewCar): Promise<Car> => {
  try {
    const response = await apiClient.post<Car>('/api/cars', car);
    return response.data;
  } catch (error: any) {
    console.error('Create car error:', error);
    throw error;
  }
};

// UPDATE - Обновить машину
export const updateCar = async (id: number, car: NewCar): Promise<Car> => {
  try {
    const response = await apiClient.put<Car>(`/api/cars/${id}`, car);
    return response.data;
  } catch (error: any) {
    console.error('Update car error:', error);
    throw error;
  }
};

// DELETE - Удалить машину
export const deleteCar = async (id: number): Promise<void> => {
  try {
    await apiClient.delete(`/api/cars/${id}`);
  } catch (error: any) {
    console.error('Delete car error:', error);
    throw error;
  }
};






