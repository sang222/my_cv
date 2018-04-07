var React = require('react');
var ReactDOM = require('react-dom');
var mixitup = require('mixitup')

import items_json from '../../portfolio.json'

console.log(items_json.length)


class Filter_btn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      active: '',
      limit_item: 6
    };
  }

  LoadMore = () => {
    this.setState({
      limit_item: this.state.limit_item + 6
    })
  }

  renderItems() { //animate
    let items = items_json;
    if (this.state.filter !== '') {
      items = items_json.filter(item => {
        return item.classes === this.state.filter;
      });
    }
    console.log(items)

    // mixer would really be part of the component (this.mixer)
    //window.mixer.dataset(items);
  }

  applyFilter(filter) {
    this.setState({ filter }, this.renderItems);
  }

  isActive(active) {
    return ((active === this.state.filter) ? 'active' : '');
  }

  RenderItem() {
    return items_json.slice(0,this.state.limit_item).map((item) => {
      return(
        <div className="mix col-md-4 col-sm-4 col-xs-6 filter--content__item" data-ref="item" key={item.title}>
          <div className="item_content">
            <img alt="" src={item.image} />
            <div className="item_content--box">
              <h5>{item.title}</h5>
              <a className="open_popup">Click to view detail</a>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
      return(
        <div className="portfolio_wrapper">
          <div className="row">
            <div className="col-md-12 text-center filter--nav">
              <nav className="nav-filter">
                <span type="button" className={this.isActive('')} onClick={this.applyFilter.bind(this, '')}>All</span>
                <span type="button" className={this.isActive('website')} onClick={this.applyFilter.bind(this, 'website')}>Website</span>
                <span type="button" className={this.isActive('banner')} onClick={this.applyFilter.bind(this, 'banner')}>Banner</span>
                <span type="button" className={this.isActive('emailing')} onClick={this.applyFilter.bind(this, 'emailing')}>Emailing</span>
              </nav>
            </div>
          </div>
          <div className="row filter--content">
            {this.RenderItem()}
          </div>
          {items_json.length >= 6 && this.state.limit_item < 18 ?
            <div className="row row-loadmore">
              <div className="col-xs-12 text-center">
                  <a className="btn" onClick={this.LoadMore}>Load more</a>
              </div>
            </div>
          : ''}
        </div>
      );
    }
}

ReactDOM.render(<Filter_btn />, document.getElementById("portfolio_main"))
