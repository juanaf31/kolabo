import { DeleteOutlined, PlusOutlined } from '@ant-design/icons'
import { Row, Typography, Col, Button, Input, Checkbox } from 'antd'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardComponent from '../../../components/Card'
import { selectUser } from '../../../features/user/userSlice'
import db from '../../../utils/firebase'
import firebase from 'firebase'

function TugasCard() {

    const user = useSelector(selectUser)
    const [input, setInput] = useState('')

    const [activeTasks, setActiveTasks] = useState([])
    const [doneTasks, setDoneTasks] = useState([])


    const handleChange = (e) => {
        if (e.key === 'Enter') {
            console.log(e.target.value)
            setInput('')
            db.collection('users').add({
                user: user.uid,
                name: input,
                done: false,
                team: false,
                favourite: false,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
        }
    }

    const handleUpdate = (id, val) => {
        console.log(id, val)
        db.collection('users').doc(id).update({ done: !val })
    }

    const handleDelete = (id) => {
        db.collection('users').doc(id).delete()
        console.log(id)
    }

    useEffect(() => {
        db.collection('users').where('user', '==', user.uid).where('done', '==', false)
            .onSnapshot((snapshot) => setActiveTasks(prev => snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))));
        db.collection('users').where('user', '==', user.uid).where('done', '==', true)
            .onSnapshot((snapshot) => setDoneTasks(prev => snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))));
    }, [])

    return (
        <CardComponent title='Tugas'>
            <Row>
                <Typography.Title level={5}>
                    {`Pekerjaan Tersisa (${activeTasks.length})`}
                </Typography.Title>
            </Row>
            {activeTasks.map(item => (
                <Row gutter={[12, 12]}>
                    <Col>
                        <Checkbox
                            onChange={(e) => {
                                handleUpdate(item.id, e.target.value)
                            }}
                            checked={item.done} />
                    </Col>
                    <Col flex={1}>
                        <Typography.Text>{item.name}</Typography.Text>
                    </Col>
                    <Col>
                        <Button
                            onClick={() => handleDelete(item.id)}
                            icon={<DeleteOutlined />} style={{ border: 'none' }} />
                    </Col>
                </Row>
            ))}
            <Row align='middle' style={{ borderBottom: '1px solid #efefef', padding: 5 }}>
                <Col>
                    <Button style={{ border: 'none' }} icon={<PlusOutlined />} />
                </Col>
                <Col flex={1} >
                    <Input value={input} bordered={false} type='text' onChange={e => setInput(e.target.value)} placeholder="Tambahkan Tugas" onKeyPress={(e) => handleChange(e)} />
                </Col>
            </Row>
            {doneTasks.length > 0 && (
                <Row>
                    <Typography.Title level={5}>
                        {`Pekerjaan Selesai (${activeTasks.length})`}
                    </Typography.Title>
                </Row>
            )}
            {doneTasks.length > 0 && doneTasks.map(item => (
                <Row gutter={[12, 12]}>
                    <Col>
                        <Checkbox checked={item.done} onChange={(e) => handleUpdate(item.id, e)} />
                    </Col>
                    <Col flex={1}>
                        <Typography.Text>{item.name}</Typography.Text>
                    </Col>
                    <Col>
                        <Button icon={<DeleteOutlined />} style={{ border: 'none' }} />
                    </Col>
                </Row>
            ))}
        </CardComponent>
    )
}

export default TugasCard
