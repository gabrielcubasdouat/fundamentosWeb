var imgIndex = 0;
const MAX_IMG = 8;
const AD_TIME = 5000;

var sliderPages;
var sliderElements;
var sliderDotsDiv;
var sliderDots;
var timer;

function createSlider(){
  sliderPages = document.getElementById("slider_pages");
  sliderDotsDiv = document.getElementById("slider_dots");

  for (var i = 0; i < MAX_IMG; i++) {
    sliderPages.innerHTML += '<img style="visibility: hidden;" class="slider_element" src="sliderimages/slider'+ (+i+1)+'.jpg" style="width:100%">';
    sliderDotsDiv.innerHTML += '<span class="slider_dot" onclick="setSliderImage('+ (+i) +');"></span>'
  }
  sliderElements = document.getElementsByClassName("slider_element");
  sliderDots = document.getElementsByClassName("slider_dot");

  restartSliderTimer();

  setSliderImage(0);

  return;
}

function restartSliderTimer(){
  clearInterval(timer);
  timer = setInterval(incrementSliderImage, AD_TIME, 1);
}

function setSliderImage(image){
  imgIndex = image;

  for (var i = 0; i < sliderElements.length; i++) {
    sliderElements[i].style.visibility = "hidden";
    sliderElements[i].style.opacity = "0";
    sliderDots[i].style.backgroundColor = "lightgray";
  }
  sliderElements[imgIndex].style.visibility = "visible";
  sliderElements[imgIndex].style.opacity = "1";
  sliderDots[imgIndex].style.backgroundColor = "purple";

  restartSliderTimer();

  return;
}

function incrementSliderImage(increment){
  var nextImg = imgIndex + increment;

  if(nextImg < 0) nextImg = MAX_IMG - 1;
  else if(nextImg >= MAX_IMG) nextImg = 0;

  setSliderImage(nextImg);

  return;
}
