import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import { styles } from './OrgChartStyles';
import OrgChartNode from '../OrgChartNode/OrgChartNode';

class OrgChart extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { classes, org } = this.props;

		return (
			<React.Fragment>
				<Grid
					container
					direction="row"
					justify="space-around"
					alignContent="space-around"
					className={classes.root}
					spacing={24}
				>
					{org.map(employee => {
						return (
							<Grid item xs={3} className={classes.card}>
								<OrgChartNode
									employee={employee}
									handleDelete={this.props.handleDelete}
								/>
							</Grid>
						);
					})}
				</Grid>
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(OrgChart);
