

document.addEventListener('DOMContentLoaded', function() {
    var carousel = document.querySelectorAll('.carousel');
    var carouselOptions = {
        fullWidth: true,
        indicators: true,
        noWrap: true
    }
    var selects = document.querySelectorAll('select');
    var selectsOptions = {};

    var elems = document.querySelectorAll('.sidenav');
    
    M.Sidenav.init(elems);
    M.FormSelect.init(selects, selectsOptions);
    M.Carousel.init(carousel, carouselOptions);
  });