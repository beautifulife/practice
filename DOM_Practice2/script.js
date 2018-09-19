function accodion(){
  var links = document.getElementsByClassName("section");
    for(let i=0; i<links.length; i++){
      links[i].addEventListener("click", accodionEvent, false);
    }
  
  function accodionEvent(ev) {
    // var sectionView = document.querySelector('.section > .sectionDefault');
    var itemClass = this.classList.value;
    for (i = 0; i < links.length; i++){
      links[i].classList.value = 'section sectionDefault';
      // console.log(links[i].classList);
      // console.log(links[i].nextElementSibling.classList);
      links[i].nextElementSibling.classList.value = 'secondSection';
      links[i].firstElementChild.classList.value =  'inlineArrow';
      // links[i].nextElementSibling.style.display = 'none';
    }
    // itemClass 가 아닌 this.classList.value; 일 경우 동작 x
    if(itemClass == 'section sectionDefault'){
      this.classList = ('section sectionActive');
      this.nextElementSibling.classList.value = 'secondSection active';
      this.firstElementChild.classList.value =  'inlineArrow2';
      // this.nextElementSibling.style.display = 'block';
    } 
    // else {
    //   this.classList.remove('sectionActive');
    //   this.classList.add('sectionDefault');
    //   this.nextElementSibling.style.display = 'none';    
    // }
  }
}
window.onload = accodion;



