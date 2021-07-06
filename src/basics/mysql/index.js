import React from 'react';
import { Route } from 'react-router'
import Mysql from './mysql'

function MysqlRoute() {
    return (
    <Route path='/mysql' component={Mysql} >
    </Route>
    );
}

export default MysqlRoute;