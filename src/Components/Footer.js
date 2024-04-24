import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
        <div className="card text-center bg-dark text-white my-3">
        <div className="card-header">
        Regards
        </div>
        <div className="card-body">
          <h5 className="card-title">Shan Muhammad</h5>
          <p className="card-text">Daily Inspirational Quotes To Make Your Day Motivated</p>
          <a href="#" className="btn btn-primary">Connect Me on LinkedIn</a>
        </div>
        <div className="card-footer text-muted">
           Copyright &copy;2024
        </div>
      </div>
    )
  }
}

export default Footer
