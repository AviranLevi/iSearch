import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//pages
import Welcome from '../pages/Welcome'
import Search from '../pages/Search'
import Wishlist from '../pages/Wishlist'

const Routes = () => (
  <Router>
    <Switch>
      <Route path='/wishlist'>
        <Wishlist />
      </Route>
      <Route path='/search'>
        <Search />
      </Route>
      <Route path='/'>
        <Welcome />
      </Route>
    </Switch>
  </Router>
)

export default Routes
