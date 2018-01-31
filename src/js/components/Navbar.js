var React = require('react');
var NavLink = require('react-router-dom').NavLink;
var ZipCode = require('./ZipCode');

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <ul id='navbar'>
          <li><p>Weather App</p></li>
          <li>
            <NavLink exact activeClassName='active' to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName='active' to='/about'>
              About
            </NavLink>
          </li>
          <li className='navbar-zipcode'><ZipCode direction='row' /></li>
        </ul>

      </div>
    )
  }
}

module.exports = Navbar;