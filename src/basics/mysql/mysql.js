import React, { Component } from 'react';
import {Card,Steps } from 'choerodon-ui';
const Step = Steps.Step

class Mysql extends Component {
    render() {
        return (<div>

<Card style={{ width: '100%' }}>
            <Steps size="small" current={1}>
                <Step title="部署模式" />
                <Step title="维护主机" />
                <Step title="参数确认" />
                <Step title="开始部署" />
                <Step title="部署完成" />
              </Steps>
          </Card>
          <Card style={{ width: '100%' , height: window.innerHeight-200,marginTop: 2,overflowY: "scroll" }}>
Mysql

          </Card>
        </div>);
    }
}

export default Mysql;