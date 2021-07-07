import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'choerodon-ui';
import {
  withRouter
} from "react-router-dom";
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;



class MenuSider extends Component {
    constructor ( props ) {
        super(props)
        this.state = {}
      }

      onMenuItemClick=(item)=>{
        console.log(item);
        this.props.history.push(item.key)
      };

    render() {
        return (
        <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          onClick={this.onMenuItemClick}
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
            <Menu.Item key="/basic/harbor">Harbor部署</Menu.Item>
            <Menu.Item key="/basic/mysql">Mysql部署</Menu.Item>
            <Menu.Item key="/basic/redis">Redis部署</Menu.Item>
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
      );
    }
}

export default withRouter(MenuSider);