import { Row, Col, Layout, Image, Grid, Dropdown, Menu, Button, Drawer } from 'antd'
import React, { useState } from 'react'
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
import Avatar from 'antd/lib/avatar/avatar'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/user/userSlice'
import burger from '../assets/img/burger.png'

const { Header, Sider, Content } = Layout
const { useBreakpoint } = Grid
function DashboardLayout({ children, ...rest }) {
    const { xs } = useBreakpoint()
    const user = useSelector(selectUser)
    const [collapse, setCollapse] = useState(false);
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setCollapse(false);
        setVisible(false);
    };

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
            {!xs && (
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
                    collapsible
                    collapsed={xs ? true : collapse}>
                    <Row justify='center'>
                        <Image
                            preview={false}
                            src={imgLogo}
                            width={80}
                            className="logo"
                        />
                    </Row>
                    <Menus collapse={collapse} />
                </Sider>
            )}
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{ padding: '5px 15px' }}>
                    <Row justify={xs ? "space-between" : "end"} align="middle">
                        {xs && (
                            <Col
                                style={{
                                    display: "flex",
                                    padding: "14px 10px",
                                }}>
                                <Row align="middle" gutter={[12, 0]}>
                                    <Col>
                                        <Row align='middle' onClick={showDrawer}>
                                            <Image src={burger} width={30} preview={false} />
                                        </Row>
                                    </Col>
                                    <Col
                                        style={{
                                            height: 40,
                                            paddingTop: "2px",
                                        }}>
                                        <Image
                                            preview={false}
                                            src={imgLogo}
                                            width={40}
                                            height={40}
                                        />
                                    </Col>
                                </Row>
                                <Drawer
                                    title="Menu"
                                    placement="left"
                                    cloable={false}
                                    onClose={onClose}
                                    visible={visible}>
                                    <Menus onSelect={onClose} />
                                </Drawer>
                            </Col>
                        )}
                        <Col>
                            <Row justify="end" align="middle">
                                <Col>
                                    <Dropdown
                                        overlay={menu}
                                        trigger={["click"]}>
                                        <Avatar
                                            shape='circle'
                                            src={user?.photo}
                                            style={{ cursor: 'pointer' }}
                                            size='large'
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
