import { Table, Row, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/user/userSlice'
import db from '../../utils/firebase'
import '../../assets/css/views/tim.css'

function TugasTim() {
    const user = useSelector(selectUser)
    const [tasks, setTasks] = useState([])
    const columns = [
        {
            title: '',
            dataIndex: '',
            width: 300,
            align: 'center'
        },
        {
            title: 'Tugas',
            dataIndex: 'name',
            width: 200,
        },
        {
            title: 'Status',
            dataIndex: 'done',
            width: 200,
            render: (val) => val === true ? (
                <div className='tags done'>
                    Selesai
                </div>
            ) : (
                <div className='tags'>
                    Dalam Proses
                </div>
            )
        }
    ]

    useEffect(() => {
        db.collection('users').where('user', '==', user.uid)
            .onSnapshot((snapshot) => setTasks(prev => snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))));
    }, [])
    return (
        <div>
            <Row align='middle' justify='center'>
                <Typography.Title style={{ color: '#2d90ea' }}>Tugas Tim Hari Ini</Typography.Title>
            </Row>
            <Table columns={columns} showHeader pagination={false} sticky dataSource={tasks} />
        </div>
    )
}

export default TugasTim
