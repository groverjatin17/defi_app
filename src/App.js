import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/common/NavigationBar';
import Home from './pages/homepage/Homepage.Main';
import './styles/scss/index.scss';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Login from './pages/login/Login';

function App() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.value);
  const isDarkMode = useSelector((state) => state.isDarkMode.value);
  const state = useSelector((state) => state);
  console.log('🚀 ~ App ~ isDarkMode', state);
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      background: {
        paper: isDarkMode ? '#27222B' : '#ffffff',
        box: isDarkMode ? '#27222B' : '#ffffff',
        button: isDarkMode ? '#FF656E' : '#E30613',
      },
      custom: {
        pink: '#FF656E',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
