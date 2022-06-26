$(document).ready(function(){

  let isOpen = false;

  $('.js-header-btn').on('click', function(){
    if (isOpen) {
      $('.js-menu').slideUp();
      isOpen = false;
    } else {
      $('.js-menu').slideDown();
      isOpen = true;
    }
  });


  // FAQ
  let prevFaqBtn;

  $('.js-faq-btn').on('click', function(){

    if (this === prevFaqBtn) {
      $(this).toggleClass('open');
      $(this).next().slideToggle();
    } else {
      prevFaqBtn = this;
      $('.js-faq-btn').next().slideUp();
      $('.js-faq-btn').removeClass('open');
      $(this).next().slideDown();
      $(this).addClass('open');
    }
  });



  // Табы в контактах
  const activeClass = 'active';
  const tabLinksClass = '.js-tabs-link';
  const $tabLinks = $(tabLinksClass);
  const $tabsContent = $('.js-contacts-content');

  $tabLinks.on('click', function(event){
    event.preventDefault();

    $tabLinks.removeClass(activeClass);
    $(this).addClass(activeClass);

    let index = $(this).index(tabLinksClass);

    $tabsContent.removeClass(activeClass);
    $tabsContent.eq(index).addClass(activeClass);
  });


  // Фильтр в работах
  $('.js-filter-link').on('click', function(event){
    event.preventDefault();
    let dataFilter = $(this).data('filter');

    $('.js-filter-link').removeClass('active');
    $(this).addClass('active');

    if (dataFilter === 'all') {
      $('.js-works-item').show();

      return;
    }

    $('.js-works-item').each(function() {
      let dataType = $(this).data('type');
      console.log(dataType);

      if (dataType === dataFilter) {
        $(this).show();

        return;
      }

      $(this).hide();
    });
  });


  // карусель

  $('.js-carousel').slick();


  // ajax запрос отзывов
  $('.js-review-btn').on('click', function() {
    $(this).text('...');
    $(this).attr('disabled', true);

    $.ajax({
      type: 'POST',
      url: '../jsons/reviews.json',
      data: 'count=2&test=trulala',
      success: function(res) {
        let htmlString = createHtmlString(res.reviews);
        addToPage(htmlString);
        $('.js-review-btn').text('Ещё отзывы');
        $('.js-review-btn').removeAttr('disabled');
      }, 
      error: function() {
        console.log('Чет не так');
      }
    });
  });

  function createHtmlString(reviewsArray) {
    let result = '';

    reviewsArray.forEach(function(item){
      result = result + `<div class="reviews-item">
        <div class="review">
          <div class="review-photo">
            <img src="${item.imgUrl}" alt="${item.imgAlt}" class="review-pic">
          </div>
          <div class="review-content">
            <strong class="review-name">${item.name}</strong>
            <blockquote class="review-quote">“${item.text}”</blockquote>
          </div>
        </div>
      </div>`;
    });

    return result;
  }

  function addToPage(string) {
    $('.js-reviews-list').append(string);
  }

});
