//var imgPath;
 function galleryBuilder(imgStr,type){
    
    var weddingImgs =`<div class="row">
    <div class="col-sm-6 col-md-4 col-lg-3 gallery-item">
      <a href="#" data-toggle="modal" data-target="#imageModal" data-image="images/wed1.jpg">
        <img src="${imgStr}" alt="Wedding Photo 1">
        <div class="overlay">Wedding Photo 1</div>
      </a>
    </div>
    <div class="col-sm-6 col-md-4 col-lg-3 gallery-item">
        <a href="#" data-toggle="modal" data-target="#imageModal" data-image="images/wed4.jpg">
          <img src="images/wed4.jpg" alt="Wedding Photo 4">
          <div class="overlay">Wedding Photo 4</div>
        </a>
      </div>
    <div class="col-sm-6 col-md-4 col-lg-3 gallery-item">
      <a href="#" data-toggle="modal" data-target="#imageModal" data-image="images/wed2.jpg">
        <img src="images/wed2.jpg" alt="Wedding Photo 2">
        <div class="overlay">Wedding Photo 2</div>
      </a>
    </div>

    <div class="col-sm-6 col-md-4 col-lg-3 gallery-item">
      <a href="#" data-toggle="modal" data-target="#imageModal" data-image="images/wed3.jpg">
        <img src="images/wed3.jpg" alt="Wedding Photo 3">
        <div class="overlay">Wedding Photo 3</div>
      </a>
    </div>
    <div class="col-sm-6 col-md-4 col-lg-3 gallery-item">
      <a href="#" data-toggle="modal" data-target="#imageModal" data-image="images/wed4.jpg">
        <img src="images/wed4.jpg" alt="Wedding Photo 4">
        <div class="overlay">Wedding Photo 4</div>
      </a>
    </div>
    <div class="col-sm-6 col-md-4 col-lg-3 gallery-item">
      <a href="#" data-toggle="modal" data-target="#imageModal" data-image="images/wed5.jpg">
        <img src="images/wed4.jpg" alt="Wedding Photo 5">
        <div class="overlay">Wedding Photo 5</div>
      </a>
    </div>
    <div class="col-sm-6 col-md-4 col-lg-3 gallery-item">
        <a href="#" data-toggle="modal" data-target="#imageModal" data-image="images/wed3.jpg">
          <img src="images/wed3.jpg" alt="Wedding Photo 3">
          <div class="overlay">Wedding Photo 3</div>
        </a>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3 gallery-item">
        <a href="#" data-toggle="modal" data-target="#imageModal" data-image="images/wed3.jpg">
          <img src="images/wed3.jpg" alt="Wedding Photo 3">
          <div class="overlay">Wedding Photo 3</div>
        </a>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3 gallery-item">
        <a href="#" data-toggle="modal" data-target="#imageModal" data-image="images/wed3.jpg">
          <img src="images/wed3.jpg" alt="Wedding Photo 3">
          <div class="overlay">Wedding Photo 3</div>
        </a>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3 gallery-item">
        <a href="#" data-toggle="modal" data-target="#imageModal" data-image="images/wed3.jpg">
          <img src="images/wed3.jpg" alt="Wedding Photo 3">
          <div class="overlay">Wedding Photo 3</div>
        </a>
      </div>
    <!-- Add more images as needed -->
  </div>`;
  var streetImgs =`<div class="row">
    <div class="col-sm-6 col-md-4 col-lg-3 gallery-item">
      <a href="#" data-toggle="modal" data-target="#imageModal" data-image="images/wed1.jpg">
        <img src="images/srt1.png" alt="Wedding Photo 1">
        <div class="overlay">Wedding Photo 1</div>
      </a>
    </div>
    <div class="col-sm-6 col-md-4 col-lg-3 gallery-item">
        <a href="#" data-toggle="modal" data-target="#imageModal" data-image="images/wed4.jpg">
          <img src="images/srt2.png" alt="Wedding Photo 4">
          <div class="overlay">Wedding Photo 4</div>
        </a>
      </div>
    <div class="col-sm-6 col-md-4 col-lg-3 gallery-item">
      <a href="#" data-toggle="modal" data-target="#imageModal" data-image="images/wed2.jpg">
        <img src="images/srt2.png" alt="Wedding Photo 2">
        <div class="overlay">Wedding Photo 2</div>
      </a>
    </div>

    <div class="col-sm-6 col-md-4 col-lg-3 gallery-item">
      <a href="#" data-toggle="modal" data-target="#imageModal" data-image="images/wed3.jpg">
        <img src="images/srt3.png" alt="Wedding Photo 3">
        <div class="overlay">Wedding Photo 3</div>
      </a>
    </div>
    <div class="col-sm-6 col-md-4 col-lg-3 gallery-item">
      <a href="#" data-toggle="modal" data-target="#imageModal" data-image="images/wed4.jpg">
        <img src="images/srt4.png" alt="Wedding Photo 4">
        <div class="overlay">Wedding Photo 4</div>
      </a>
    </div>
    <div class="col-sm-6 col-md-4 col-lg-3 gallery-item">
      <a href="#" data-toggle="modal" data-target="#imageModal" data-image="images/wed5.jpg">
        <img src="images/srt3.png" alt="Wedding Photo 5">
        <div class="overlay">Wedding Photo 5</div>
      </a>
    </div>
    <div class="col-sm-6 col-md-4 col-lg-3 gallery-item">
        <a href="#" data-toggle="modal" data-target="#imageModal" data-image="images/wed3.jpg">
          <img src="images/wed3.jpg" alt="Wedding Photo 3">
          <div class="overlay">Wedding Photo 3</div>
        </a>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3 gallery-item">
        <a href="#" data-toggle="modal" data-target="#imageModal" data-image="images/wed3.jpg">
          <img src="images/wed3.jpg" alt="Wedding Photo 3">
          <div class="overlay">Wedding Photo 3</div>
        </a>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3 gallery-item">
        <a href="#" data-toggle="modal" data-target="#imageModal" data-image="images/wed3.jpg">
          <img src="images/wed3.jpg" alt="Wedding Photo 3">
          <div class="overlay">Wedding Photo 3</div>
        </a>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3 gallery-item">
        <a href="#" data-toggle="modal" data-target="#imageModal" data-image="images/wed3.jpg">
          <img src="images/wed3.jpg" alt="Wedding Photo 3">
          <div class="overlay">Wedding Photo 3</div>
        </a>
      </div>
    <!-- Add more images as needed -->
  </div>`;
  if(type==1)
    return weddingImgs;
   if(type==2)
    return streetImgs;
}
