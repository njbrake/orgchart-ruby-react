import React from "react";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import { Toolbar, Button, Grid, Input, AppBar } from "@material-ui/core";

import { styles } from "./HeaderStyles";

import RhabitLogo from "../../assets/RhabitLogo";
import Modal from "./Modal";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      manager_id: "",
      title: "",
      modalOpen: false,
      anchorEl: null,
      manager_filter: ""
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    axios
      .post("/api/v1/employees", {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        title: this.state.title,
        manager_id: this.state.manager_id
      })
      .then(res => {
        this.props.getAllEmployees();
        this.setState({
          first_name: "",
          last_name: "",
          title: "",
          manager_id: "",
          modalOpen: false
        });
      });
  }
  toggleModal(e) {
    this.setState({
      modalOpen: !this.state.modalOpen,
      anchorEl: e.currentTarget
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="space-between"
            >
              <Grid item xs={3}>
                <RhabitLogo />
              </Grid>

              <Grid item xs={6}>
                <Input
                  name="manager_filter"
                  placeholder="Filter for Manager ID"
                  value={this.state.manager_filter}
                  onChange={this.handleChange}
                />

                <Button
                  variant="outlined"
                  color="secondary"
                  className={classes.button}
                  onClick={() =>
                    this.props.filterEmployees(this.state.manager_filter)
                  }
                >
                  Filter by Manager Id
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  className={classes.addButton}
                  onClick={this.toggleModal}
                  variant="contained"
                  color="secondary"
                >
                  Add Employee
                </Button>
              </Grid>
              <Modal
                {...this.state}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
              />
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
