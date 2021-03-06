$(document).ready( function() {

// -------------- Reject IE Jquery

$.reject({

  reject : {
      all: false,
      msie: 9
  },
  display: ['firefox','chrome','safari'],
  imagePath: 'assets/images/'

});

// -------------- New Jquery

$.getJSON( "https://itunes.apple.com/us/rss/topalbums/limit=100/json", function(data) {
  console.log(data);

  var items = data.feed.entry;
  var arrayLength = items.length;

  for (var i = 0; i < arrayLength; i++) {
      console.log(items[i].link.attributes.href);

      $( "<div class='music-box col-lg-4 col-sm-6'>" +

      "<div class='music-box--inner clearfix'>" +

      "<div class='music-box--img'>" +
      "<img src=" + items[i]["im:image"][2].label + " alt=''>" +
      "</div>" +

      "<div class='music-box--info'>" +
      "<span class='header-album'>" + items[i]["im:name"].label + "</span>" +
      "<span class='header-name'>" + items[i]["im:artist"].label + "</span>" +
      "<span class='header-price'>" + items[i]["im:price"].label + "</span>" +
      "<a href=" + items[i].link.attributes.href + " class='cta-btn' target='_blank'>Get Now</a>" +
      "</div>" +

      "</div>" +

      "</div>" ).appendTo( ".main-container" );

  }
});

});
