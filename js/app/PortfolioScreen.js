import React, {Component} from 'react'
var ReactDOM = require('react-dom')
class PortfolioScreen extends Component {
  constructor(props) {
      super(props)
  }

  render() {
    return (
      <section className="section-portfolio section-content" page="portfolio">
          <div className="wrapper_title">
            <h2 className="title">portfolio</h2>
            <span>my best work</span>
          </div>
          <div className="container filter">
            <div id="portfolio_main"></div>
          </div>
      </section>
    )
  }
}
export default PortfolioScreen
