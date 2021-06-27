import React from 'react'
import { Layout } from 'antd'

const { Content } = Layout
function BlankLayout({ children, ...rest }) {
    console.log(children, rest)
    return (
        <Layout {...rest} style={{ backgroundColor: 'white' }}>
            <Content>
                {children}
            </Content>
        </Layout>
    )
}

export default BlankLayout
