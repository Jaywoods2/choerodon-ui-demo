import React from 'react';
import {
    Switch,
    Route,
    withRouter
  } from "react-router-dom";
import Redis from './redis/redis'
import RedisMode from './redis/mode'
import Harbor from './harbor/harbor'
import Mysql from './mysql/mysql'

const BasicRoute=({match})=> 
     (
        <Switch>
            <Route exact path='/basic' render={({ match }) => {
                return <div />;
            }} />

            <Route path='/basic/redis/mode' component={RedisMode} />
            <Route path='/basic/redis' component={Redis} />

            <Route path='/basic/harbor' component={Harbor} />
            <Route path='/basic/mysql' component={Mysql} />
        </Switch>
    );


export default withRouter(BasicRoute);