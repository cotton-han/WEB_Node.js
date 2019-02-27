var http = require('http');
//var fs = require('fs');
var url = require('url');
var qs = require('querystring');

//var path = require('path'); //입력보안
var template = require('./lib/template.js'); //사용자 정의 모듈
//var sanitizeHtml = require('sanitize-html'); //출력보안

var db = require('./lib/db.js');
var topic = require('./lib/topic');
var author = require('./lib/author');

var app = http.createServer(function(request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
  if (pathname === '/') {
    // WEB,CSS,HTML,JavaScript를 눌렀을때 (create링크는 여기에 포함되지 않음)
    // http://localhost:3000/craete 는 pathname이 /create
    if (queryData.id === undefined) { //CSS,HTML,JavaScript를 눌렀을때(query가 있기 때문)
      topic.home(request, response);
    } else { // 본문 상세 보기
      topic.page(request, response);
    }
  } else if (pathname === '/create') {
    topic.create(request, response);
  } else if (pathname === '/create_process') {
    topic.create_process(request, response);
  } else if (pathname === '/update') {
    topic.update(request, response);
  } else if (pathname === '/update_process') {
    topic.update_process(request, response);
  } else if (pathname === '/delete_process') {
    topic.delete_process(request, response);
  } else if (pathname === '/author') {
    author.home(request, response);
  } else if (pathname === '/author/create_process') {
    author.create_process(request, response);
  } else if (pathname === '/author/update') {
    author.update(request, response);
  } else if (pathname === '/author/update_process') {
    author.update_process(request, response);
  } else if (pathname === '/author/delete_process') {
    author.delete_process(request, response);
  } else {
    response.writeHead(404);
    response.end('Not found');
  }
});
app.listen(3000);
