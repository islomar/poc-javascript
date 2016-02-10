$(document).ready(function(){
   var textToBeShownWithClassElement = $("#textToBeShownWithClass");

   $("#hideButtonWithClass").click(function(event){
       textToBeShownWithClassElement.addClass('hide');
   });

   $("#showButtonWithClass").click(function(event){
       textToBeShownWithClassElement.removeClass('hide');
   });

    $("#toggleButtonWithClass").click(function(event){
        textToBeShownWithClassElement.toggleClass('hide');
    });

 });