var React = require('react');
var Navbar = require('./Navbar')
var ZipCode = require('./ZipCode');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
require('../../css/style.css');

var branches = require('../../assets/branches.png');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Navbar />
          <div className='home-container' style={{ backgroundImage: "url(" + branches + ")" }}>
            <h1 className='header'>
              Enter a City and State
              <ZipCode />
            </h1>
          </div>


        </div>
      </Router>
    )
  }
}

module.exports = App;