import { useState } from 'react';
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import { ColDef, ICellRendererParams } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

type Repository = {
  id: number;
  full_name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
};

function GitHubRepoSearch() {
  const [keyword, setKeyword] = useState('');
  const [repodata, setRepodata] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const columnDefs: ColDef[] = [
    { field: 'id', headerName: 'ID', width: 100, sortable: true, filter: true },
    { field: 'full_name', headerName: 'Repository', flex: 1, sortable: true, filter: true },
    { 
      field: 'description', 
      headerName: 'Description', 
      flex: 1, 
      sortable: true, 
      filter: true,
      wrapText: true,
      autoHeight: true 
    },
    { 
      field: 'stargazers_count', 
      headerName: 'Stars', 
      width: 120, 
      sortable: true, 
      filter: true 
    },
    {
      headerName: 'Actions',
      field: 'html_url',
      width: 150,
      cellRenderer: (params: ICellRendererParams) => (
        <Button
          size="small"
          variant="outlined"
          onClick={() => window.open(params.value, '_blank')}
        >
          View on GitHub
        </Button>
      ),
    },
  ];

  const handleSearch = async () => {
    if (!keyword.trim()) {
      setError('Please enter a search keyword');
      return;
    }

    try {
      setLoading(true);
      setError('');
      const response = await axios.get<{ items: Repository[] }>(
        `https://api.github.com/search/repositories?q=${keyword}`
      );
      setRepodata(response.data.items);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch repositories. Please try again.');
      setRepodata([]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Box>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          🔍 GitHub Repository Search
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          This example demonstrates AG Grid component with sorting, filtering, and pagination.
          Search for GitHub repositories and explore the results in an interactive table.
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyPress={handleKeyPress}
            label="Search repositories"
            placeholder="e.g., react, typescript, nodejs"
            fullWidth
          />
          <Button
            variant="contained"
            onClick={handleSearch}
            disabled={loading}
            sx={{ minWidth: 120 }}
          >
            {loading ? 'Searching...' : 'Search'}
          </Button>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {repodata.length > 0 && (
          <>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Found {repodata.length} repositories
            </Typography>
            <div className="ag-theme-material" style={{ height: 500, width: '100%' }}>
              <AgGridReact
                rowData={repodata}
                columnDefs={columnDefs}
                pagination={true}
                paginationPageSize={10}
                defaultColDef={{
                  resizable: true,
                }}
              />
            </div>
          </>
        )}

        {!loading && repodata.length === 0 && !error && keyword && (
          <Alert severity="info">
            No repositories found. Try a different search term.
          </Alert>
        )}
      </Paper>
    </Box>
  );
}

export default GitHubRepoSearch;








