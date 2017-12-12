const request = require('request');
const cheerio = require('cheerio');
const db = require("../models");
const os = require('os');

module.exports = {
  home: function(req, res){
    request("http://www.foxnews.com", function(err, response, html){

      var $ = cheerio.load(html);
      var articles = [];

      $('div.main.main-secondary div.collection-article-list div.article-list article').map(function(i, element){
        var title = $(element).children('div.info').children().children('h2').text();
        var imgSrc = $(element).children('div.m').children().children().children('img').data('src');
        var link = $(element).children('div.m').children('a').attr('href');
        if(title && imgSrc && link){
          if(link === undefined || link.charAt(0) === '/'){
            link = "http://www.foxnews.com"+link
          }
          articles.push({
            title: title,
            imgSrc: imgSrc,
            link:link
          });
        }
      });
      $('div.main.main-secondary div.collection-article-list ul.article-list article').map(function(i, element){
        // console.log($(element).children('div.m').children('a').attr('href'), '===========', i)
        var title = $(element).children('div.info').children().children('h2').text();
        var imgSrc = $(element).children('div.m').children().children().children('img').data('src');
        var link = $(element).children('div.m').children('a').attr('href');
        if(title && imgSrc && link){
          if(link === undefined || link.charAt(0) === '/'){
            link = "http://www.foxnews.com"+link
          }
          articles.push({
            title: title,
            imgSrc: imgSrc,
            link:link
          });
        }
      });
      db.Article.find()
      .then(function(dbArticles){
        res.render('home', {
          articles: articles,
          dbArticles: dbArticles
        });
      })
    })
  },
  entertainment: function(req, res){
    request("http://www.foxnews.com/entertainment.html", function(err, response, html){

      var $ = cheerio.load(html);
      var articles = [];

      $('div.collection-article-list div.article-list article').map(function(i, element){
        // console.log($(element).children('div.m').children('a').attr('href'), '===========', i)
        var title = $(element).children('div.info').children().children('h2').text();
        var imgSrc = $(element).children('div.m').children().children('a img').attr('src');
        var link = $(element).children('div.m').children('a').attr('href');
        var content = $(element).children('div.info').children('div.content').children().children('p a').text().substring(0,140);

        if(title && imgSrc && link || content){
          if(link === undefined || link.charAt(0) === '/' ){
            link = "http://www.foxnews.com"+link
          }
          articles.push({
            title: title,
            imgSrc: imgSrc,
            link: link,
            content: content + " ....."
          });
        }
      });
      $('div.collection-article-list ul.article-list article').map(function(i, element){
        // console.log($(element).children('div.m').children('a').attr('href'), '===========', i)
        var title = $(element).children('div.info').children().children('h2').text();
        var imgSrc = $(element).children('div.m').children().children('a img').attr('src');
        var link = $(element).children('div.m').children('a').attr('href');
        var content = $(element).children('div.info').children('div.content').children().children('p a').text().substring(0,140);
        if(title && imgSrc && link || content){
          if(link === undefined || link.charAt(0) === '/'){
            link = "http://www.foxnews.com"+link
          }
          articles.push({
            title: title,
            imgSrc: imgSrc,
            link: link,
            content: content + " ....."
          });
        }
      });
      res.render('home', {articles: articles});
    })
  },
  politics: function(req, res){
    request("http://www.foxnews.com/politics.html", function(err, response, html){

      var $ = cheerio.load(html);
      var articles = [];

      $('main.main-content div.collection-article-list ul.article-list article').map(function(i, element){
        var title = $(element).children('div.info').children().children('h2').text();
        var imgSrc = $(element).children('div.m').children().children('a img').attr('src');
        var link = $(element).children('div.m').children('a').attr('href');
        var content = $(element).children('div.info').children('div.content').children().children('p a').text().substring(0,140);
        if(title && imgSrc && link){
          if(link === undefined || link.charAt(0) === '/'){
            link = "http://www.foxnews.com"+link
          }
          articles.push({
            title: title,
            imgSrc: imgSrc,
            link:link,
            content: content+" ....."
          });
        }
      });
      $('main.main-content div.collection-article-list div.article-list article').map(function(i, element){
        // console.log($(element).children('div.m').children('a').attr('href'), '===========', i)
        var title = $(element).children('div.info').children().children('h2').text();
        var imgSrc = $(element).children('div.m').children().children('a img').attr('src');
        var link = $(element).children('div.m').children('a').attr('href');
        var content = $(element).children('div.info').children('div.content').children().children('p a').text().substring(0,140);
        if(title && imgSrc && link){
          if(link === undefined || link.charAt(0) === '/'){
            link = "http://www.foxnews.com"+link
          }
          articles.push({
            title: title,
            imgSrc: imgSrc,
            link:link,
            content: content+" ....."
          });
        }
      });
      res.render('home', {articles: articles});
    })
  },
  food: function(req, res){
    request("http://www.foxnews.com/food-drink.html", function(err, response, html){

      var $ = cheerio.load(html);
      var articles = [];

      $('main.main-content div.collection-article-list ul.article-list article').map(function(i, element){
        // console.log($(element).children('div.m').children('a').attr('href'), '===========', i)
        var title = $(element).children('div.info').children().children('h2').text();
        var imgSrc = $(element).children('div.m').children().children('a img').attr('src');
        var link = $(element).children('div.m').children('a').attr('href');
        var content = $(element).children('div.info').children('div.content').children().children('p a').text().substring(0,140);
        if(title && imgSrc && link){
          if(link === undefined || link.charAt(0) === '/'){
            link = "http://www.foxnews.com"+link
          }
          articles.push({
            title: title,
            imgSrc: imgSrc,
            link:link,
            content: content+' .....'
          });
        }
      });
      $('main.main-content div.collection-article-list div.article-list article').map(function(i, element){
        // console.log($(element).children('div.m').children('a').attr('href'), '===========', i)
        var title = $(element).children('div.info').children().children('h2').text();
        var imgSrc = $(element).children('div.m').children().children('a img').attr('src');
        var link = $(element).children('div.m').children('a').attr('href');
        var content = $(element).children('div.info').children('div.content').children().children('p a').text().substring(0,140);
        if(title && imgSrc && link){
          if(link === undefined || link.charAt(0) === '/'){
            link = "http://www.foxnews.com"+link
          }
          articles.push({
            title: title,
            imgSrc: imgSrc,
            link:link,
            content: content+' .....'
          });
        }
      });
      res.render('home', {articles: articles});
    })
  },
  technology: function(req, res){
    request("http://www.foxnews.com/tech.html", function(err, response, html){

      var $ = cheerio.load(html);
      var articles = [];

      $('main.main-content div.collection-article-list ul.article-list article').map(function(i, element){
        // console.log($(element).children('div.m').children('a').attr('href'), '===========', i)
        var title = $(element).children('div.info').children().children('h2').text();
        var imgSrc = $(element).children('div.m').children().children('a img').attr('src');
        var link = $(element).children('div.m').children('a').attr('href');
        var content = $(element).children('div.info').children('div.content').children().children('p a').text().substring(0,140);
        if(title && imgSrc && link){
          if(link === undefined || link.charAt(0) === '/'){
            link = "http://www.foxnews.com"+link
          }
          articles.push({
            title: title,
            imgSrc: imgSrc,
            link:link,
            content: content+' .....'
          });
        }
      });
      $('main.main-content div.collection-article-list div.article-list article').map(function(i, element){
        // console.log($(element).children('div.m').children('a').attr('href'), '===========', i)
        var title = $(element).children('div.info').children().children('h2').text();
        var imgSrc = $(element).children('div.m').children().children('a img').attr('src');
        var link = $(element).children('div.m').children('a').attr('href');
        var content = $(element).children('div.info').children('div.content').children().children('p a').text().substring(0,140);
        if(title && imgSrc && link){
          if(link === undefined || link.charAt(0) === '/'){
            link = "http://www.foxnews.com"+link
          }
          articles.push({
            title: title,
            imgSrc: imgSrc,
            link:link,
            content: content+' .....'
          });
        }
      });
      res.render('home', {articles: articles});
    })
  },
  world: function(req, res){
    request("http://www.foxnews.com/world.html", function(err, response, html){

      var $ = cheerio.load(html);
      var articles = [];

      $('main.main-content div.collection-article-list div.article-list.content article').map(function(i, element){
        // console.log($(element).children('div.m').children('a').attr('href'), '===========', i)
        var title = $(element).children('div.info').children().children('h2').text();
        var imgSrc = $(element).children('div.m').children().children('a img').attr('src');
        var link = $(element).children('div.m').children('a').attr('href');
        var content = $(element).children('div.info').children('div.content').children().children('p a').text().substring(0,140);
        if(title && imgSrc && link){
          if(link === undefined || link.charAt(0) === '/'){
            link = "http://www.foxnews.com"+link
          }
          articles.push({
            title: title,
            imgSrc: imgSrc,
            link:link,
            content: content+' .....'
          });
        }
      });
      $('main.main-content div.collection-article-list ul.article-list.content article').map(function(i, element){
        // console.log($(element).children('div.m').children('a').attr('href'), '===========', i)
        var title = $(element).children('div.info').children().children('h2').text();
        var imgSrc = $(element).children('div.m').children().children('a img').attr('src');
        var link = $(element).children('div.m').children('a').attr('href');
        var content = $(element).children('div.info').children('div.content').children().children('p a').text().substring(0,140);
        if(title && imgSrc && link){
          if(link === undefined || link.charAt(0) === '/'){
            link = "http://www.foxnews.com"+link
          }
          articles.push({
            title: title,
            imgSrc: imgSrc,
            link:link,
            content: content+' .....'
          });
        }
      });
      res.render('home', {articles: articles});
    })
  },
  science: function(req, res){
    request("http://www.foxnews.com/science.html", function(err, response, html){

      var $ = cheerio.load(html);
      var articles = [];

      $('main.main-content div.collection-article-list ul.article-list article').map(function(i, element){
        // console.log($(element).children('div.m').children('a').attr('href'), '===========', i)
        var title = $(element).children('div.info').children().children('h2').text();
        var imgSrc = $(element).children('div.m').children().children('a img').attr('src');
        var link = $(element).children('div.m').children('a').attr('href');
        var content = $(element).children('div.info').children('div.content').children().children('p a').text().substring(0,140);
        if(title && imgSrc && link){
          if(link === undefined || link.charAt(0) === '/'){
            link = "http://www.foxnews.com"+link
          }
          articles.push({
            title: title,
            imgSrc: imgSrc,
            link:link,
            content: content+' .....'
          });
        }
      });
      $('main.main-content div.collection-article-list div.article-list article').map(function(i, element){
        // console.log($(element).children('div.m').children('a').attr('href'), '===========', i)
        var title = $(element).children('div.info').children().children('h2').text();
        var imgSrc = $(element).children('div.m').children().children('a img').attr('src');
        var link = $(element).children('div.m').children('a').attr('href');
        var content = $(element).children('div.info').children('div.content').children().children('p a').text().substring(0,140);
        if(title && imgSrc && link){
          if(link === undefined || link.charAt(0) === '/'){
            link = "http://www.foxnews.com"+link
          }
          articles.push({
            title: title,
            imgSrc: imgSrc,
            link:link,
            content: content+' .....'
          });
        }
      });
      res.render('home', {articles: articles});
    })
  },
  health: function(req, res){
    request("http://www.foxnews.com/health.html", function(err, response, html){

      var $ = cheerio.load(html);
      var articles = [];

      $('main.main-content div.collection-article-list div.article-list article').map(function(i, element){
        // console.log($(element).children('div.m').children('a').attr('href'), '===========', i)
        var title = $(element).children('div.info').children().children('h2').text();
        var imgSrc = $(element).children('div.m').children().children('a img').attr('src');
        var link = $(element).children('div.m').children('a').attr('href');
        var content = $(element).children('div.info').children('div.content').children().children('p a').text().substring(0,140);
        if(title && imgSrc && link){
          if(link === undefined || link.charAt(0) === '/'){
            link = "http://www.foxnews.com"+link
          }
          articles.push({
            title: title,
            imgSrc: imgSrc,
            link:link,
            content: content+' .....'
          });
        }
      });
      $('main.main-content div.collection-article-list ul.article-list article').map(function(i, element){
        // console.log($(element).children('div.m').children('a').attr('href'), '===========', i)
        var title = $(element).children('div.info').children().children('h2').text();
        var imgSrc = $(element).children('div.m').children().children('a img').attr('src');
        var link = $(element).children('div.m').children('a').attr('href');
        var content = $(element).children('div.info').children('div.content').children().children('p a').text().substring(0,140);
        if(title && imgSrc && link){
          if(link === undefined || link.charAt(0) === '/'){
            link = "http://www.foxnews.com"+link
          }
          articles.push({
            title: title,
            imgSrc: imgSrc,
            link:link,
            content: content+' .....'
          });
        }
      });

      res.render('home', {articles: articles});
    })
  },
  trending: function(req, res){
    db.Article.find()
    .then(function(dbArticles){
      res.render('partials/trending', {
        dbArticles: dbArticles
      })
    });
  },
  addComment: function(req, res) {
    db.Article.update({_id: req.body.id}, {$push: {comments: req.body}})
    .then(results => {
      res.render('partials/comment', {
        comment: req.body,
        layout: false
      })
    })
  }

}
