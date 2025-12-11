import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

function HomePage() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            📚 Full-Stack Chapter 11-14
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h3" gutterBottom align="center">
          Choose a Chapter
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 4 }}>
          Select a chapter to see the completed exercises
        </Typography>

        <Grid container spacing={3}>
          {/* Chapter 11 Card */}
          <Grid item xs={12} md={6}>
            <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="div" gutterBottom>
                  📦 Chapter 11
                </Typography>
                <Typography variant="h6" color="primary" gutterBottom>
                  Useful Third-Party Components for React
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Learn how to use third-party React components including:
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  <Typography component="li" variant="body2">
                    🗂️ AG Grid - Data grid with sorting and filtering
                  </Typography>
                  <Typography component="li" variant="body2">
                    🎨 Material UI - Component library
                  </Typography>
                  <Typography component="li" variant="body2">
                    🛒 Shopping List App example
                  </Typography>
                  <Typography component="li" variant="body2">
                    🔍 GitHub Repository Search with AG Grid
                  </Typography>
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  component={Link}
                  to="/chapter11"
                  variant="contained"
                  size="large"
                  fullWidth
                >
                  Open Chapter 11
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Chapter 13 Card */}
          <Grid item xs={12} md={6}>
            <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="div" gutterBottom>
                  🚗 Chapter 13
                </Typography>
                <Typography variant="h6" color="primary" gutterBottom>
                  CRUD Functionalities
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Full-Stack Car Database Application with:
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  <Typography component="li" variant="body2">
                    🔐 JWT Authentication
                  </Typography>
                  <Typography component="li" variant="body2">
                    ➕ Create - Add new cars
                  </Typography>
                  <Typography component="li" variant="body2">
                    📖 Read - View all cars
                  </Typography>
                  <Typography component="li" variant="body2">
                    ✏️ Update - Edit car information
                  </Typography>
                  <Typography component="li" variant="body2">
                    🗑️ Delete - Remove cars
                  </Typography>
                  <Typography component="li" variant="body2">
                    📊 Export to CSV
                  </Typography>
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  component={Link}
                  to="/chapter13"
                  variant="contained"
                  size="large"
                  fullWidth
                  color="secondary"
                >
                  Open Chapter 13
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, p: 3, bgcolor: 'info.light', borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom>
            ℹ️ About This Project
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is a learning project based on the book "Full Stack Development with Spring Boot and React" (4th Edition).
            Each chapter demonstrates different concepts and technologies used in modern full-stack development.
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default HomePage;








