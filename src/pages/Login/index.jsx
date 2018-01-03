import React from 'react';
import { Button } from 'antd';
import LoginForm from './login.jsx';

export default class Login extends React.Component {
    
    // skip = () => {
    //     this.props.history.push({
    //         pathname:"/index"
    //     })
    // }
    render() {
        return (
            <div>
                <LoginForm />
            </div>
        )
    }
}