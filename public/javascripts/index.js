
$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});
$("#myNavbar a[href^='#']").on('click', function(e) {

 // prevent default anchor click behavior
 e.preventDefault();

 // store hash
 var hash = this.hash;

 // animate
 $('html, body').animate({
     scrollTop: $(hash).offset().top
   }, 500, function(){

     // when done, add hash to url
     // (default click behaviour)
     window.location.hash = hash;
   });

});

 function dothis() {
      document.getElementByClass('register-form').style.visibility='visible';
      document.getElementByClass('login-form').style.visibility="hidden";


}
$("#caa ").on('click',function () {
      document.getElementByClass('register-form').style.visibility="hidden";
      document.getElementByClass('login-form').style.visibility='visible';


})

$('#Type').on('change',function(){
       if( $(this).val()==="Teacher"){
       $("#tid").show();
       $("#uid").show();
       $("#sid").hide();
       }
       else if($(this).val()==="Student") {
       $("#uid").show();
       $("#sid").show();
       $("#tid").hide();
       }
       else{
       $("#sid").hide();
       $("#tid").hide();
       $("#uid").hide();
       }
   });
