import { Col, Row, Typography } from "antd";
import React from "react";

const Footer = () => {
    return (
        <footer
            style={{
                backgroundColor: "#465A6E",
                color: "white",
                padding: "20px 50px",
            }}>
            <Row data-testid='footer' justify="end">
                <Col>
                    <Typography style={{ color: "#FBFBFBB3" }}>
                        Kolabo
                    </Typography>
                    <Typography style={{ color: "#FBFBFBB3" }}>
                        Copyright 2021 ©
                    </Typography>
                </Col>
            </Row>
        </footer>
    );
};

export default Footer;
