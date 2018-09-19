var req = new XMLHttpRequest();
req.open("GET", "./image_list.json");
req.onreadystatechange = function(){
  if(this.readyState == 4) {
    var data = JSON.parse(this.response);
    for(let i=0; i<data.length; i++){
      var div = document.createElement("div");
      div.setAttribute("class","image");
      div.onclick = function(){
        // if (this.getAttribute("class").indexOf("image-selected") == -1){
        //   this.setAttribute("class", "image image-selected");
        // }
        // else {
        //   this.setAttribute("class", "image");
        // }
        this.classList.toggle("image-selected");
      }
      var img = document.createElement("img");
      img.src = data[i];
      div.appendChild(img);
      document.body.appendChild(div);
    }
  }
}
req.send();

function selectAll(btn){
  var images = document.getElementsByClassName("image");
  // for (var i=0; i<images.length; i++){
  //   images[i].classList.add("image-selected");
  // }
  if (btn.value==="Select All"){
    for (var i=0; i<images.length; i++){
      images[i].classList.toggle("image-selected");
    }
    btn.value = "Unselect All";  
  } else {
    for (var i=0; i<images.length; i++){
      images[i].classList.toggle("image-selected");
    }
    btn.value = "Selected All";
  }
}