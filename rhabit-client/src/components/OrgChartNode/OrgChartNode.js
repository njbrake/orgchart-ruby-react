import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
	Button,
	Card,
	CardHeader,
	CardContent,
	Typography,
} from '@material-ui/core';

import { styles } from './OrgChartNodeStyles';

const OrgChart = props => {
	const { employee, classes } = props;
	return (
		<Card className={classes.root} raised>
			<CardHeader
				title={`${employee.first_name} ${employee.last_name}`}
				subheader={employee.title}
			/>

			<CardContent>
				<Typography>{`Reports To ID ${employee.manager_id}`}</Typography>
			</CardContent>
			<CardContent>
				<Button
					variant="contained"
					onClick={() => this.props.handleDelete(employee.id)}
					style={{ backgroundColor: 'red' }}
				>
					Delete
				</Button>
			</CardContent>
		</Card>
	);
};

export default withStyles(styles)(OrgChart);
