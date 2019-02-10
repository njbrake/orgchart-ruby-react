import React, { Component } from 'react';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import axios from 'axios';
import { theme } from './theme.js';
import { styles } from './AppStyles.js';

import Header from './components/Header/Header';
import OrgChart from './components/OrgChart/OrgChart';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			org: [],
		};
		this.getAllEmployees = this.getAllEmployees.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.filterEmployees = this.filterEmployees.bind(this);
	}
	componentWillMount() {
		this.getAllEmployees();
	}
	handleDelete(id) {
		axios
			.delete(`/api/v1/employees/${id}`)
			.then(res => {
				this.getAllEmployees();
			})
			.catch(err => console.log(err));
	}
	getAllEmployees() {
		axios
			.get('/api/v1/employees')
			.then(res => {
				this.setState({ org: res.data.data });
			})
			.catch(err => console.log(err));
	}
	filterEmployees(manager_filter) {
		if (manager_filter === '') {
			this.getAllEmployees();
		} else {
			axios.get(`/api/v1/managers/${manager_filter}`).then(res => {
				console.log(res);
				this.setState({ org: res.data.data });
			});
		}
	}
	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<Header
					getAllEmployees={this.getAllEmployees}
					filterEmployees={this.filterEmployees}
				/>
				<OrgChart org={this.state.org} handleDelete={this.handleDelete} />
			</MuiThemeProvider>
		);
	}
}

export default withStyles(styles)(App);
