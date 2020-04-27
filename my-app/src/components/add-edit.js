
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    '& > *': {
      margin: 10,
      width: '25ch',
    },
  },
};

class addEdit extends React.Component {
  constructor() {
    super();
    this.state = { username: 'test', errormessage:false };
  }

  myChangeHandler = (event) => {
    console.log('event', event.target.value)
    this.setState({ username: event.target.value });
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    this.setState({ errormessage: true });
    console.log('this.state.username',this.state.username);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form onSubmit={this.mySubmitHandler} className={classes.root} autoComplete="off">
          <TextField
            error={this.state.errormessage}
            id="outlined-error-helper-text"
            label="Name"
            helperText="Incorrect entry."
            variant="outlined"
            onChange={this.myChangeHandler}
          />
          <Button type="submit" variant="contained" color="primary">
            Primary
          </Button>
        </form>
      </div>
    )
  }
}

addEdit.propTypes = {
  classes: PropTypes.object.isRequired,
};
// export default addEdit;
export default withStyles(styles)(addEdit);
