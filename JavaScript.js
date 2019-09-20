$('#triggerHide').click(function(){
 $('#circle').hide(100);
});

$('#triggerShow').click(function(){
 $('#circle').show(100);
});

//left è il riferimento dal bordo sinistro dello schermo, con += si sposta ogni volta di tot
//se ci metti = e basta si piazza nella posizione di pixel indicata
$('#triggerL').click(function(){
 $('#circle').animate({left: "-=50"},);
});

$('#triggerR').click(function(){
 $('#circle').animate({left: "+=500"},1000); //il valore dopo la graffa è la durata in millisecondi dell'animazione
});

$('#triggerU').click(function(){
 $('#circle').animate({top: "-=50"},);
});

$('#triggerD').click(function(){
 $('#circle').animate({top: "+=50"},);
});

$( "#trigger" ).click(function() {
  $( "#circle" ).animate({
    opacity: 0.25,
    left: "+=50",
    height: "toggle"
  }, 1000, function() {
  		 $('#circle').animate({opacity: 1});
    	 $('#circle').show(100);
  });
});

/*
$( "#trigger" ).click(function() {
  $( "#circle" ).animate({
    left: "+=100"
  }, 1000);
});*/
