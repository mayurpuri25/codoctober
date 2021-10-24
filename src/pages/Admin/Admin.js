import React from 'react'
import { Switch } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import NavBar from '../../components/Navbar';
import Timeline from '../Timeline';
import Resources from '../Resources';
import Track from '../Track';
import Dashboard from '../Dashboard';
import Footer from '../../components/Footer';
const  Admin = ()=> {
    return (
        <>
        <NavBar />
            <Switch>
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/track/:moduleid" component={Timeline} />
                <Route exact path="/track/:moduleid/:submoduleid" component={Resources} />
                <Route exact path="/track" component={Track} />

                <Redirect from="*" to="/dashboard" />
            </Switch>
         <Footer />   
        </>
    )
}

export default Admin;

