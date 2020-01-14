import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Detail from './pages/Detail';
import Home from './pages/Home';
import bootstrap from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="bg-dark">
        <Router>
          <Link to="/">Home</Link>
          <Link to="/movie">Detail</Link>

          <Switch>
            <Route path="/movie" component={Detail}></Route>
            <Route path="/" exact component={Home}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
