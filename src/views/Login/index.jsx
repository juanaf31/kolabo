import { Image, Row, Col, Space, Grid, Button, Layout } from 'antd';
import React, { useEffect } from 'react'
import { auth, provider } from '../../utils/firebase';
import illustrationLogin from '../../assets/img/login.jpg'
import '../../assets/css/views/login.css'
import imgLogo from '../../assets/img/kolabo_icon.png'
import LoginForm from './partials/LoginForm';
import ButtonGoogle from '../../components/Button/ButtonGoogle';
import { useDispatch } from 'react-redux';
import { login, logout } from '../../features/user/userSlice';

const { useBreakpoint } = Grid;

function Login() {
    const dispatch = useDispatch()
    const { xs } = useBreakpoint()
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };
    useEffect(
        () => {
            auth.onAuthStateChanged((authUser) => {
                if (authUser) {
                    dispatch(
                        login({
                            uid: authUser.uid,
                            photo: authUser.photoURL,
                            email: authUser.email,
                            displayName: authUser.displayName
                        })
                    );
                } else {
                    dispatch(logout());
                }
            });
        },
        [dispatch]
    );
    return (
        <div>
            <Image preview={false} className="img-logo" src={imgLogo} alt={imgLogo} />
            <Row style={{ marginTop: '-25px' }} align='middle'>
                {!xs && (
                    <Col
                        xl={{ span: 12, offset: 3 }}
                        lg={{ span: 12, offset: 0 }}
                        md={{ span: 12, offset: 0 }}
                        xs={{ span: 12 }}>
                        <Row justify='end'>
                            <Image
                                className='img-hero'
                                src={illustrationLogin}
                                preview={false}
                            />
                        </Row>
                    </Col>
                )}
                <Col
                    xl={{ span: 9 }}
                    lg={{ span: 12 }}
                    md={{ span: 12 }}
                    xs={{ span: 24 }}>
                    <Row align="middle" justify='center'>
                        <Space direction="vertical" align="center">
                            <h2>
                                Selamat Datang di Kolabo.
                            </h2>
                            <p>
                                Silakan masuk menggunakan email anda.
                            </p>
                        </Space>
                        <Col span={19}>
                            <LoginForm />
                        </Col>
                        <Col span={24}>
                            <Row justify='center'>
                                <ButtonGoogle onClick={() => signIn()} />
                            </Row>
                        </Col>
                        <Space direction="vertical" align="center" style={{ marginTop: 11 }}>
                            <p>
                                Belum punya akun? <a href='/register'>Daftar</a>
                            </p>
                        </Space>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Login
