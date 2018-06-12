function getWinner() {

    var box1 = $("#box1");
    var box2 = $("#box2");
    var box3=  $("#box3");
    var box4=  $("#box4");
    var box5=  $("#box5");
    var box6=  $("#box6");
    var box7=  $("#box7");
    var box8=  $("#box8");
    var box9=  $("#box9");

    if      (box1.innerHTML!== "" && box1.innerHTML===box2.innerHTML && box1.innerHTML===box3.innerHTML)
        console.log("You win");
    else if (box4.innerHTML!== "" && box4.innerHTML===box5.innerHTML && box4.innerHTML===box6.innerHTML)
        console.log("You win");
    else if (box7.innerHTML!== "" && box7.innerHTML===box8.innerHTML && box7.innerHTML===box9.innerHTML)
        console.log("You win");
    else if (box1.innerHTML!== "" && box1.innerHTML===box4.innerHTML && box1.innerHTML===box7.innerHTML)
        console.log("You win");
    else if (box2.innerHTML!== "" && box2.innerHTML===box5.innerHTML && box2.innerHTML===box8.innerHTML)
        console.log("You win");
    else if (box3.innerHTML!== "" && box3.innerHTML===box6.innerHTML && box3.innerHTML===box9.innerHTML)
        console.log("You win");
    else if (box1.innerHTML!== "" && box1.innerHTML===box5.innerHTML && box1.innerHTML===box9.innerHTML)
        console.log("You win");
    else    (box3.innerHTML!== "" && box3.innerHTML===box5.innerHTML && box3.innerHTML===box7.innerHTML)
    console.log("You win");

}

$(document).ready(function() {
    var move = 2;
    var play = true;

    $(".box").click(function() {
        console.log("click");

        if ($(this).text()=="" && play )
        {
            // move % 2 == 1 ? $(this).append("X") : $(this).append("O");
            $(this).append( move % 2 ==1 ? "X" : "O");
            move++;

            if (getWinner() != "")
            {
                if (getWinner() == "X")
                    console.log("player 1 wins");
                else if (getWinner() == "O")
                    console.log("player 2 wins");
                else
                    console.log("Draw");
            }
        }
    });
});
