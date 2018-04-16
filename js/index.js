import $ from 'jquery'
import '../sass/all.scss'

//Library
import '../vendor/bootstrap/js/bootstrap.min.js'
import '../js/lib/jquery.easing.min.js'
import '../js/lib/TweenMax.min.js'
import 'jquery-mousewheel'
import '../js/lib/jquery.mCustomScrollbar.min.js'
import '../js/lib/jquery.mCustomScrollbar.concat.min.js'
import '../js/app/reactjs_filter.js'
import validate from 'jquery-validation'

//Custom js
require('../js/app/class.SiteMain')
require('../js/app/home')
require('../js/app/page-content')
require('../js/app/submitForm')

SE.SiteMain.init()
SE.form.init()
SE.home.init()
SE.page.init()
