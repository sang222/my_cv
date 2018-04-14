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
      <a class="active switch-page" goto="about">Giới thiệu</a>
      <a goto="portfolio" class="switch-page">portfolio</a>
      <a goto="resume" class="switch-page">lý lịch</a>
      <a goto="contact" class="switch-page">Liên hệ</a>
    </div>
    <nav class="nav-mobile visible-xs">
      <div class="nav-mobile__icon col-xs-6">
      </div>
      <div class="col-xs-6 text-right">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div class="page-content__right--nav col-xs-12">
        <a class="active switch-page" goto="about">Giới thiệu</a>
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
    <div id="popup_content" style="height: 100%"></div>
</div>
