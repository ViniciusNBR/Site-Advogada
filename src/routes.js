import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Contact from './Pages/Contact'
import Principal from './Pages/Principal'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Principal} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </BrowserRouter>
    )
}