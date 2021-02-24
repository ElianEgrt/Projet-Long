import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const LoginPage = styled.div`
  
`;

class Login extends React.Component {

    static propTypes = {
        setToken: PropTypes.func.isRequired
    };

    async loginUser(credentials:any) {
        return fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(data => data.json())
    }

    render() {
        const [username, setUsername] = useState<string>();
        const [password, setPassword] = useState<string>();

        const handleSubmit = async (e : any) => {
            e.preventDefault();
            const token = await this.loginUser({
              username,
              password
            });
        }

        return (
            <LoginPage>
                <h1>Please Log In</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <p>Username</p>
                        <input type="text" onChange={e => setUsername(e.target.value)}/>
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="text" onChange={e => setPassword(e.target.value)}/>
                    </label>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </LoginPage>
        )
    }
}

export default Login;