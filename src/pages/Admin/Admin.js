import React from 'react'
import { Switch } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import NavBar from '../../components/Navbar';
import Dashboard from '../Dashboard';

const  Admin = ()=> {
    return (
        <>
        <NavBar />
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    )
}

export default Admin;

