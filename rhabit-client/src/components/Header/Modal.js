import React from 'react';
import { Button, Typography, Popover, Input } from '@material-ui/core';

const Modal = props => {
	return (
		<Popover
			id="simple-popper"
			open={props.modalOpen}
			anchorEl={props.anchorEl}
			onClose={props.toggleModal}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'center',
			}}
			transformOrigin={{
				vertical: 'top',
				horizontal: 'center',
			}}
		>
			<Typography>Add an Employee</Typography>
			<Input
				name="first_name"
				placeholder="First Name"
				value={props.first_name}
				onChange={props.handleChange}
				autoFocus
			/>

			<Input
				name="last_name"
				placeholder="Last Name"
				value={props.last_name}
				onChange={props.handleChange}
			/>
			<Input
				name="title"
				placeholder="Title"
				value={props.title}
				onChange={props.handleChange}
			/>
			<Input
				name="manager_id"
				placeholder="Reports to ID"
				value={props.manager_id}
				onChange={props.handleChange}
			/>
			<Button
				variant="contained"
				color="secondary"
				onClick={props.handleSubmit}
			>
				Add Employee
			</Button>
		</Popover>
	);
};

export default Modal;
