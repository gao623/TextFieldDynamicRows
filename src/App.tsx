import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container, Typography, Box } from '@mui/material';
import { ResponsiveMuiTextField } from './components/ResponsiveMuiTextField';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
  },
});

function App() {
  const [text, setText] = useState('');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box 
        sx={{ 
          minHeight: '100vh',
          overflow: 'auto',
          bgcolor: 'background.default'
        }}
      >
        <Container 
          maxWidth="lg" 
          sx={{ 
            py: 2,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}
        >
          <Typography variant="h4" component="h1">
            Dynamic TextField Demo
          </Typography>
          
          <Box sx={{ flex: '0 0 auto' }}>
            <Typography variant="h6" gutterBottom>
              Window Height Responsive TextField
            </Typography>
            <ResponsiveMuiTextField
              label="Dynamic Rows TextField"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="This TextField automatically adjusts its height based on window size..."
              variant="outlined"
              heightRatio={0.25}
            />
          </Box>

          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
            gap: 2,
            flex: '0 0 auto'
          }}>
            <Box>
              <Typography variant="h6" gutterBottom>
                Left Column
              </Typography>
              <ResponsiveMuiTextField
                label="Dynamic Column 1"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Left column text..."
                variant="outlined"
                heightRatio={0.2}
              />
            </Box>
            <Box>
              <Typography variant="h6" gutterBottom>
                Right Column
              </Typography>
              <ResponsiveMuiTextField
                label="Dynamic Column 2"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Right column text..."
                variant="outlined"
                heightRatio={0.2}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;