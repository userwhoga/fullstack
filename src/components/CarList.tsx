import { useState, useEffect } from 'react';
import { getCars, deleteCar, logout } from '../api/carService';
import type { Car } from '../types/Car';
import AddCar from './AddCar';
import EditCar from './EditCar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import RefreshIcon from '@mui/icons-material/Refresh';
import LogoutIcon from '@mui/icons-material/Logout';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

function CarList() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    loadCars();
  }, []);

  const loadCars = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await getCars();
      setCars(data);
    } catch (err: any) {
      if (err.response?.status === 401) {
        setError('Session expired. Please login again.');
      } else {
        setError('Failed to load cars. Make sure Spring Boot server is running on port 8081.');
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number | undefined) => {
    if (!id) return;

    if (window.confirm('Are you sure you want to delete this car?')) {
      try {
        await deleteCar(id);
        loadCars(); // Обновляем список после удаления
      } catch (err) {
        alert('Failed to delete car');
        console.error(err);
      }
    }
  };

  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  // Экспорт в CSV
  const exportToCSV = () => {
    const headers = ['Brand', 'Model', 'Color', 'Year', 'Price', 'Reg. Number', 'Owner'];
    
    const csvData = cars.map(car => [
      car.brand,
      car.model,
      car.color,
      car.modelYear,
      car.price,
      car.registrationNumber,
      car.ownerName || '-'
    ]);
    
    // Объединение заголовков и данных
    const csvContent = [
      headers.join(','),
      ...csvData.map(row => row.join(','))
    ].join('\n');
    
    // Создание blob и скачивание файла
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `cars_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ mt: 4 }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="contained" onClick={loadCars} startIcon={<RefreshIcon />}>
            Retry
          </Button>
          <Button variant="outlined" onClick={handleLogout} startIcon={<LogoutIcon />}>
            Logout
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Box>
            <Typography variant="h4" gutterBottom>
              🚗 Car List
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Chapter 13 (Create, Read, Update, Delete)
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="outlined"
              onClick={loadCars}
              startIcon={<RefreshIcon />}
            >
              Refresh
            </Button>
            <Button
              variant="outlined"
              color="success"
              onClick={exportToCSV}
              startIcon={<FileDownloadIcon />}
              disabled={cars.length === 0}
            >
              Export CSV
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={handleLogout}
              startIcon={<LogoutIcon />}
            >
              Logout
            </Button>
          </Box>
        </Box>

        <Box sx={{ mb: 3 }}>
          <AddCar onCarAdded={loadCars} />
        </Box>

        {cars.length === 0 ? (
          <Alert severity="info">No cars found. Click "Create New Car" to add one.</Alert>
        ) : (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Brand</strong></TableCell>
                  <TableCell><strong>Model</strong></TableCell>
                  <TableCell><strong>Color</strong></TableCell>
                  <TableCell><strong>Year</strong></TableCell>
                  <TableCell><strong>Price</strong></TableCell>
                  <TableCell><strong>Reg. Number</strong></TableCell>
                  <TableCell><strong>Owner</strong></TableCell>
                  <TableCell align="center"><strong>Actions</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cars.map((car) => (
                  <TableRow key={car.id} hover>
                    <TableCell>{car.brand}</TableCell>
                    <TableCell>{car.model}</TableCell>
                    <TableCell>{car.color}</TableCell>
                    <TableCell>{car.modelYear}</TableCell>
                    <TableCell>${car.price}</TableCell>
                    <TableCell>{car.registrationNumber}</TableCell>
                    <TableCell>{car.ownerName || '-'}</TableCell>
                    <TableCell align="center">
                      <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                        <EditCar car={car} onCarUpdated={loadCars} />
                        <Tooltip title="Delete car">
                          <IconButton
                            onClick={() => handleDelete(car.id)}
                            color="error"
                            size="small"
                            aria-label="delete"
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Paper>
    </Box>
  );
}

export default CarList;



