var dataBase = {};
var firstDone = 1;
var lastDone = 0;

var background = document.querySelector('.background');
var more = document.querySelector('#More');

more.addEventListener('click', addMore);

var requestURL = 'https://hacker-news.firebaseio.com/v0/topstories.json';
var request = new XMLHttpRequest();
request.open('Get', requestURL);
request.responseType = 'json';
request.onreadystatechange = function() {
  if(request.readyState === 4) {
    if(request.status === 200) {
      requestData(request.response);
    }
  }
}
request.send();

const requestData = function(input) {
  for(let i=0; i<input.length; i++){
    let url = 'https://hacker-news.firebaseio.com/v0/item/'+input[i]+'.json';
    let innerRequest = new XMLHttpRequest();
    innerRequest.open('Get', url);
    innerRequest.responseType = 'json';
    innerRequest.onload = function() {
      console.log(url);
      addData(innerRequest.response, i)
      firstPress(dataBase)
      
    }
    innerRequest.send();
  }
}

const addData = function(data, index) {
  var now = new Date();
  var dif = now.getTime() - data.time * 1000
  var time = Math.floor(dif / 1000 / 60 / 60);
  var rank = index+1;
  var setData = {
    "rank" : rank,
    "url" : data.url,
    "title" : data.title,
    "score" : data.score,
    "by" : data.by,
    "time_ago" : time,
    "descendants" : data.descendants,
  }
  dataBase[index] = setData;
}

const firstPress = function(input) {
  if(firstDone === 1){
    if(input[38]) {
      firstDone = 0;
      for(let i=0; i<30; i++) {
        pressData(input[i]);
      }
      lastDone = lastDone+30;
    }
  }
}

const pressData = function(data) {
  if(data.url){
    var subUrl = data.url.split('/');
    var url = '(' + subUrl[2] + ')';
  } else {
    var url = '';
  }
  var template = `<div class="main_panel">
                <div class="main_left">
                  <span class="main_number">${data.rank}</span>
                  <a href="#">
                    <button class="upvote">
                  </a>
                </div>
                <div class="main_right">
                  <a class="news_article" href="${data.url}">${data.title}</a>
                  <a class="news_source" href="${data.url}">${url}</a>
                  <div class="news_info">
                    <span class="news_info_text">${data.score}</span>
                    <span class="news_info_text">by ${data.by}</span>
                    <span class="news_info_text">${data.time_ago} hours ago</span>
                    <span class="news_bar">|</span>
                    <span class="news_info_text">hide</span>
                    <span class="news_bar">|</span>
                    <span class="news_info_text">${data.descendants} comments</span>
                  </div>
                </div>
              </div>`;
  background.innerHTML += template;
}

function addMore() {
  for(let i=lastDone; i<lastDone+30; i++) {
    pressData(dataBase[i]);
    console.log('done');
  }
  lastDone = lastDone+30;
}