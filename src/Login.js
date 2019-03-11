import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <p>
                    Username: <input type="text" name="username" />
                </p>
                <p>
                    Password: <input type="password" name="password" />
                </p>
                <button type="button" >Login </button>
            </div>
        );
    }
}

export default Login;
