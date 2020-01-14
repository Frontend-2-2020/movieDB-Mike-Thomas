import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Detail from './pages/Detail';
import Home from './pages/Home';
import bootstrap from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="bg-light text-light">
        <div className="container-fluid bg-dark text-center p-3">
            <a href="/">
              <img className="logo" src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg" alt="Logo of the Movie DB API"/>
            </a>
            <h4>A React Exercise</h4>
            <span>by Mike & Thomas</span>
        </div>  
      <Router>
          
          <Switch>
            <Route path="/movie/:id" component={Detail}></Route>
            <Route path={["/", "/:page"]} exact component={Home}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
