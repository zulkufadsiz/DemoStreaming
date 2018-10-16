import React,{Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Series from './components/Series';
import Movies from './components/Movies';
import Home from './components/Home';



class App extends Component {

  render(){
    return(
      <Router>
        <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/series"} component={Series} />
        <Route path={"/movies"} component={Movies} />
        </Switch>
      </Router>
    );
  }
}

render(<App />,document.getElementById('root'));
