/*function getWinner() {
    var box1= document.getElementById("box1");
    var box2= document.getElementById("box2");
    var box3= document.getElementById("box3");
    var box4= document.getElementById("box4");
    var box5= document.getElementById("box5");
    var box6= document.getElementById("box6");
    var box7= document.getElementById("box7");
    var box8= document.getElementById("box8");
    var box9= document.getElementById("box9");


    if (box1.innerHTML!== "" && box1.innerHTML===box2.innerHTML && box1.innerHTML===box3.innerHTML)
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
    else if (box3.innerHTML!== "" && box3.innerHTML===box5.innerHTML && box3.innerHTML===box7.innerHTML)
        console.log("You win");
}