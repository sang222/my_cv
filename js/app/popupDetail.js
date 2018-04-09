import React, {Component} from 'react'
import Swiper from 'react-id-swiper';
var ReactDOM = require('react-dom')
import $ from 'jquery'


class PopupDetail extends Component {
  constructor(props) {
      super(props)
      this.goNext = this.goNext.bind(this)
      this.goPrev = this.goPrev.bind(this)
      this.rebuild = this.rebuild.bind(this)
      this.closePopup = this.closePopup.bind(this)
      this.swiper = null
  }

  goNext() {
    if (this.swiper) this.swiper.slideNext()
      console.log(this.swiper)
  }

  goPrev() {
    if (this.swiper) this.swiper.slidePrev()
      console.log(this.swiper)
  }

  rebuild() {
    //if (this.swiper) this.swiper.shouldSwiperUpdate(true)
    console.log('aaaa')
  }

  closePopup = () => {
    $('.close_popup').on('click', function() {
      $('body').removeClass('popup-opening')
    	$('.filter-content__popup').hide()
    })
    //this.rebuild()
  }

  render() {
    const params = {
      rebuildOnUpdate : true,
      effect: 'flip',
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    }
    const sliderItem = this.props.sliderItem
    return (
      <div style={{height: '100%'}}>
        <img src="images/close.svg" className="close_popup" alt="" onClick={this.closePopup} />
        <Swiper {...params}>
          {
            sliderItem.slider.map((slider) => {
                return (
                  <div className="swiper-slide">
                    <img src={slider.item} />
                  </div>
                );
            })
          }
        </Swiper>
        <div className="caption">
          <p>Project name: {sliderItem.title}</p>
          <p>Website: <a href={sliderItem.url} target="_blank">{sliderItem.content}</a> </p>
        </div>
      </div>
    );
  }
}

export default PopupDetail
