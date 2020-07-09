import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SongPicker from './SongPicker';
import App from './App';
import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SongPicker} />
            <Route path="/song/:songId" component={App} />
            {/* Haven't figured out how I'll create the SectionPlanner page yet, maybe it will be render a component called SectionPlanner */}
            {/* <Route path="/song/:songId/section/sectionId" component={SectionPlanner} /> */}
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Router;