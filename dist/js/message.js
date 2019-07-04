"use strict";

var APP_ID = 'pj6ds8WbAQaFMug7t28jYY9B-gzGzoHsz';
var APP_KEY = 'aI0cMRzGys0e21cRAYHxfo9T';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
var myForm = document.querySelector('#postMessageForm');
myForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var content = myForm.querySelector('input[name=content]').value;
  var username = myForm.querySelector('input[name=username]').value;
  var Message = AV.Object.extend('Message');
  var comment = new Message();
  comment.save({
    'username': username,
    'content': content
  }).then(function (object) {
    var li = document.createElement('li');
    li.innerText = "".concat(object.attributes.username, ":").concat(object.attributes.content);
    var commentList = document.querySelector('#commentList');
    commentList.appendChild(li);
    myForm.querySelector('input[name=content]').value = '';
  });
});
var query = new AV.Query('Message');
query.find().then(function (message) {
  var array = message.map(function (item) {
    return item.attributes;
  });
  array.forEach(function (item) {
    var li = document.createElement('li');
    li.innerText = "".concat(item.username, ":").concat(item.content); //`${}`这个写法还是第一次见

    var commentList = document.querySelector('#commentList');
    commentList.appendChild(li);
  });
}, function (error) {
  alert('提交失败，再试一次吧');
});