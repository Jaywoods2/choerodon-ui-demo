import React, { Component } from 'react';
import {Card } from 'choerodon-ui';

class Redis extends Component {
    render() {
        return (
        <div>

            <Card style={{ width: '100%' }}>
                查看已安装列表
            </Card>

            <Card style={{ width: '100%' , height: window.innerHeight-200,marginTop: 2,overflowY: "scroll" }}>
                Redis地址信息
            </Card>
        </div>);
    }
}

export default Redis;