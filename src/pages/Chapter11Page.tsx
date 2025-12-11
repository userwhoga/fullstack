import { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingList from '../components/chapter11/ShoppingList';
import GitHubRepoSearch from '../components/chapter11/GitHubRepoSearch';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`chapter11-tabpanel-${index}`}
      aria-labelledby={`chapter11-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function Chapter11Page() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            📦 Chapter 11
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

      <Container maxWidth="xl">
        <Box sx={{ mt: 2 }}>
          <Typography variant="h4" gutterBottom>
            Chapter 11 Examples
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            This chapter demonstrates how to use third-party React components including AG Grid and Material UI.
          </Typography>
        </Box>

        <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 3 }}>
          <Tabs value={tabValue} onChange={handleTabChange} aria-label="chapter 11 examples">
            <Tab label="🛒 Shopping List (MUI)" />
            <Tab label="🔍 GitHub Search (AG Grid)" />
          </Tabs>
        </Box>

        <TabPanel value={tabValue} index={0}>
          <ShoppingList />
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <GitHubRepoSearch />
        </TabPanel>
      </Container>
    </>
  );
}

export default Chapter11Page;








