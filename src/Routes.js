import React from 'react'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Signup from './pages/auth/Signup'
import Signin from './pages/auth/Signin'
import Cart from './pages/Cart'
import Deals from './pages/Deals'

const Routes = () => {
    return (
        <>
        <Router>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/signin" component={Signin}/>
                <Route exact path="/cart" component={Cart}/>
                <Route exact path="/deals" component={Deals}/>
                
                
            </Switch>
        </Router>
            
        </>
    )
}

export default Routes
