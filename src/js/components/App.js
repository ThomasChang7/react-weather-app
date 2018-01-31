var React = require('react');
var Navbar = require('./Navbar')
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
require('../../css/style.css');
var Home = require('./Home');
var About = require('./About');
var Forecast = require('./Forecast');


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/forecast' component={Forecast} />
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;