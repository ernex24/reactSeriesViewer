import React from 'react';
import { Switch, Route  } from "react-router-dom";
import SingleSeries from '../../containers/SingleSeries'
import Series from '../../containers/series';

const Main = props => (
    <Switch>
    <Route exact path="/" component = {Series} />
    <Route path="/series/:id" component = {SingleSeries} />
    </Switch>
)

export default Main;