var React = require('react');
var PropTypes = require('prop-types');

class ZipCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: 14226
    }

    this.handleSubmitZipCode = this.handleSubmitZipCode.bind(this);

    this.handleUpdateZipCode = this.handleUpdateZipCode.bind(this);
  }



  handleSubmitZipCode(event) {
    event.preventDefault();

    this.props.onSubmit(

    )
  }

  handleUpdateZipCode(event) {
    var value = event.target.value;

    this.setState({
      zipcode: value
    })
  }

  render() {
    return (
      <div
        className='zipcode-container'
        style={{ flexDirection: this.props.direction }}
      >
        <input type="text"
          className='form-control'
          onChange={this.handleUpdateZipCode}
          placeholder='Buffalo, New York'
          type='text'
          value={this.state.zipcode}
        />
        <button
          className='btn btn-sucess'
          type='submit'
        >
          Submit
        </button>
      </div>
    )
  }
}

module.exports = ZipCode;

ZipCode.defaultProps = {
  direction: 'column'
}