import { Row, Col, Layout, Image, Grid, Dropdown, Menu } from 'antd'
import React from 'react'
import imgLogo from '../assets/img/logo.png'
import { auth } from '../utils/firebase'
import * as Icon from 'react-feather'
import {
    Route,
    Switch
} from "react-router-dom";
import menuRouter from '../routers/routes'
import Menus from '../components/Menus'
import Footer from '../components/Footer'
import '../assets/css/layouts/dashboard.css'

const { Header, Sider, Content } = Layout
const { xs } = Grid

function DashboardLayout({ children, ...rest }) {

    const menu = (
        <Menu>
            <Menu.Item key="3" onClick={() => auth.signOut()}>
                <Row style={{ width: '80px' }}>
                    <Col>
                        <Icon.LogOut
                            color="#6e6b7b"
                            size={18}
                        />
                    </Col>
                    <Col>
                        Sign Out
                    </Col>
                </Row>
            </Menu.Item>
        </Menu>
    );

    return (
        <Layout {...rest} className="container">
            <Sider
                trigger={null}
                style={{
                    backgroundColor: "white",
                    minWidth: "none",
                    maxWidth: "none",
                    flex: "0 0 230px",
                    width: 0,
                    minHeight: '100vh'
                }}
                collapsible>
                <Row justify='center'>
                    <Image
                        preview={false}
                        src={imgLogo}
                        width={80}
                        className="logo"
                    />
                </Row>
                <Menus style={{ marginTop: '5vh' }} />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{ padding: '5px 15px' }}>
                    <Row justify="space-between" align="middle">
                        <Col span={24}>
                            <Row justify="end" align="middle">
                                <Col>
                                    <Dropdown
                                        overlay={menu}
                                        trigger={["click"]}>
                                        <Icon.Settings
                                            style={{ cursor: 'pointer' }}
                                            size={!xs ? 24 : 20}
                                            color="#6e6b7b"
                                        />
                                    </Dropdown>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Header>
                <Content className="container-body">
                    {children}
                </Content>
                <Footer />
            </Layout>
        </Layout>
    )
}

export default DashboardLayout
