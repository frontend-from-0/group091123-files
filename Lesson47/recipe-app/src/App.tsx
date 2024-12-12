import './App.css';
import { AppRouter } from './AppRouter';
import { Navbar } from './shared-components/Navbar/index';
import Container from '@mui/material/Container';

export const App = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth='md'>
        <AppRouter />
      </Container>
    </>
  );
};
