import React, { Component } from 'react';
import axios from 'axios'
import { withStyles } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const styles = theme => ({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            fullName: '',
            username: '',
            email: '',
            password: ''
        };

        this.changeFullName = this.changeFullName.bind(this);
        this.changeUsername = this.changeUsername.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    changeFullName(event){
        this.setState({
            fullName:event.target.value
        });
    }

    changeUsername(event){
        this.setState({
            username:event.target.value
        });
    }

    changeEmail(event){
        this.setState({
            email:event.target.value
        });
    }

    changePassword(event){
        this.setState({
            password:event.target.value
        });
    }

    onSubmit(event){
        event.preventDefault();

        const registered = {
            fullName: this.state.fullName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        axios.post("http://localhost:4000/app/signup", registered)
        .then(response => console.log(response.data))

        //window.location = '/'

        this.setState({
            fullName: '',
            username: '',
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <div>
                <React.Fragment>
                <CssBaseline />
                <Container maxWidth="sm">
                    
                    <form className={styles.root} noValidate autoComplete="off" onSubmit={this.onSubmit}>
                        <TextField id="fullName"
                            label="Full Name"
                            variant="outlined"
                            onChange={this.changeFullName}
                            value={this.state.fullName} />

                        <TextField id="username"
                            label="Username"
                            variant="outlined"
                            onChange={this.changeUsername}
                            value={this.state.username} />

                        <TextField id="email"
                            label="Email"
                            variant="outlined"
                            type="email"
                            onChange={this.changeEmail}
                            value={this.state.email} />

                        <TextField id="password"
                            label="Password"
                            variant="outlined"
                            type="password"
                            onChange={this.changePassword}
                            value={this.state.password} />

                        <Button
                            type="submit"
                            variant="contained"
                            color="inherit"
                            className={styles.button}
                        > Submit </Button>

                            
                    </form>
                </Container>
            </React.Fragment>
            </div>
            
                )
    }
}
