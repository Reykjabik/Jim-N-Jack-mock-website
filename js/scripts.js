var comments = [
"Very nice place with delicious food and cheap prices. Also they've got English stand up shows on Fridays and Saturday =)",
"This place is very cozy. I can't find better word to describe it. Really family-like atmosphere. Great beer, and hilarious Stand up evenings.",
"This tiny bar will be your go to place in Moscow. We went on a pub crawl to a few pubs in the area and ended our evening at Jim and Jacks Expat Bar.",
"Jim and Jack is the place to visit. You can also take the stage yourself either with Stand-up or music and make your evening really special :)",
"A great small expat bar that generously offers a lot and humbly asks for little. All shows are in English, the Wednesday Movie Night choice of films is amazing.",
"Tasty meals and a great bar. Fair prices. If you are visiting Moscow this place is highly recommended!",
"Good place + good people + good food + good drinks = perfect. Nice interesting regular events. Super like."
];

$(document).ready(function(){               /********** START JQUERY **********/

    var rand = Math.floor((Math.random() * comments.length)); 


/********** Catching the clicks and animating a slow scroll down **********/

    $(".scroll").click(function(event){
        
        var hash = this.hash;           // Catching the href   

        if(hash !== ""){

            event.stopImmediatePropagation();

            // Using jQuery's animate() method to add smooth page scroll
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, "slow", function(){
                
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });


/********** Accessing a random comment and introducing it in the DIV **********/

    $("#feedback-bar").html('"' + comments[rand] + '"');


/********** Fixing the main navigation bar at the top of the browser when scrolled down **********/

    var fixmeTop = $('#main-nav-bar').offset().top;       // get initial position of the element

    $(window).scroll(function(){
            if( $(window).scrollTop() > fixmeTop ) {
                    $('#main-nav-bar').css({position: 'fixed', top: '0px', display: 'block', right: 0});
                    $('.main-logo').css({position: 'fixed', top: '-15px', display: 'block', left: 30});
                    $('#main-pic').css({"margin-top": "60px"});
            } else {
                    $('#main-nav-bar').css({position: 'static', top: '0px'});
                    $('#main-pic').css({"margin-top": "0"});
            }
    });

/********** Creating a slide when pressing the arrow buttons **********/

    $(".arrow").click(function(event){
        
        event.preventDefault();
        var $arrId = $(this).attr("id");
    
        if ($arrId == "prev"){

            slideImgLeft(true);

        } else {

            slideImgLeft(false);

        }

    });

    var num = 2;
    var totalPics = 5;
    var num2 = totalPics;

    function slideImgLeft(isLeft){
        if (isLeft){
            $(".pictures").each(function(index) {
                var next = index + num;
                if(next > totalPics) {
                    next = 1;
                    num %= totalPics;
                }
                var nextPic = "<img src=\"img/img" + next + ".jpg\" width=\"300px\"/>";
                $(this).html(nextPic);
            });
        } else {

            $(".pictures").each(function(index) { 
                var next = index + num2;
                if(next != 5) {
                    next = next%totalPics;
                }
                var nextPic = "<img src=\"img/img" + next + ".jpg\" width=\"300px\"/>";
                $(this).html(nextPic);
            });
        }
        num++;
        num2--;
        if (num2 == 0) {
            num2 = totalPics;
        }
    }   /********** END of SLIDER function **********/



    /********** Creating a background div to show the menu **********/

    /* menuOn checks that there is no menu already displaying, so that divs don't add up */
    var menuOn = false;             

    $(".btn").click(function(event){                /*********** When CLICK on FOOD/DRINKS button **********/

        if(!menuOn){

            event.preventDefault();

            var $whichBtn = $(this).attr("id");
            var $newDiv = $("<div id=\"menu-backgr\"></div>");
            var $food = $("#food-btn");
            var $drinks = $("#drinks-btn")

            if ($whichBtn == "food-btn"){
                var $menuImg = $("<img class=\"menuimg\" src=\"img/menu01.jpg\" height=\"400\">");
                $food.before($newDiv);
                $(this).hide();
                $newDiv.append($menuImg);
            }
            else {
                alert("Coming soon!");
            }
            menuOn = true;
        }
        else {
            menuOn = false;
        }
    }); /********** END of CLICK function for FOOD and DRINKS buttons **********/

});     /* ===== END of DOCUMENT.READY ===== */  