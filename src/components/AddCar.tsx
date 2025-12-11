import { useState, FormEvent } from 'react';
import { createCar } from '../api/carService';
import type { NewCar } from '../types/Car';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';

type AddCarProps = {
  onCarAdded: () => void;
};

function AddCar({ onCarAdded }: AddCarProps) {
  const [open, setOpen] = useState(false);
  const [car, setCar] = useState<NewCar>({
    brand: '',
    model: '',
    color: '',
    registrationNumber: '',
    modelYear: 2024,
    price: 0,
    ownerId: 1,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    
    setCar({
      brand: '',
      model: '',
      color: '',
      registrationNumber: '',
      modelYear: 2024,
      price: 0,
      ownerId: 1,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await createCar(car);
      handleClose();
      onCarAdded(); 
    } catch (err) {
      alert('Failed to add car');
      console.error(err);
    }
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        + Create New Car
      </Button>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>📝 New Car (Chapter 14)</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <Stack spacing={2} mt={1}>
              <TextField
                label="Brand"
                value={car.brand}
                onChange={(e) => setCar({ ...car, brand: e.target.value })}
                fullWidth
                required
              />
              <TextField
                label="Model"
                value={car.model}
                onChange={(e) => setCar({ ...car, model: e.target.value })}
                fullWidth
                required
              />
              <TextField
                label="Color"
                value={car.color}
                onChange={(e) => setCar({ ...car, color: e.target.value })}
                fullWidth
                required
              />
              <TextField
                label="Year"
                type="number"
                value={car.modelYear}
                onChange={(e) => setCar({ ...car, modelYear: parseInt(e.target.value) })}
                fullWidth
                required
              />
              <TextField
                label="Reg.nr."
                value={car.registrationNumber}
                onChange={(e) => setCar({ ...car, registrationNumber: e.target.value })}
                fullWidth
                required
              />
              <TextField
                label="Price"
                type="number"
                value={car.price}
                onChange={(e) => setCar({ ...car, price: parseFloat(e.target.value) })}
                fullWidth
                required
              />
              <TextField
                label="Owner ID"
                type="number"
                value={car.ownerId}
                onChange={(e) => setCar({ ...car, ownerId: parseInt(e.target.value) })}
                fullWidth
                required
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}

export default AddCar;



