var makeRequest = function(url, callback) {

// create a new xml http request object
var request = new XMLHttpRequest();

// set the type of request and the url
request.open("GET", url);

// set the callback we want it to use when the request is complete
request.onload = callback;

  // send the request
  request.send();
};

var requestComplete = function() {
  if(this.status !== 200) {
    return;
  }

  // grab the response text
  var jsonString = this.responseText;
  var albums = JSON.parse(jsonString);
  
  populateList(albums);
};

var populateList = function(albums) {

  var albums = albums.albums.items;

  albums.forEach(function(album) {
    console.log(album);
    var li = document.createElement("li");
    li.innerText = album.name;
    var ul = document.querySelector("#albums");
    ul.appendChild(li);
  });
};

var app = function(){
  var url = "https://api.spotify.com/v1/search?q=calvin&type=album";
  makeRequest(url, requestComplete);
}

window.onload = app;