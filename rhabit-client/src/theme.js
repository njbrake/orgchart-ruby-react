import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#fff3e0', // Offwhite color
		},
		secondary: {
			main: '#ff7901', //Orange Color
		},
		tertiary: {
			main: '#77b339', // Green color
		},
	},
	typography: {
		fontFamily: "'Open Sans', sans-serif",
		textTransform: 'none',
	},
});
