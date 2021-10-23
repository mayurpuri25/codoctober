import React from 'react'
import { Switch } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import NavBar from '../../components/Navbar';
import Timeline from '../Timeline';
import Resources from '../Resources';
import Dashboard from '../Dashboard';
import AllNotes from "../Note/AllNotes";

const  Admin = ()=> {
    return (
        <>
        <NavBar />
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/webDevelopment" component={Timeline} />
                <Route exact path="/allnotes" component={AllNotes} />
                <Route exact path="/webdevelopment" component={Timeline} />
                <Route exact path="/resources" component={Resources} />

                <Redirect from="*" to="/" />
            </Switch>
        </>
    )
}

export default Admin;

