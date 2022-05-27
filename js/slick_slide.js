$(".header-content-img").slick({
    draggable: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: false,
    asNavFor: ".header-content-img-tab",
  });
  $(".header-content-img-tab").slick({
    slidesToShow: 3,
    asNavFor: ".header-content-img",
    dots: false,
    centerMode: true,
    arrows:false,
    infinite: false,
    focusOnSelect: true,
    draggable: false,
  });