import React, { Component } from 'react';

class Login extends Component {
    state = {
        credentials: {
            username: "",
            password: "",
        }
    };

    handleChanges = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    


    render() {
        return (
            <div>
                <form>
                    <input />
                    <input />
                    <button />
                </form>
            </div>
        );
    }
}


//mapStateToFriends and Connect go here


export default Login;