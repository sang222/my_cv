<div class="main_page page-content">

  <div class="page-content__left">
    <h2>đặng quang sang</h2>
    <p>Front-End Developer</p>
    <div class="circle">
      <img src="images/avatar.jpg" alt="" />
    </div>
  </div>
  <div class="page-content__right">
    <div class="page-content__right--nav hidden-xs">
      <a class="active switch-page" goto="about">about</a>
      <a goto="portfolio" class="switch-page">portfolio</a>
      <a goto="resume" class="switch-page">Lý lịch</a>
      <a goto="contact" class="switch-page">Liên hệ</a>
    </div>
    <nav class="nav-mobile visible-xs">
      <div class="nav-mobile__icon col-xs-6">
      </div>
      <div class="col-xs-6 text-right">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div class="page-content__right--nav col-xs-12">
        <a class="active switch-page" goto="about">about</a>
        <a goto="portfolio" class="switch-page">portfolio</a>
        <a goto="resume" class="switch-page">Lý lịch</a>
        <a goto="contact" class="switch-page">Liên hệ</a>
      </div>
    </nav>
    <div class="page-content__right--content">
        <?php
          include ('child/about.php');
          include ('child/contact.php');
          include ('child/resume.php');
          include ('child/portfolio.php');
        ?>
    </div>

  </div>
</div>

<div class="filter-content__popup popup">
  <img src="images/close.svg" class="close_popup" alt="" onclick="SE.SiteMain.close_popup()">
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="images/STK/img1.png" alt="">
      </div>
      <div class="swiper-slide">
        <img src="images/STK/img2.png" alt="">
      </div>
    </div>
    <div class="caption">
      <p>Project name: STK</p>
      <p>Website: <a href="http://www.tourneeminerale.be" target="_blank">tourneeminerale.be</a> </p>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
    <!-- Add Arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</div>
