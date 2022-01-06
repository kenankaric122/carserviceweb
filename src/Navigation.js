import React from 'react'
import { Route, Switch, BrowserRouter} from 'react-router-dom'
import Landing from './pages/Landing'

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
            <Route path="/" exact component={Landing}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;
