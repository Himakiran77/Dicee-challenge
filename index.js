var randomnumber = Math.floor(Math.random()*6) + 1;

var randomdiceimg = "dice" + randomnumber + ".png";

var randomimgsrc = "images/" + randomdiceimg;

var image1 = document.querySelectorAll("img") [0];

image1.setAttribute("src", randomimgsrc);

var randomnumber2 = Math.floor(Math.random()*6) + 1;

var randomdiceimg2 = "dice" + randomnumber2 + ".png";

var randomimgsrc2 = "images/" + randomdiceimg2;

var image2 = document.querySelectorAll("img") [1];

image2.setAttribute("src", randomimgsrc2);

if(randomnumber > randomnumber2){
    document.querySelector("h1").innerHTML = " Player 1 wins!";
}
else if(randomnumber2 > randomnumber){
    document.querySelector("h1").innerHTML = " Player 2 wins!";
}
else {
    document.querySelector("h1").innerHTML = " Draw!";
}
