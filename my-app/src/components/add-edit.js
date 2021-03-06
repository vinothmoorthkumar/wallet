
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const styles = {
  root: {
    '& .MuiTextField-root': {
      margin: 10,
      width: 300,
    },
  },
};

const validateForm = (errors) => {
  let valid = true;
  console.log('errors', errors)
  Object.values(errors).forEach(
    (val) => val.result && (valid = false)
  );
  return valid;
}

class addEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      errors: {
        name: {
          message: false,
          result: false
        },
        description: {
          message: false,
          result: false
        },
      }
    };
  }

  myChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let errors = this.state.errors;

    switch (name) {
      case 'name':
        errors.name.message = value.length < 5 ? 'Full Name must be 5 characters long!' : false;
        console.log('test', value.length < 5)
        errors.name.result = errors.name.message ? true : false
        break;
      case 'description':
        errors.description.message = value.length < 5 ? 'Description must be 5 characters long!' : false;
        errors.description.result = errors.description.message ? true : false
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info('Valid Form')
    } else {
      console.error('Invalid Form')
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form onSubmit={this.mySubmitHandler} className={classes.root} autoComplete="off">
          <div>
            <RadioGroup aria-label="gender" name="gender1">
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
              <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
            </RadioGroup>
          </div>
          <div>
            <TextField
              error={this.state.errors.name.result}
              id="outlined-error-helper-text"
              label="Name"
              name="name"
              helperText={this.state.errors.name.message}
              variant="outlined"
              onChange={this.myChangeHandler}
            />
          </div>
          <div>
            <TextField
              error={this.state.errors.description.result}
              id="outlined-error-helper-text"
              label="Description"
              name="description"
              helperText={this.state.errors.description.message}
              variant="outlined"
              onChange={this.myChangeHandler}
            />
          </div>
          <Button type="submit" variant="contained" color="primary">
            Save
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
