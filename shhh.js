let slider = tns({
   container: "#sliderMembri",
   items: 3,
   speed: 200,
   autoplay: true,
   autoplayHoverPause: false,
   autoplayTimeout: 2000,
   autoplayText: ["▶", "❚❚"],
   swipeAngle: 10,
   controls: false,
   autoplayButtonOutput: false,
   responsive: {
      1200: {
         items: 3,
         gutter: 20,
      },
      740: {
         items: 2,
         gutter: 20,
      },
      1: {
         items: 1,
      },
   },
   nav: true,
   navPosition: "bottom",
   navAsThumbnails: true,
   touch: true,
   arrowKeys: true,
   mouseDrag: true,
});
