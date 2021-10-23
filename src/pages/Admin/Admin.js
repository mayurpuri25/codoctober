import React from 'react'
import { Switch } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import NavBar from '../../components/Navbar';
import Timeline from '../Timeline';
import Dashboard from '../Dashboard';
import Notes from "../Note/Notes";

const  Admin = ()=> {
    return (
        <>
        <NavBar />
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/webDevelopment" component={Timeline} />
                <Route exact path="/notes" component={Notes} />

                <Redirect from="*" to="/" />
            </Switch>
        </>
    )
}

export default Admin;

