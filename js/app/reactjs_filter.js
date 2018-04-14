var React = require('react')
var ReactDOM = require('react-dom')

import items_json from '../../portfolio.json'
import PopupDetail from './popupDetail'


class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      active: '',
      json: items_json,
      limit_item: 6,
    };
  }
  componentDidUpdate() {
    this.open_Popup()
  }

  LoadMore = () => {
    this.setState({
      limit_item: this.state.limit_item + 6
    })
  }

  renderItems = () => { //animate
    let items = items_json;
    if (this.state.filter !== '') {
      items = items_json.filter(item => {
        return item.classes === this.state.filter;
      });
    }

    this.setState({
      json: items
    })
  }

  RenderItem() {
    return this.state.json.slice(0,this.state.limit_item).map((item) => {
      return(
        <div className="mix col-md-4 col-sm-4 col-xs-6 filter--content__item" data-ref="item" key={item.id}>
          <div className="item_content">
            <img alt="" src={item.image} />
            <div className="item_content--box">
              <h5>{item.title}</h5>
              <a className="open_popup" onClick={this.openPopup(item.id)} popup={item.id}>Bấm để xem chi tiết</a>
            </div>
          </div>
        </div>
      )
    })
  }

  applyFilter(filter) {
    this.setState({ filter }, this.renderItems);
  }

  isActive(active) {
    return ((active === this.state.filter) ? 'active' : '');
  }

  open_Popup() {
    $('.open_popup').on('click', function() {
  		$('body').addClass('popup-opening')
  		$('.filter-content__popup').show()
  	})
  }

  openPopup(itemID) {
    return ()=>{
      this.state.json.map((item) => {
        //console.log(itemID,item.id)
        if(item.id == itemID) {
            return ReactDOM.render(<PopupDetail sliderItem={item} />, document.getElementById("popup_content"));
        }
      })
    }
    this.open_Popup()
  }

  render() {
      return(
        <div className="portfolio_wrapper">
          <div className="row">
            <div className="col-md-12 text-center filter--nav">
              <nav className="nav-filter">
                <span type="button" className={this.isActive('')} onClick={this.applyFilter.bind(this, '')}>Tất cả</span>
                <span type="button" className={this.isActive('website')} onClick={this.applyFilter.bind(this, 'website')}>Website</span>
                <span type="button" className={this.isActive('banner')} onClick={this.applyFilter.bind(this, 'banner')}>Banner</span>
                <span type="button" className={this.isActive('emailing')} onClick={this.applyFilter.bind(this, 'emailing')}>Emailing</span>
              </nav>
            </div>
          </div>
          <div className="row filter--content" id="portfolio_item">
  						{this.RenderItem()}
          </div>
          {this.state.json.length >= 6 && this.state.limit_item < (this.state.json.length - 1) ?
            <div className="row row-loadmore">
              <div className="col-xs-12 text-center">
                  <a className="btn" onClick={this.LoadMore}>Xem thêm</a>
              </div>
            </div>
          : ''}
        </div>
      );
    }
}

ReactDOM.render(<Portfolio />, document.getElementById("portfolio_main"));
