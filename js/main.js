<<<<<<< HEAD
// $(function () {
//   $('.slider').slick({
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     arrows: false,
//     dots: true,
//     responsive: [
//       {
//         breakpoint: 1175,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
          
//         },
     
//       },
//       {
//         breakpoint: 769,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
          
//         },
     
//       },]
//   });

//   $('.menu__burger').on('click', function () {
//     $('.menu__list').toggleClass('menu__list--active');
//   });
// });
=======
$(function () {
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1175,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $('.menu__burger').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });
});
>>>>>>> 0519c5257ebf2f7e4fe40c9a06523d333bc37faa
