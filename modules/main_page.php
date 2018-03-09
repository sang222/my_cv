<div class="main_page page-content">

  <div class="page-content__left">
    <h2>đặng quang sang</h2>
    <p>Front-End Developer</p>
    <div class="circle">
      <img src="images/avatar.jpg" alt="" />
    </div>
  </div>
  <div class="page-content__right">
    <div class="page-content__right--nav">
      <a class="active switch-page" goto="about">about</a>
      <a goto="portfolio" class="switch-page">portfolio</a>
      <a goto="strength" class="switch-page">strength</a>
      <a goto="contact" class="switch-page">contact</a>
    </div>
    <div class="page-content__right--content">
      <?php
        include ('child/about.php');
        include ('child/contact.php');
        include ('child/strength.php');
        include ('child/portfolio.php');
      ?>
    </div>
  </div>
</div>
