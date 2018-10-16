import React,{Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Series from './components/Series';
import Movies from './components/Movies';
import Home from './components/Home';
import Next from './components/Next';
import Error from './components/Error';



class App extends Component {

  render(){
    return(
      <Router>
        <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/series"} component={Series} />
        <Route path={"/series/:content"} component={Next} />
        <Route exact path={"/movie"} component={Movies} />
        <Route path={"/movie/:content"} component={Next} />
        <Route component={Error} />
        </Switch>
      </Router>
    );
  }
}

render(<App />,document.getElementById('root'));
