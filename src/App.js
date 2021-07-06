import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb, Icon,Card,Steps } from 'choerodon-ui';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const Step = Steps.Step;

class App extends Component {

  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
<Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['0']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">HInfra快速部署平台</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="dashboard-o" />
                基础组件
              </span>
            }
          >
            <Menu.Item key="1">Harbor部署</Menu.Item>
            <Menu.Item key="2">Mysql部署</Menu.Item>
            <Menu.Item key="3">Redis部署</Menu.Item>
            <Menu.Item key="4">RocketMQ部署</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="laptop" />
                产品服务
              </span>
            }
          >
            <Menu.Item key="5">Hzero部署</Menu.Item>
            <Menu.Item key="6">SRM部署</Menu.Item>
            <Menu.Item key="7">MES部署</Menu.Item>
            <Menu.Item key="8">HOC部署</Menu.Item>
            <Menu.Item key="9">HALM部署</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="fiber_smart_record-o" />
                监控运营
              </span>
            }
          >
            <Menu.Item key="9">Mysql备份</Menu.Item>
            <Menu.Item key="10">健康巡检</Menu.Item>
            <Menu.Item key="11">日志导出</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 5px 5px' ,minHeight: window.innerHeight-64}}>
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
          <Card style={{ width: '100%' }}>
            <Steps size="small" current={1}>
                <Step title="部署模式" />
                <Step title="维护主机" />
                <Step title="参数确认" />
                <Step title="开始部署" />
                <Step title="部署完成" />
              </Steps>
          </Card>
          <Card style={{ width: '100%' , minHeight: window.innerHeight-200,marginTop: 2}}>
            Content
          </Card>
        </Content>
      </Layout>
    </Layout>
  </Layout>
    );
  }
}
export default App;
