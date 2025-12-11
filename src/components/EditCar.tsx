import { useState, FormEvent } from 'react';
import { updateCar } from '../api/carService';
import type { Car, NewCar } from '../types/Car';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';

type EditCarProps = {
  car: Car;
  onCarUpdated: () => void;
};

function EditCar({ car, onCarUpdated }: EditCarProps) {
  const [open, setOpen] = useState(false);
  const [editedCar, setEditedCar] = useState<NewCar>({
    brand: car.brand,
    model: car.model,
    color: car.color,
    registrationNumber: car.registrationNumber,
    modelYear: car.modelYear,
    price: car.price,
    ownerId: car.ownerId,
  });

  const handleOpen = () => {
    // Предзаполнение формы текущими данными
    setEditedCar({
      brand: car.brand,
      model: car.model,
      color: car.color,
      registrationNumber: car.registrationNumber,
      modelYear: car.modelYear,
      price: car.price,
      ownerId: car.ownerId,
    });
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!car.id) return;

    try {
      await updateCar(car.id, editedCar);
      handleClose();
      onCarUpdated(); // Обновляем список
    } catch (err) {
      alert('Failed to update car');
      console.error(err);
    }
  };

  return (
    <>
      <Tooltip title="Edit car">
        <IconButton 
          onClick={handleOpen} 
          color="primary" 
          size="small"
          aria-label="edit"
        >
          <EditIcon fontSize="small" />
        </IconButton>
      </Tooltip>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>✏️ Edit Car (Chapter 14)</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <Stack spacing={2} mt={1}>
              <TextField
                label="Brand"
                value={editedCar.brand}
                onChange={(e) => setEditedCar({ ...editedCar, brand: e.target.value })}
                fullWidth
                required
              />
              <TextField
                label="Model"
                value={editedCar.model}
                onChange={(e) => setEditedCar({ ...editedCar, model: e.target.value })}
                fullWidth
                required
              />
              <TextField
                label="Color"
                value={editedCar.color}
                onChange={(e) => setEditedCar({ ...editedCar, color: e.target.value })}
                fullWidth
                required
              />
              <TextField
                label="Year"
                type="number"
                value={editedCar.modelYear}
                onChange={(e) => setEditedCar({ ...editedCar, modelYear: parseInt(e.target.value) })}
                fullWidth
                required
              />
              <TextField
                label="Reg.nr."
                value={editedCar.registrationNumber}
                onChange={(e) => setEditedCar({ ...editedCar, registrationNumber: e.target.value })}
                fullWidth
                required
              />
              <TextField
                label="Price"
                type="number"
                value={editedCar.price}
                onChange={(e) => setEditedCar({ ...editedCar, price: parseFloat(e.target.value) })}
                fullWidth
                required
              />
              <TextField
                label="Owner ID"
                type="number"
                value={editedCar.ownerId}
                onChange={(e) => setEditedCar({ ...editedCar, ownerId: parseInt(e.target.value) })}
                fullWidth
                required
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}

export default EditCar;



