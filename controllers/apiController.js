const express = require("express");
const db = require("../models");



module.exports = {
  add: function(req, res){
    db.Article.create({
      title: req.body.title.trim(),
      imgSrc: req.body.imgSrc.trim(),
      comments:
      {
        user: req.body.user,
        body: req.body.commentBody.trim(),
        date: req.body.commentDate
      }
    }).then(function(dbArticle){
      if(dbArticle){
        res.json(true)
      }
    })
  },
  addComment: function(req, res){
    db.Article.update({_id: req.body.id}, {$push: {comments: req.body}})
    .then(results => {
    })
  },
  findAll: function(req, res){
    db.Article.find().then(function(dbArticles){
      res.json(dbArticles)
    })
  },
}
