var React = require('react');
var ZipCode = require('./ZipCode');
var branches = require('../../assets/branches.png');

class Home extends React.Component {
  render() {
    return (
      <div className='home-container' style={{ backgroundImage: "url(" + branches + ")" }}>
        <h1 className='header'>
          Enter a City and State
              <ZipCode />
        </h1>
      </div>
    )
  }
}

module.exports = Home;