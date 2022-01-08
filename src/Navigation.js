import React from 'react'
import { Route, Switch, BrowserRouter} from 'react-router-dom'
import Landing from './pages/Landing';
import Reservations from './pages/Reservations';
import Gallery from './pages/Gallery';
import Aboutus from './pages/Aboutus';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
            <Route path="/" exact component={Landing}/>
            <Route path="/reservations" exact component={Reservations}/>
            <Route path="/gallery" exact component={Gallery}/>
            <Route path="/aboutus" exact component={Aboutus}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;
