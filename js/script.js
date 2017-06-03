//accordion

var speed = "500";
var checkbox = $('input[type="checkbox"].title');

$(document).ready(function(){
  $('li.title').click(function(){
    $(this).next()
    .slideToggle(speed)
    .siblings('li.content').slideUp(speed);
    var img = $(this).children('img');
    $(img).toggleClass('rotate');
  });
});
