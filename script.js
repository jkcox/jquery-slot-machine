$( document ).ready(function() {

    //start the game
    $('#spin-lever').click(function(){

    //decide if winner or loser
    var random_boolean = Math.random() >= 0.5;

    if( random_boolean == false ) {
      console.log(false)
      //change backgrounds to not match if loser
      $( ".spin-icon.last" ).removeClass("bg1")
      $( ".spin-icon.last" ).each(function(i){
        $(this).addClass(`bg${i+1}`)
      })
    } else {
      $( ".spin-icon.last" ).addClass("bg1")
    }


    //move the icons
     $( ".spin-icon.row1" ).each(function(i){
       $(this).delay(200*i).animate({top: `200px`}, 60*i);
     })
     $( ".spin-icon.row2" ).each(function(i){
       $(this).delay(250*i).animate({top: `200px`}, 60*i);
     })
     $( ".spin-icon.row3" ).each(function(i){
       $(this).delay(300*i).animate({top: `200px`}, 60*i);
     })

     //display winner message
     if( random_boolean == true ) {
       $('#winner').delay(3000).fadeIn()
     }

    })

    //reset the game
    $('#reset-lever').click(function(){
      $( ".spin-icon" ).css({top: `0px`})
      $( ".spin-icon.last" ).removeClass("bg1 bg2 bg3 bg4 bg5")
      $('#winner').fadeOut()


    })


});
