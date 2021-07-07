import React from 'react';
import './App.css';
import logo from './public/hand.png';
import { Layout, Menu} from 'choerodon-ui';
import {
    BrowserRouter as Router,
  } from "react-router-dom";
import MenuSider from './menu'
import BasicRoute from './basics/index'


const { Header, Content,Footer } = Layout;


function AppRouter() {
    return (
        <Router>
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
                <Layout style={{ paddingLeft: '3px' ,minHeight: window.innerHeight-128}}>
                    <Content style={{ background: '#fff', padding: 14, margin: 2, minHeight: 280 }}>
                       <BasicRoute />
                       <Footer style={{padding: '13px 0',height: '10px',width: '100%',background: '#fff' ,textAlign: 'center'}}>汉得信息©技术中心-基础架构中心</Footer>
                    </Content>
                </Layout>
                </Layout>
            </Layout>
            </Router>
    )
}

export default AppRouter;