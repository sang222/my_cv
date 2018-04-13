<section class="section-contact section-content" page="contact">
      <div class="wrapper_title">
        <h2 class="title">Liên hệ</h2>
        <span>Liên Lạc</span>
      </div>
      <div class="row">
        <div class="col-md-6">
          <h2 class="title_sub">Thông tin liên hệ</h2>
          <span class="address"><i class="fa fa-map-marker" aria-hidden="true"></i> Dĩ An, Bình Dương</span>
          <span class="mail"><i class="fa fa-envelope-o" aria-hidden="true"></i>quangsang222@gmail.com</span>
          <span class="phone"><i class="fa fa-phone" aria-hidden="true"></i>0967150928</span>
        </div>
        <div class="col-md-6">
          <h2 class="title_sub">Liên hệ</h2>
          <form id="form" method="POST" action="mailer.php">
            <div class="form-group">
              <i class="fa fa-user" aria-hidden="true"></i>
              <input type="text" class="form-control" name="name" value="aaa" placeholder="Họ tên..."/>
            </div>
            <div class="form-group">
              <i class="fa fa-envelope-o" aria-hidden="true"></i>
              <input type="email" class="form-control" name="email" placeholder="Địa chỉ Email" />
            </div>
            <div class="form-group">
              <i class="fa fa-comment" aria-hidden="true"></i>
              <textarea name="message" rows="8" class="form-control" placeholder="Tin nhắn"></textarea>
            </div>
            <a class="btn" type="submit" id="submit" />Gửi</a>
          </form>
          <script type="text/javascript">

          </script>
          <?php
        			var_dump($_POST);
        			echo("First name: " . $_POST['name'] . "<br />\n");
        			echo("Last name: " . $_POST['email'] . "<br />\n");
        			echo("tin nhắn: " . $_POST['message'] . "<br />\n");
        	?>
        </div>
      </div>
</section>
