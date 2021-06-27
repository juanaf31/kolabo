import React from 'react'
import { Form, Input, Button, Checkbox, notification } from 'antd';
import { auth, provider } from '../../../utils/firebase';

function LoginForm() {
    const signIn = (values) => {
        auth.signInWithEmailAndPassword(values.email, values.password).catch((error) => notification.error({
            message: 'Gagal',
            description: 'Periksa kembali email dan password kamu'
        }));
    };
    const onFinish = (values) => {
        signIn(values)
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

export default LoginForm
