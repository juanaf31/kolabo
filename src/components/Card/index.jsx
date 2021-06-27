import React from 'react'
import { Card, Row } from 'antd';

function CardComponent(props) {
    return (
        <Card {...props} headStyle={{ backgroundColor: '#58aae9', borderRadius: '10px 10px 0px 0px', color: 'white' }} style={{ width: '100%', borderRadius: '10px' }} title={props.title}>
            {props.children}
        </Card>
    )
}

export default CardComponent
