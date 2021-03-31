import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <>
                    <Dialog
                        open
                        fullWidth
                        maxWidth='sm'
                    >
                        <AppBar title="Enter Personal Details" />
                        <TextField
                            placeholder="You got a job???"
                            label="Occupation"
                            onChange={handleChange('occupation')}
                            defaultValue={values.occupation}
                            margin="normal"
                            fullWidth
                        />
                        <br />
                        <TextField
                            placeholder="Put in your address here instead of just your city."
                            label="City"
                            onChange={handleChange('city')}
                            defaultValue={values.city}
                            margin="normal"
                            fullWidth
                        />
                        <br />
                        <TextField
                            placeholder="Bio please, specifically birthdate and the name of your first pet."
                            label="Bio"
                            onChange={handleChange('bio')}
                            defaultValue={values.bio}
                            margin="normal"
                            fullWidth
                        />
                        <br />

                        <Button
                            color="secondary"
                            variant="contained"
                            onClick={this.back}
                        >Go Back</Button>

                        <Button
                            color="primary"
                            variant="contained"
                            onClick={this.continue}
                        >Continue</Button>
                    </Dialog>
                </>
            </MuiThemeProvider>
        );
    }
}

export default FormPersonalDetails;