import { Image, Row, Col, Space, Grid, Button, Layout } from 'antd';
import React, { useEffect } from 'react'
import { auth, provider } from '../../utils/firebase';
import illustrationLogin from '../../assets/img/hero.png'
import '../../assets/css/views/login.css'
import imgLogo from '../../assets/img/kolabo_icon.png'
import ButtonGoogle from '../../components/Button/ButtonGoogle';
import SignupForm from './partials/SignupForm';

const { useBreakpoint } = Grid

function Register() {
    const { xs } = useBreakpoint()
    return (
        <div>
            <Image preview={false} className="img-logo" src={imgLogo} alt={imgLogo} />
            <Row style={{ marginTop: '-25px' }} align='middle'>

                <Col
                    xl={{ span: 9 }}
                    lg={{ span: 12 }}
                    md={{ span: 12 }}
                    xs={{ span: 24 }}>
                    <Row align="middle" justify='center'>
                        <Space direction="vertical" align="center">
                            <h2>
                                Daftarkan Dirimu.
                            </h2>
                            <p>
                                Masukkan menggunakan email anda.
                            </p>
                        </Space>
                        <Col span={19}>
                            <SignupForm />
                        </Col>
                    </Row>
                </Col>
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
            </Row>
        </div>
    )
}

export default Register
