import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import Login from '../components/Login';
import CarList from '../components/CarList';
import { isAuthenticated } from '../api/carService';

function Chapter13Page() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(isAuthenticated());
  }, []);

  // Если не залогинен, показываем Login
  if (!isLoggedIn) {
    return (
      <Container maxWidth="xl">
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              🚗 Chapter 13
            </Typography>
            <Button
              component={Link}
              to="/"
              color="inherit"
              startIcon={<HomeIcon />}
            >
              Home
            </Button>
          </Toolbar>
        </AppBar>
        <Login onLoginSuccess={() => setIsLoggedIn(true)} />
      </Container>
    );
  }

  return (
    <Container maxWidth="xl">
      <CssBaseline />
      
      {/* AppBar - верхняя панель навигации */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            🚗 Chapter 13: CRUD Functionalities
          </Typography>
          <Typography variant="body2" sx={{ mr: 2 }}>
            Full Stack: React + TypeScript + Spring Boot + JWT
          </Typography>
          <Button
            component={Link}
            to="/"
            color="inherit"
            startIcon={<HomeIcon />}
          >
            Home
          </Button>
        </Toolbar>
      </AppBar>

      <CarList />
    </Container>
  );
}

export default Chapter13Page;








