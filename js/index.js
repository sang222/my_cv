import $ from 'jquery'
import '../sass/all.scss'

//Library
import '../vendor/bootstrap/js/bootstrap.min.js'
import '../js/lib/jquery.easing.min.js'
import '../js/lib/TweenMax.min.js'
var _ = require('lodash');
import 'jquery-mousewheel'
import '../js/lib/jquery.mCustomScrollbar.min.js'
import '../js/lib/jquery.mCustomScrollbar.concat.min.js'
import '../js/app/reactjs_filter.js'


//Custom js
require('../js/app/class.SiteMain')
//require('../js/app/cls.filter')
require('../js/app/home')
require('../js/app/page-content')
//require('../js/app/angular_main')

SE.SiteMain.init()
//SE.filter.init()
SE.home.init()
SE.page.init()

//test load image{
$(document).ready(function (){
});
