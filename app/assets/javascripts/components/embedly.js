$(".blog-content-button").on('click', function(){
  event.preventDefault();
  var url = event.target.href;
  var encodedUrl = encodeURIComponent(url);
  var requestUrl = "http://api.embed.ly/1/extract?key=4d990bca1808406aa35f798781bc2c9b&url=" + encodedUrl;

  $.ajax({
    url: requestUrl
  }).success(function(data) {
    self.data = data;
    var display = data.content || data.media.html || data.description;
    var htmlTitle = "<div class='embedly-title'><h1>" + data.title + "</h1></div>";
    var content = htmlTitle + "<div class='embedly-content'>" + display + "</div>";
    $('.blog-content').empty();
    $('.blog-content').append(content);
    $('html, body').animate({
        scrollTop: $(".blog-content").offset().top
    }, 2000);
  }).error(function(data) {
    var errorMessage = '<p class="ajax-error">Content not found, please try again. Be sure to use the full url like this: "http://www.slovenia-trips.com/eng/rock-climbing/trip/1061/Trenta"</p>';
    $('.blog-content').empty();
    $('.blog-content').append(errorMessage);
     $('html, body').animate({
        scrollTop: $(".ajax").offset().top
    }, 2000);
  });
});
