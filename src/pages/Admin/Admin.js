import React from 'react'
import { Switch } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import NavBar from '../../components/Navbar';
import Timeline from '../Timeline';
import Resources from '../Resources';
import Track from '../Track';
import Dashboard from '../Dashboard';

const  Admin = ()=> {
    return (
        <>
        <NavBar />
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/webdevelopment" component={Timeline} />
                <Route exact path="/resources" component={Resources} />
                <Route exact path="/track" component={Track} />

                <Redirect from="*" to="/" />
            </Switch>
        </>
    )
}

export default Admin;

