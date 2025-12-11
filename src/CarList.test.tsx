import { beforeEach, describe, expect, test, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import CarList from './components/CarList';
import { getCars } from './api/carService';

vi.mock('./api/carService', () => ({
  getCars: vi.fn(),
  deleteCar: vi.fn(),
  logout: vi.fn(),
}));

const mockedGetCars = vi.mocked(getCars);

const mockCars = [
  {
    id: 1,
    brand: 'Ford',
    model: 'Focus',
    color: 'Blue',
    modelYear: 2020,
    price: 20000,
    registrationNumber: 'ABC-123',
    ownerId: 1,
    ownerName: 'Alice',
  },
  {
    id: 2,
    brand: 'Tesla',
    model: 'Model 3',
    color: 'White',
    modelYear: 2022,
    price: 50000,
    registrationNumber: 'XYZ-789',
    ownerId: 2,
    ownerName: 'Bob',
  },
];

describe('CarList', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockedGetCars.mockResolvedValue([]);
  });

  test('shows loader while fetching cars', async () => {
    render(<CarList />);

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
    await waitFor(() => expect(mockedGetCars).toHaveBeenCalled());
  });

  test('renders cars returned from API', async () => {
    mockedGetCars.mockResolvedValueOnce(mockCars);

    render(<CarList />);

    await waitFor(() => screen.getByText(/Car List/i));
    expect(screen.getByText(/Ford/i)).toBeInTheDocument();
    expect(screen.getByText(/Tesla/i)).toBeInTheDocument();
  });
});




