import React from 'react';
import { Form, Icon, Input, Button,message,notification } from 'antd';
const FormItem = Form.Item;
// import LoginMain from '../../../assets/images/logoMain.png';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)

    }
    // handleSubmit=()=>{
    //     this.props.history.push({
    //         pathname: '/'
    //     })
    // }
    render() {
        const { getFieldDecorator } = this.props.form;
        return(
            <div>
                <Form style={Style.formBg} onSubmit = { this.handleSubmit } className="login-form">
                    <h2 style={Style.Headtitle}>
                        {/* <img src={LoginMain} /> */}
                        <p style={{color:'#ccc',letterSpacing:10,paddingBottom:15}}>会议室预定</p>
                    </h2>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{width:'100%'}}>
                            进入
                        </Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
const Style = {
    formBg:{
        backgroundColor:'#fff',
        width: '70%',
        margin: '0 auto',
        paddingTop: 200
    },
    Headtitle:{
        textAlign:'center'
    }
}
export default Form.create()(LoginForm);

