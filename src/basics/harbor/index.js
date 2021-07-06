import React from 'react';
import { Route } from 'react-router'
import Harbor from './harbor'

function HarborRoute() {
    return (
    <Route exact path='/harbor' component={Harbor} />
    );
}

export default HarborRoute;