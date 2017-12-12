$(document).ready(function(){

  $('form.trendingForm').on('submit', function(event){
    event.preventDefault();
    var trendingArticle = {};
    var date = new Date(Date.now()).toLocaleString('en-us', {weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', year: 'numeric'});
    trendingArticle.title = $(this).children('button').data('title').trim();
    trendingArticle.imgSrc = $(this).children('button').data('imgsrc').trim();
    trendingArticle.user = $(this).children('.user').val().trim();
    trendingArticle.commentBody = $(this).children('.commentInput').val().trim();
    trendingArticle.commentDate = date;

    $.ajax({
      url: '/add',
      type: 'POST',
      data: trendingArticle
    }).then(function(result){
      if(result){
        window.location = ('/trending');
      }
    });
  });

  $('.viewComments').on('click', function(){
    if($(this).parent().children('.commentCard').css('display') === 'block'){
      $(this).parent().children('.commentCard').css('display', 'none')
    }
    else {
      $(this).parent().children('.commentCard').css('display', 'block')
    }
  });

  $('form.commentForm').on('submit', function(event) {
    var self = $(this);
    event.preventDefault();
    var comment = {};
    var date = new Date(Date.now()).toLocaleString('en-us', {weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', year: 'numeric'});
    comment.user = $(this).children().children('input.user').val().trim();
    comment.body = $(this).children().children('input.body').val().trim();
    comment.date = date;
    comment.id = $(this).data('id');

    $.ajax({
      url: '/addComment',
      type: 'POST',
      data: comment
    }).then(function(result){
      if(result){
        $(self).siblings('.commentList').append(result)
        $(self).children().children('input.user').val('');
        $(self).children().children('input.body').val('');
      }
    });
  })

});
