$(document).ready(function(){
   var textToBeShownElement = $("#textToBeShown");

   $("#hideButton").click(function(event){
     textToBeShownElement.hide();
   });

   $("#showButton").click(function(event){
     textToBeShownElement.show();
   });

 });