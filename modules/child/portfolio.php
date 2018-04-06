<section class="section-portfolio section-content" page="portfolio">
    <div class="wrapper_title">
      <h2 class="title">portfolio</h2>
      <span>my best work</span>
    </div>
    <div class="container filter" ng-app="repeat-item">
      <div class="row">
        <div class="col-md-12 text-center filter--nav">
          <nav class="nav-filter">
            <span class="mixitup-control-active" data-filter="all">All</span>
            <span data-filter=".website">Website</span>
            <span data-filter=".banner">Banner</span>
            <span data-filter=".emailing">Emailing</span>
          </nav>
        </div>
      </div>
      <div class="row filter--content" ng-controller="repeat_all" mix-it-up>
        <div class="mix col-md-4 col-sm-4 col-xs-6 filter--content__item all {{item.classes}}" ng-repeat="item in data">
          <div class="item_content">
            <img alt="" src={{item.image}}>
            <div class="item_content--box">
              <h5>{{item.title}}</h5>
              <a class="open_popup">Click to view detail</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row row-loadmore">
        <div class="col-xs-12 text-center">
            <a href="#" class="btn">Load more</a>
        </div>
      </div>
    </div>
</section>
