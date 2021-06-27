import React from 'react'
import { Form, Input, Button, notification } from 'antd';
import { auth } from '../../../utils/firebase';
import { useHistory } from 'react-router-dom';

function SignupForm() {
    const history = useHistory()
    const signup = (values) => {
        auth.createUserWithEmailAndPassword(values.email, values.password).then(res => {
            console.log(res.additionalUserInfo)
            if (res.additionalUserInfo.isNewUser) {
                notification.success({
                    message: 'Yeeayy!',
                    description: 'Emailmu sudah terdaftar'
                })
                history.push('/login')
            }
        }).catch((error) => notification.error({
            message: 'Gagal',
            description: error.message
        }));
    };
    const onFinish = (values) => {
        signup(values)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            name="basic"
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 24,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                        message: 'Please input your email!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    // offset: 8,
                    span: 24,
                }}
            >
                <Button size='large' style={{ width: '100%' }} type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default SignupForm
