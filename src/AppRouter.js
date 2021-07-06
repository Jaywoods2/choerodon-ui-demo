import React from 'react';
import './App.css';
import logo from './public/hand.png';
import { Layout, Menu} from 'choerodon-ui';
import { browserHistory, Router } from 'react-router'
import MenuSider from './menu'
import HarborRoute from './basics/harbor/index'
import MysqlRoute from './basics/mysql/index'

const { Header, Content } = Layout;

function AppRouter() {
    return (
            <Layout>
                <Header className="header" style={{background: "#fdfdfd",marginBottom: "2px"}}>
                <div className="logo" />
                <Menu
                    theme=""
                    mode="horizontal"
                    defaultSelectedKeys={['0']}
                    style={{ lineHeight: '64px'}}
                >
                    <Menu.Item key="1">
                    <img src={logo} width='80px'  alt="logo"/>
                    <b>&nbsp;HInfra快速部署平台</b>
                    </Menu.Item>
                </Menu>
                </Header>
                <Layout>
                <MenuSider />
                <Layout style={{ paddingLeft: '3px' ,minHeight: window.innerHeight-64}}>
                    <Content style={{ background: '#fff', padding: 14, margin: 2, minHeight: 280 }}>
                    <Router history={browserHistory}>
                        {HarborRoute()}
                        {MysqlRoute()}
                    </Router>
                    <div style={{ textAlign: 'center',marginTop:'15px' }}>汉得信息©技术中心-基础架构中心</div>
                    </Content>
                </Layout>
                </Layout>
            </Layout>
    )
}

export default AppRouter;