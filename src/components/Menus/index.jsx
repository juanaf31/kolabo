import {
    DashboardOutlined, TeamOutlined,
} from "@ant-design/icons";
import { Menu, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function Menus(props) {
    const dataTop = [
        {
            id: 1,
            name: "Halamanku",
            icon: <DashboardOutlined />,
            path: "home",
        },
        {
            id: 2,
            name: "Tugas Tim",
            icon: <TeamOutlined />,
            path: "tugas-tim",
        },
    ];

    return (
        <Row align='middle'>
            <Menu
                onSelect={props.onSelect}
                theme="light"
                mode="inline"
                defaultSelectedKeys={[1]}>
                {dataTop.map((item, id) => (
                    <Menu.Item
                        key={id}
                        icon={item.icon}>
                        <Link to={`/${item.path}`}>{item.name}</Link>
                    </Menu.Item>
                ))}
            </Menu>
        </Row>
    );
}

export default Menus;
