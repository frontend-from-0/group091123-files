import { createTheme } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';

export const appTheme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: blueGrey[500],
    },
  },
});
