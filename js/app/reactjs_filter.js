var React = require('react');
var ReactDOM = require('react-dom');
var mixitup = require('mixitup')

class Filter_btn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      items: [
        {
          id: 1,
          title: 'Papyrus',
          type: 'ecommerce',
        },
        {
          id: 2,
          title: 'Clinton Foundation',
          type: 'intranet'
        },
        {
          id: 3,
          title: 'Maddie',
          type: 'ecommerce',
        },
        {
          id: 4,
          title: 'WCHN',
          type: 'intranet',
        },
      ],
    };
  }


  renderItems() {
    let items = this.state.items;
    if (this.state.filter !== '') {
      items = this.state.items.filter(item => {
        return item.type === this.state.filter;
      });
    }
    // mixer would really be part of the component (this.mixer)
    window.mixer.dataset(items);
  }

  applyFilter(filter) {
    this.setState({ filter }, this.renderItems);
  }

  render() {
      return(
        <div className="row">
        <div className="col-md-12 text-center filter--nav">
          <nav className="nav-filter">
          <button type="button" onClick={this.applyFilter.bind(this, '')}>Show all</button>
          <button type="button" onClick={this.applyFilter.bind(this, 'ecommerce')}>Show ecommerce</button>
          <button type="button" onClick={this.applyFilter.bind(this, 'intranet')}>Show intranets</button>
          </nav>
        </div>
      </div>
      );
  }
}

ReactDOM.render(<Filter_btn />, document.getElementById("filters_btn"))

/*class Filter_item extends React.Component {
  render() {
    return (
      <div className="row filter--content">
        <div className="mix col-md-4 col-sm-4 col-xs-6 filter--content__item all website">
          <div className="item_content">
            <img alt="" src="images/STK/logo-STK.svg" />
            <div className="item_content--box">
              <h5>STK</h5>
              <a className="open_popup">Click to view detail</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Filter_item />, document.getElementById("filters_item"))*/

const renderItem = item => {
  return `<li data-ref="item">${item.title}</li>`;
};

const mixer = mixitup(document.getElementById('filters_item'), {
  data: { uidKey: 'id' },
  render: { target: renderItem },
  selectors: {
    target: '[data-ref="item"]',
  }
})
window.mixer = mixer
