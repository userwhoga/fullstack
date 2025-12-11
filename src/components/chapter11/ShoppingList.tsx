import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Alert from '@mui/material/Alert';

export type ShoppingItem = {
  product: string;
  amount: string;
};

function ShoppingList() {
  const [items, setItems] = useState<ShoppingItem[]>([]);
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState<ShoppingItem>({
    product: '',
    amount: '',
  });

  const handleOpen = () => setOpen(true);
  
  const handleClose = () => {
    setOpen(false);
    setItem({ product: '', amount: '' });
  };

  const addItem = () => {
    if (item.product && item.amount) {
      setItems([item, ...items]);
      handleClose();
    }
  };

  return (
    <Box>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          🛒 Shopping List Application
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          This example demonstrates Material UI components including Dialog, TextField, List, and Button.
          Click "Add Item" to open a modal form.
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Button variant="contained" onClick={handleOpen}>
            Add Item
          </Button>
        </Box>

        {items.length === 0 ? (
          <Alert severity="info">
            No items in your shopping list. Click "Add Item" to get started!
          </Alert>
        ) : (
          <List>
            {items.map((item, index) => (
              <ListItem key={index} divider>
                <ListItemText
                  primary={item.product}
                  secondary={`Amount: ${item.amount}`}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Paper>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>📝 New Shopping Item</DialogTitle>
        <DialogContent>
          <TextField
            value={item.product}
            onChange={(e) => setItem({ ...item, product: e.target.value })}
            label="Product"
            fullWidth
            margin="dense"
            required
          />
          <TextField
            value={item.amount}
            onChange={(e) => setItem({ ...item, amount: e.target.value })}
            label="Amount"
            fullWidth
            margin="dense"
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={addItem}
            variant="contained"
            disabled={!item.product || !item.amount}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default ShoppingList;








