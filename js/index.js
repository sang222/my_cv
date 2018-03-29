import $ from 'jquery'
import '../sass/all.scss'

//Library
import '../vendor/bootstrap/js/bootstrap.min.js'
import '../js/lib/jquery.easing.min.js'
import '../js/lib/SplitText.min.js'
import '../js/lib/TweenMax.min.js'
import mixitup from 'mixitup'
import '../js/lib/masonry.pkgd.min.js'
import '../js/lib/lodash.core.js'
import 'jquery-mousewheel'
import '../js/lib/jquery.mCustomScrollbar.min.js'
import '../js/lib/jquery.mCustomScrollbar.concat.min.js'

//Custom js
require('../js/app/class.SiteMain')
require('../js/app/cls.filter')
require('../js/app/home')
require('../js/app/page-content')

SE.SiteMain.init()
SE.filter.init()
SE.home.init()
SE.page.init()

//test load image{
$(document).ready(function (){

});
