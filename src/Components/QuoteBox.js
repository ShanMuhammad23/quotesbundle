import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

class QuoteBox extends Component {
  render() {
    const { quote } = this.props;
    return (
      <div className='my-3 col-md-3 row  mx-2 p-3 rounded quotebox text-white'>
      <h2 className='quote'>{this.props.text}</h2>
      <span className="author">{this.props.author}</span>
    </div>
    );
  }
}

QuoteBox.propTypes = {
  quote: PropTypes.string.isRequired,
};

export default QuoteBox;
