//  ____ _                                                _     _                 ____          _                   ____ _                                
// / ___| |__   ___  _ __ ___  ___   __ _ _ __ __ _ _ __ | |__ (_) ___           / ___|___   __| | ___ _    __ _   / ___| | ___  ___ ___  __ _ _ __ _   _ 
//| |   | '_ \ / _ \| '__/ _ \/ _ \ / _` | '__/ _` | '_ \| '_ \| |/ __|  _____  | |   / _ \ / _` |/ _ (_)  / _` | | |  _| |/ _ \/ __/ __|/ _` | '__| | | |
//| |___| | | | (_) | | |  __/ (_) | (_| | | | (_| | |_) | | | | | (__  |_____| | |__| (_) | (_| |  __/_  | (_| | | |_| | | (_) \__ \__ \ (_| | |  | |_| |
// \____|_| |_|\___/|_|  \___|\___/ \__, |_|  \__,_| .__/|_| |_|_|\___|          \____\___/ \__,_|\___(_)  \__,_|  \____|_|\___/|___/___/\__,_|_|   \__, |
//                                  |___/          |_|                                                                                              |___/ 






// <title> Act 1 </title>



// ? text to speech — document.querySelector("#gsri_ok0.gsri_a").click()

function Warning() {
    alert("'Theatrical' actions are not necessary to the performance piece. Avoid if at all possible.");
}

//myVar = setTimeout(40000, 40050)

function Warning_2() {
    alert("Please swhitch off your mobile phones");
};


function Enter_the_stage (){
  document.getElementById("first").style.color = "black";
};

function Eliminate_or_minimize (x) {
  x.style.fontSize = parseInt(x.style.fontSize) / 2 + 'pt'
};

/*x = document.querySelector("#first");
x.style.fontSize = "10000pt";
y = document.querySelector("#second");
y.style.fontSize = "10000pt";*/

function Remove (y) {
  y.style.fontSize = parseInt(y.style.fontSize) / 2 + 'pt'
};

// in the console: x.style.fontSize = parseInt(x.style.fontSize) * 2 + 'pt'

// setInterval (function () {half(x)}, 2000)
/*or use this in the terminal::::

x.style.fontSize = getComputedStyle(x).fontSize
"666.667px"
x.style.fontSize = ( parseInt(x.style.fontSize) / 2 ) + 'pt'   
"333pt"

*/

// IMPORTANT::::::::::::::::  document.querySelector(".sfibbbc").remove()

var delay="10"; //how many seconds
var count='0';
var Texts=new Array();
Texts[0]="Choreography";
Texts[1]="as a mobilising language,";
Texts[2]="words to define";
Texts[4]="space and  time";
Texts[5]="expand and contract";
Texts[6]="or remain as it seems to be.";
Texts[7]="as it seems to be.";


function New_Sequence_or_Phrasing(){
document.querySelector('.logo').innerHTML=Texts[count];
count++;
if(count==Texts.length){count='0';}
setTimeout("New_Sequence_or_Phrasing()",delay*1000);


document.querySelector(".logo").style.width="1000px"
document.querySelector(".logo").style.fontSize="26pt"
}

//onload= function() { Sequencing();}


var textarray = [
"Ritualistic, repetitive",
"Simultaneously",
"A thing called a body.",
"Breathing until its enough.",
"Substitution.",
"A supermposition of rhythms",
"(variation)",
"Accumulation",
"No time for breathing." 
];

var textarray3 = [
"ritualistic, repetitive",
"simultaneously",
"a thing called a body.",
"breathing until its enough.",
"substitution.",
"a supermposition of rhythms",
"(variation).",
"accumulation.",
"no time for breathing." // No comma after last entry
];

function Elements_of_Chance(n) {

var rannum= Math.floor(Math.random()*textarray.length);
// document.querySelector(".st").innerHTML=textarray2[rannum];
var r =document.querySelector(".g:nth-child("+n+")"),
  r = r.querySelector(".r");
r.innerHTML=textarray[rannum];
r.style.fontSize="24pt"
};

/*var rannum= Math.floor(Math.random()*textarray.length);
document.querySelector(".r").innerHTML=textarray[rannum];
document.querySelector(".r").style.marginTop= "26pt";
document.querySelector(".r").style.marginTop= "60px";
document.querySelector(".r").style.color = "#0404B4";
};*/

// function  Indeterminancy(n) {
// var rannum= Math.floor(Math.random()*textarray3.length);
// // document.querySelector(".st").innerHTML=textarray2[rannum];
// var r =document.querySelector(".g:nth-child("+n+")"),
// _Rm = r.querySelector(".iUh30");
// _Rm.innerHTML=textarray3[rannum];
// _Rm.style.fontSize="16t"
// };	

/*var rannum= Math.floor(Math.random()*textarray3.length);
document.querySelector("._Rm").innerHTML=textarray3[rannum];

document.querySelector("._Rm").style.marginBottom = "22px";
document.querySelector("._Rm").style.fontSize = "18pt";

};*/


var textarray2 = [
"Ritualistic, repetitive",
"Simultaneously",
"A thing called a body.",
"Breathing until its enough.",
"Substitution.",
"A supermposition of rhythms",
"(variation).",
"Accumulation.",
"No time for breathing." 
];

function Juxtaposition_of_elements_under_aleatory_influence(n) {

var rannum= Math.floor(Math.random()*textarray2.length);
// document.querySelector(".st").innerHTML=textarray2[rannum];
var r =document.querySelector(".g:nth-child("+n+")"),
st = r.querySelector(".st");
st.innerHTML=textarray2[rannum];
st.style.fontSize="16pt"
st.style.marginTop = "40px";
};

//iIN THE TERMINAL : setInterval("Juxtaposition_of_elements_under_aleatory_influence(5)",200)

//setTimeout(Elements_of_Chance, 1000) 
// USE::::::::: setInterval(Elements_of_Chance, 100)   and then clearInterval(number printed in the console)

//onload = function() { Elements_of_Chance();}

//document.querySelector(“#main”).innerHTML=""

// NEW: o corpo obedece ao oxigénio.

function leave_the_stage (n){

var r =document.querySelector(".g:nth-child("+n+")");
r.style.visibility="hidden";
};


colors = new Array(" #000000 ", "#101010 ","#202020 ", "#282828 ","#303030" ,"#383838  ", "#404040 ", "#484848 ","#585858 " ,"#505050 ", "#606060 ","#686868 ", "#787878 ",  "#888888 ", "#989898 ", "#A0A0A0 ", "#A8A8A8 ","#C0C0C0 ", "#B0B0B0 ", "#F0F0F0 "," #D8D8D8 ", "#F0F0F0 ","#FFFFFF ","#D0D0D0", " #181818 ", "#909090 ")

colorIndex = 0
idInterval = 0

function choreography_is_the_organization_of_tensions() {
 document.querySelector('html').style.backgroundColor = colors[colorIndex]
 colorIndex = (colorIndex + 1) % colors.length
}
// experiment with::::::: setInterval("choreography_is_the_organization_of_tensions()",30)

/*function choreography_is_the_organization_of_tensions(tempo) {
  clearInterval(idInterval)
  idInterval = setInterval("tension_counter_tension()",tempo)
}

idWhile = 0 */

function Pause (){
  document.getElementById("body").style.backgroundColor = "#000000";
//setTimeout ("BlackOut()", 200 );
};

function Second_Act () {
  var url = window.open('file:///Users/Jo/Desktop/webpage_google/II.html', '_blank');
  window.location.href = url;
  url.focus();
}
// document.querySelector(“html”).style.backgroundColor = "white"





// <title>Act 2</title>



 // - -  - - - - - -  - - - - -- - - - - - - - - - - - - - - - -   on google images:


colors = new Array(" #000000 ", "#101010 ","#202020 ", "#282828 ","#303030" ,"#383838  ", "#404040 ", "#484848 ","#585858 " ,"#505050 ", "#606060 ","#686868 ", "#787878 ",  "#888888 ", "#989898 ", "#A0A0A0 ", "#A8A8A8 ","#C0C0C0 ", "#B0B0B0 ", "#F0F0F0 "," #D8D8D8 ", "#F0F0F0 ","#FFFFFF ","#D0D0D0", " #181818 ", "#909090 ")

colorIndex = 0
idInterval = 0

function choreography_is_the_organization_of_tensions() {
 document.querySelector("body").style.backgroundColor = colors[colorIndex]
 colorIndex = (colorIndex + 1) % colors.length
}
//setInterval("choreography_is_the_organization_of_tensions()",20)



var delay="10"; //how many seconds
var count='0';
var Texts=new Array();
Texts[0]="Vicious Circle";
Texts[1]="Sphere";
Texts[2]="Spheres";
Texts[4]="Sphere";
Texts[5]="The private circle";
Texts[6]="Public sphere";
Texts[7]="The private circle";
Texts[8]="";
Texts[9]="Rotation";
Texts[10]="Counterclockwise";
Texts[11]="Spinning";
Texts[12]="Spinning wheel";
Texts[13]="Perpetual motion";
Texts[14]="";
Texts[15]="Repeating itself ";
Texts[16]="Geometry of time";

function breathe (){
        document.querySelector('.gLFyf.gsfi').value = Texts[count]; 
        count++;
        if(count==Texts.length){count='0';}
        setTimeout("breathe()",delay*800);
} 
// setInterval("breathe()",1600)


    function rotate () {
    var centro = document.querySelector("body"),
    deg = 10;
    des_centro = setInterval(function() {
    centro.style.transform = "rotateY(" + deg + "deg)";
    deg = (deg + 10) % 360
    }, 80); 
    } 

//rotate ()


    function pause () {
    clearInterval(des_centro);
    } 

// pause ()   
    

 // - -  - - - - - -  - - - - -- - - - - - - - - - - - - - - - -   

function Thank_You () {
  var win = window.open('curtain_down.html',"_self");
  win.focus();
}



/*document.querySelector("#main").innerHTML="";

document.querySelector("#main").innerHTML='<canvas id="canvas" width="5000" height="5000"></canvas>';
*/
var c = document.querySelector("canvas");
var context = c.getContext("2d");

    w = c.width;
    h = c.height;

function  empty() {
        context.clearRect(0, 0, w, h);
        document.getElementById("canvas").style.display = "none";

        document.getElementById("canvas").style.display = "initial";
};


function construct_a_singular_explicit_space()  {
context.moveTo(900, 0);
context.lineTo(900, 900);
context.stroke(); }


function undefined_space () {

for (var x = 0.5; x < 5000; x += 15) {
  context.moveTo(x, 0);
  context.lineTo(x, 3750);
}


for (var y = 0.5; y < 3750; y += 15) {
  context.moveTo(0, y);
  context.lineTo(5000, y);
}

context.stroke();
};

function transversal () {
for (var x = 0.5; x < 5000; x += 5) {
context.moveTo(x, 0);
context.lineTo(x, 5750);
context.arc(0,0.6,0.5,1,2*Math.PI);

context.font = '36pt Arial';
context.fillStyle = 'black';
context.fillText('Organizing our vision of the world. ', 4200, 4900)
context.shadowBlur = 0;
}

context.stroke(); }

function The_unity_of_the_circle () {
  var win = window.open('circle_line.html',"_self");
  win.focus();
}

document.getElementById("canvas").style.backgroundColor = 'black';

/*        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");*/
        var x = c.width / 2.2;
        var y = c.height / 2.6;
        var radius = 330;
        
        // Use objects to hold our draw and erase props 320
        var drawProps = {
          startAngle: 0,
          speed: 1,
          color: 'black',
          counterClockwise: false,
          globalCompositeOperation: context.globalCompositeOperation,
          lineWidth: 25            
        };
        
        var eraseProps = {
          startAngle: 360,
          speed: -1,
          color: 'white',
          counterClockwise: true,
          globalCompositeOperation: "destination-out",
          lineWidth: 25 // artefacts appear unless we increase lineWidth for erase
        };

        // Let's work in degrees as they're easier for humans to understand
        var degrees = 0; 
        var props = drawProps;

        // start the animation loop
        setInterval(draw, 50);

        function draw() { /***************/
            
            degrees += props.speed;
            
            context.beginPath();
            context.arc(
                x, 
                y, 
                radius, 
                getRadians(props.startAngle), 
                getRadians(degrees), 
                props.counterClockwise
            );
            context.lineWidth = props.lineWidth;
            context.strokeStyle = props.color;
            context.stroke();
            
            // Start erasing when we hit 360 degrees
            if (degrees >= 360) {
                context.closePath();
                props = eraseProps;
                context.globalCompositeOperation = props.globalCompositeOperation;
            }
            
            // Start drawing again when we get back to 0 degrees
            if (degrees <= 0) {
                canvas.width = canvas.width; // Clear the canvas for better performance (I think)
                context.closePath();
                props = drawProps;
                context.globalCompositeOperation = props.globalCompositeOperation;
            }
            /************************************************/
        }  
        
        // Helper method to convert degrees to radians
        function getRadians(degrees) {
            return degrees * (Math.PI / 180);
        }

/*function Final_Act () {
  var win = window.open('III.html', '_blank');
  win.focus();
}*/

// ACT 3  <title>Spacing and Timing</title>

/*
<div>
<marquee scrollamount="30">The directionality</marquee>
<marquee scrolldelay="400">and the temporalities.</marquee>
<marquee direction="up">A durational something,</marquee>
<marquee style="margin-left:500pt" direction="left" width="250" behavior="alternate" >...this is transitory...</marquee>
<p style="margin-left:250pt;">Mobility and Stability</p>
<marquee style="margin-left:400pt" direction="right" behavior=scroll scrollamount="4">Forward or back.</marquee>
<marquee style="margin-left:400pt" direction="right" behavior=scroll scrollamount="2">And more or less simultaneously.</marquee>
<marquee style="margin-top:20pt" style="margin-left:400pt" direction="right" behavior=scroll scrollamount="2">Again and again.</marquee> 
<marquee direction="left" behavior=scroll scrollamount="4">Re-activating fluidity,...</marquee>
<marquee direction="left" behavior=scroll scrollamount="2">...flux, fluency, flowing.</marquee>
<marquee direction="up">of conglomerate events.</marquee>
<marquee style="margin-right:300pt" direction="left" behavior=scroll scrollamount="2">non/ anti/ counter - PAUSING.</marquee>
</div>
<div id="last">
<marquee direction="right" behavior=scroll scrollamount="2">Duration not as an extension, but time intensified, constantly being done!</marquee>
</div> */

function There_are_as_many_spatio_temporal_experiences_as_there_are_distinct_movements () {

  document.getElementById("last").style.visibility = "hidden";  

window.open("", "", "width=1000, height=800");
window.open("", "", "width=10, height=800");
window.open("", "", "width=1000, height=80");
window.open("", "", "width=100, height=8");
window.open("", "", "width=200, height=200");
window.open("", "", "width=2000, height=100");
window.open("", "", "width=50, height=500");
window.open("", "", "width=1000, height=800");
window.open("", "", "width=20, height=100");
window.open("", "", "width=100, height=50");
window.open("", "", "width=0, height=0");
window.open("", "", "width=100, height=8");
window.open("", "", "width=200, height=200");
window.open("", "", "width=2000, height=100");
window.open("", "", "width=50, height=500");
window.open("", "", "width=300, height=800");
window.open("", "", "width=520, height=100");
window.open("", "", "width=1000, height=50");
window.open("", "", "width=1, height=30");
window.open("", "", "width=400, height=400");
window.open("", "", "width=2000, height=100");

}


 // - -  - - - - - -  - - - - -- - - - - - - - - - - - - - - - -   on google images:


colors = new Array(" #000000 ", "#101010 ","#202020 ", "#282828 ","#303030" ,"#383838  ", "#404040 ", "#484848 ","#585858 " ,"#505050 ", "#606060 ","#686868 ", "#787878 ",  "#888888 ", "#989898 ", "#A0A0A0 ", "#A8A8A8 ","#C0C0C0 ", "#B0B0B0 ", "#F0F0F0 "," #D8D8D8 ", "#F0F0F0 ","#FFFFFF ","#D0D0D0", " #181818 ", "#909090 ")

colorIndex = 0
idInterval = 0

function choreography_is_the_organization_of_tensions() {
 document.querySelector("body").style.backgroundColor = colors[colorIndex]
 colorIndex = (colorIndex + 1) % colors.length
}
//setInterval("choreography_is_the_organization_of_tensions()",20)



var delay="10"; //how many seconds
var count='0';
var Texts=new Array();
Texts[0]="Counterclockwise";
Texts[1]="Sphere";
Texts[2]="Spheres";
Texts[4]="";
Texts[5]="The private circle";
Texts[6]="Public sphere";
Texts[7]="The private circle";
Texts[8]="";
Texts[9]="Rotation";
Texts[10]="";
Texts[11]="Spinning";
Texts[12]="Spinning wheel";
Texts[13]="Perpetual montion";
Texts[14]="";
Texts[15]="Repeating itself ";
Texts[16]="Geometry of time";

    function perpetual_motion(){
        document.querySelector('#lst-ib').value = Texts[count]; //or: #searchboxinput
        count++;
        if(count==Texts.length){count='0';}
        setTimeout("perpetual_motion()",delay*800);
    } 
    // setInterval("perpetual_motion()",1600)

 // - -  - - - - - -  - - - - -- - - - - - - - - - - - - - - - -   

function Thank_You () {
  var win = window.open('curtain_down.html',"_self");
  win.focus();
}



/* NEW INPUT ::::: 

function Giro() {
document.querySelector("p").style.transform="rotate(7deg)"
}
setTimeout("Giro()",8000);

document.querySelector(".srg").style.height="70px"

document.querySelector(".srg").style.position="relative"

document.write("www.google.com");


var txt = "Hello World!"; 
document.write("<p>Link: " + txt.link("http://www.w3schools.com") + "</p>");


document.querySelector(".img").style.filterGrayscale="100%"

document.querySelector("img").style.filterBlur="15px"

//document.querySelector("#center_col").style.top="100rem" 

//function  mirror() {
document.querySelector("#search").style.transform = "scale(-1, 1)";
};  mirror()   

function show() {
    document.body.style.background = "url(https://media1.giphy.com/media/BPtiK5brjtFpC/200.gif)";}  show()
*/

// ______________________________________________________ NEW:

// Up and donwn:::::

var xMax, yMax, xNeg=0, yNeg=1;

function pageScroll() {
    window.scrollBy(5 * xNeg, 5 * yNeg);
    if(xMax == window.scrollX)xNeg = xNeg * 1;
    if(yMax == window.scrollY)yNeg = xNeg * -1;
    scrolldelay = setTimeout(pageScroll,100);
    console.log(window.scrollY);
    xMax = window.scrollX;
    yMax = window.scrollY;
}
pageScroll();
//parar na console: clearTimeout(scrolldelay)


// todo o Lado:::::

var xMax, yMax, xNeg=1, yNeg=0;

function pageScroll() {
    window.scrollBy(5 * xNeg, 5 * yNeg);
    if(xMax == window.scrollX)xNeg = xNeg * -1;
    if(yMax == window.scrollY)yNeg = xNeg * 1;
    scrolldelay = setTimeout(pageScroll,100);
    console.log(window.scrollY);
    xMax = window.scrollX;
    yMax = window.scrollY;
}
pageScroll();

document.querySelector(".srg").style.transform="rotate(180deg)"
