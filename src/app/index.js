import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from '../components/Main';
import { NavBar } from '../components'
import { UsersList, UsersInsert, UsersUpdate } from '../pages'
import SignUp from '../log/SignUp'
import SignIn from '../log/SignIn'
import Profile from '../components/Profile';
import Reservation from '../components/Reservation'


import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <BrowserRouter>
             <Route exact path="/" component={Main}/>
                
                
                <Route path="/SignUp" exact component={SignUp} />
            <Route path="/SignIn" exact component={SignIn} />
            <Route path="/Reservation" exact component={Reservation} />
            <Route path="/Profile" exact component={Profile} />


        </BrowserRouter>
    )
}

export default App