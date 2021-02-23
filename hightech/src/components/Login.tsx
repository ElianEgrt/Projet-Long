import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const LoginPage = styled.div`
  
`;

class Login extends React.Component {
    static propTypes: {
        setToken: PropTypes.func.isRequired;
    };

    render() {
        const [username, setUsername] = useState<string>();
        const [passworld, setPassword] = useState<string>();
        return (
            <LoginPage>
                <h1>Please Log In</h1>
                <form>
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