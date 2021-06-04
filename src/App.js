import React from 'react'
import Navbar from './component/Navbar'
import './App.css'
import Home from './component/pages/Home';
import Services from './component/pages/Services'
import Product from './component/pages/Product'
import SignUp from './component/pages/SignUp'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const App = () => {
    return (
        <>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path='/' exact component={Home} />   
                    <Route path='/services' exact component={Services} />   
                    <Route path='/products' exact component={Product} />   
                    <Route path='/sign-up' exact component={SignUp} />   
                </Switch>
            </Router>
        </>
    )
}

export default App

