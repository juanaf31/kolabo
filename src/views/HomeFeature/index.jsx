import { Row, Typography, Col } from 'antd'
import React from 'react'
import TugasCard from './partials/TugasCard';
import CardComponent from '../../components/Card';

function Home() {
    return (
        <div>
            <Row justify='space-around' gutter={[30, 12]}>
                <Col span={12}>
                    <Row justify='center'>
                        <Typography.Title style={{ color: '#2d90ea' }} level={4}>Pekerjaan Hari Ini</Typography.Title>
                    </Row>
                    <Row>
                        <TugasCard />
                    </Row>
                </Col>
                <Col span={12}>
                    <Row justify='center'>
                        <Typography.Title style={{ color: '#2d90ea' }} level={4}>Tugas Dari Kanban</Typography.Title>
                    </Row>
                    <Row>
                        <CardComponent title='Tugas' />
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Home
