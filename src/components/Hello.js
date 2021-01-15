import React, { useState } from 'react'
import { connect } from 'react-redux'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '50ch',
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    button: {
        padding: '10px',
        marginTop: '20px'
    },
    heading: {
        margin: '20px'
    }
}));


export const Hello = (props) => {
    const classes = useStyles();
    const [user, setUser] = useState({ firstName: '', lastName: '', email: '', password: '', phone: '', country: '' })
    onsubmit = (e) => {
        e.preventDefault()
        props.getData(user);
    }
    if (props.user_data.login) {
        props.history.push("/home");
    }
    return (
        <div>

            <Container>
                <Typography color="primary" variant="h3" className={classes.heading} >
                    Form
                </Typography>
                <form onSubmit={() => onsubmit} className={classes.root} autoComplete="off">
                    <TextField inputProps={{ pattern: "[A-Za-z ]{1,32}", title: "Enter alphabetic characters only" }} required onChange={(e) => setUser({ ...user, firstName: e.target.value })} type='text' id="standard-basic" label="First Name" />
                    <TextField inputProps={{ pattern: "[A-Za-z ]{1,32}", title: "Enter alphabetic characters only" }} onChange={(e) => setUser({ ...user, lastName: e.target.value })} type='text' id="standard-basic" label="Last Name" />
                    <TextField inputProps={{ pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$", title: "Enter correct mail id" }} required onChange={(e) => setUser({ ...user, email: e.target.value })} type='email' id="standard-basic" label="Email" />
                    <TextField inputProps={{ pattern: ".{8,}", title: "Enter more than 8 characters" }} required onChange={(e) => setUser({ ...user, password: e.target.value })} type='password' id="standard-basic" label="Password" />
                    <TextField inputProps={{ pattern: "[0-9]+", title: "Enter only numerical digits" }} required onChange={(e) => setUser({ ...user, phone: e.target.value })} type='text' id="standard-basic" label="Phone" />
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Country</InputLabel>
                        <Select
                            required
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={user.country}
                            onChange={(e) => setUser({ ...user, country: e.target.value })}
                        >
                            <MenuItem value="India">India</MenuItem>
                            <MenuItem value="China">China</MenuItem>
                            <MenuItem value="Australia">Australia</MenuItem>
                        </Select>

                    </FormControl>
                    <Button type="submit" className={classes.button} variant="contained" color="primary">
                        Submit
                    </Button>
                </form>

            </Container>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user_data: state
})

const mapDispatchToProps = (dispatch) => {
    return {
        getData: (user) => dispatch({ type: 'REQUEST_API_DATA', payload: user })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello)
