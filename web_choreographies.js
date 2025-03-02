// New vocabulary: 
// Auxologic; Weight; Height; Proportions; Units; Body Index; Spacing
// Geometrised; Geometric_bias; Topographical_uncertainty;
// "...which is more than one, and more than two, but less than infinity.
// Anthropometry (from Greek ἄνθρωπος anthropos, 'human', and μέτρον metron, 'measure') 
// Configure /Figuring; refer to the measurement of the human individual.
// Henry Dreyfuss and Neufert;
// modulor; body measurement and proportions; blobs / virus;

// notes on scenography: microphone hanging in space; 
// double projection: having the 'glossary' in another part of the space
// Two projectors and screen/ empty wall; HDMI cables to connect to laptops;
// Microphone on stand; Loudspeakers; Access to Wi-fi (strong connection);
// Pedestal; foam sofas;

// notes on physical movement: BODY POSITIONS. 

// change back settings: about:addons + shared internet;
// start screen: 50% 50% chance of visiting a webpage? https://www.w3schools.com/js/tryit.asp?filename=tryjs_randomlink
// search term: from body to body

// - - - PHASE I — - - -//

// search terms: from body to bodies 

var delay="10"; 
var count='0';
var Texts=new Array();

Texts[0]="About the body,";
Texts[1]="responsive bodies";
Texts[2]="embedded bodies, rendered.";
Texts[4]="The boundaries of the body,";
Texts[5]="the edges of the limits of";
Texts[6]="ontologies of borderlessness,";
Texts[7]="before the binary of inside out.";
Texts[8]="Contained, continuum. Corporeal.";
Texts[9]="";
Texts[10]="Lets move beyond identifiable dance forms.";
Texts[11]="Dance can invent what a body can do";
Texts[12]="The reactivation of the social body is a political project that begins with dancing.";
Texts[13]="Emergent bodies, or disobedient bodies.";
Texts[14]="The social body.";
Texts[15]="Body languages.";
Texts[16]="From syntax to flesh.";
Texts[17]="Movement passing through our spines, like a spiral";
Texts[18]="Passed from body to body.";
Texts[19]="Our bodies ourselves." //includes excerpts from choreographer Moriah Evans and myself.

function Topographical_Uncertainty(){
        document.querySelector('#logo').innerHTML = Texts[count]; //or: #searchboxinput
        count++;
        if(count==Texts.length){count='0';}
        setTimeout("Topographical_Uncertainty()",delay*800);
} 


document.querySelector('#logo').style.fontSize="120pt";
document.querySelector('#logo').style.width="100cm";
document.querySelector('body').style.transform="scale(0.5)";


document.querySelector("body").style.writingMode="vertical-lr";
document.querySelector("body").style.textOrientation="upright";
document.querySelector("body").style.lineHeight="150px";
document.querySelector("body").style.letterSpacing="150px";


// JS set interval = miliseconds
// CSS Relative Lengths: 
// em (font size); 
// ex (to the x-height of the current font ); 
// ch (relative to width of the "0" (zero));
// rem (relative to font-size of the root element);
// vw vh (viewport);
// % (relative to the parent element);
// - - - - - CSS Absolute Lengths
// cm; mm; in; ox; pt; pc (picas 1pc = 12 pt):
// 0.01 m = 37.7952755906 pixel 
// 0.1 m =  377.9527559055 pixel 
// 1 m = 3779.5275590551 pixel 
//1 m = 3779.527559 px; 1 px = 0.000265 m 
// 5 m = 18897.637795276 pixel 
// 10 m = 37795.275590551 pixel 
//10 meter  =  37795.275593 pixel 
// 50 m = 188976.37795276 pixel 
//50 meter  =  188976.377967 pixel
// 100 m = 377952.75590551 pixel 
//100 meter  =  377952.755933 pixel
// 1000 m = 3779527.5590551 pixel 
// 1 meter [m] =39.370079 
// = inches / = 3.28084 
// 1m = 3ft 3.370079inches / 3.28083989501 feet 
// foot -- 196.850394 foot/ minute -- 11811.02364 foot/hour
// 0.001 meter/milisecond -- 59.999999 meter/minute
// = 2834.64576 points /= 9.842521 hand / = 8.748908 (cloth)
// = 4.97097 link (usually abbreviated as "l.", "li." or "lnk.")
// a unit of length formerly used in many English-speaking countries. 
// 1 link ≈ 201.167 652 millimetres (based on the pre-1959 imperial foot) 
// a link is exactly 66⁄100 of a foot,[1] 
//or exactly 7.92 inches or 20.1168 cm. 
// which is more than one, and more than two, but less than infinity.



colors = new Array("#000000 ", "#101010 ","#202020 ", "#282828 ","#303030" ,"#383838  ", "#404040 ", "#484848 ","#585858 " ,"#505050 ", "#606060 ","#686868 ", "#787878 ",  "#888888 ", "#989898 ", "#A0A0A0 ", "#A8A8A8 ","#C0C0C0 ", "#B0B0B0 ", "#F0F0F0 "," #D8D8D8 ", "#F0F0F0 ","#FFFFFF ","#D0D0D0", " #181818 ", "#909090 ")

colorIndex = 0
idInterval = 0

function  Pulse(n) {
colorIndex = (colorIndex + 1) % colors.length
var r =document.querySelector(".g:nth-child("+n+")"),
r = r.querySelector(".rc");
r.style.fontSize="8pt";
r.style.lineHeight="12pt";
r.style.width="1200px";
r.style.color="#ffffff";
r.style.padding="50pt";
r.style.border="solid";
r.style.borderColor = colors[colorIndex];
r.style.borderRadius="50%";
};  
//setInterval("Pulse(1)",800)


function  Pathway(n) {
var r =document.querySelector(".g:nth-child("+n+")"),
r = r.querySelector(".rc");
r.style.lineHeight="12pt";
r.style.width="1200px";
r.style.color="#ffffff";
r.style.padding="50pt";
r.style.borderTop="solid black";
};  
// Pathway(1)

var elements = document.getElementsByClassName("rc");
function Line (n) {

for (i=0; i<elements.length; i++) {
    elements[i].style.borderWidth = Math.floor(Math.random() * 100) + 'cm';
    }
}               
//setInterval("Line (1)", 800)


var elements = document.getElementsByClassName("rc");
function Spacing () {

for (i=0; i<elements.length; i++) {
    elements[i].style.width = Math.floor(Math.random() * 100) + '%';
    }
}               
//setInterval("Spacing ()", 800)


function Focus(n) {
var r =document.querySelector(".g:nth-child("+n+")"),
st = r.querySelector(".s");
st.style.width="900px";
st.style.height="380px";
st.style.margin="100px";
st.style.fontSize="6pt";
st.style.padding="400pt";
st.style.backgroundColor="black";
st.style.border="1px solid black";
st.style.borderRadius="50%";
};
// Focus(30)


// - - - PHASE II  - - -//

// google images: ergonomics basic body types

document.querySelector("body").style.opacity="0.1";
document.querySelector("html").style.background="linear-gradient(black 10%, black 50%, black 25%, white 100%)";

document.querySelector("body").style.transform="skewX(20deg)";
document.querySelector("body").style.transform="matrix(1.0,2.0,3.0,4.0,5.0,6.0)";


document.querySelector("#ires").style.transform="rotateZ(10deg)";

function Inhale() {
    document.querySelector("body").style.transform="scale(0.2)"};

function Exhale() {
    document.querySelector("body").style.transform="scale(4)"}; 

function Breathing () { 
    
    if (document.querySelector("body").style.transform=="scale(1)") {
        	(document.querySelector("body").style.transform="scale(4)")
        }
    else  { (document.querySelector("body").style.transform="scale(1)") 
        }
}
setInterval("Breathing()",800)


// - - - PHASE III  - - -//


// movement of or by or from a body

document.querySelector("body").style.transform="scale(0.2)"

function Move () { 
    
    if (document.querySelector("body").style.transform=="rotateY(0deg)") {
        	(document.querySelector("body").style.transform="rotateY(180deg)")
        }
    else  { (document.querySelector("body").style.transform="rotateY(0deg)") 
        }
}

setInterval("Move()",1200)


currentLoopCount = 0;
colors = ["black", "white", "pink"];

setInterval(function(){
    elements = document.querySelectorAll("*");

    if(currentLoopCount>elements.length){
        currentLoopCount = 0;
    }
    
    currentElementIndex = currentLoopCount;
    colors = ["black", "white", "pink"];
    
    elements.forEach(function(e){
        if(currentElementIndex > elements.length){
            currentElementIndex = 0;
        }
        var chosenColor;
        if(currentElementIndex/elements.length < 1/3){
            chosenColor = colors[0]; 
        } else if(currentElementIndex/elements.length < 2/3){
            chosenColor = colors[1];
        } else {
            chosenColor = colors[2];
        }
        e.style.color = chosenColor;
        currentElementIndex++;
    });

    currentLoopCount++;
    
}, 1/30);

document.querySelector("body").style.transform="rotate(90deg)";
document.querySelector("#gsr").style.transform= "matrix3d(1, 0, 0, 0, 1.02, 1.02, 0, 0.0019, 0, 0, 1, 0, 0, 0, 0, 1)";


// - - - PHASE VI  - - -//

// search terms: from body to bodies 

function Turn(n) {
var s =document.querySelector(".g:nth-child("+n+")"),
s = s.querySelector(".s");
s.style.transform="skew(10deg, 25deg)"
};

function Re_turn(n) {
var t =document.querySelector(".g:nth-child("+n+")"),
t = t.querySelector(".s");
t.style.transform="skew(-10deg, -25deg)"
};
//Turn(1); Re_turn(2); Turn(3); Re_turn(4); Turn(5); Re_turn(6);

document.querySelector("html").style.background="linear-gradient(blue 0%, pink 50%, white 100%)";
document.querySelector("html").style.backgroundBlendMode="screen";
document.querySelector("html").style.backgroundRepeat="repeat";


function Off_Stage () {
    //document.querySelector("html").style.backgroundColor="black";   
	document.body.innerHTML = '';
	document.head.innerHTML = '';
}


// - - - - - - - - - - - - - - - - - - more - - - - - - - - - - - - - - - - - -

document.querySelector("body").style.filter="grayscale(100%)"; 
document.querySelector("#taw").remove()

document.getElementsByTagName("h3")[1].remove() 
document.querySelectorAll("h3")[3].style.background="pink";

document.querySelectorAll("[data-jip-unity-id" + "='" + "dc" + "']")[0].style.background="pink";
document.body.setAttribute("follow", "false"); 


// #wrapper>div:first-child {
//     width: 15%;
// }
// #wrapper>div:nth-child(2) {
//     width: 56%; /* or less */
// }
// #wrapper>div:last-child {
//     width: 25%;
// }

function  Neutral (x) {
    var str = document.getElementById(x).innerHTML; 
    var res = str.replace(/center/gi, "NEUTRALISING");
    document.getElementById(x).innerHTML = res;
}
//neutral ("ires")  // SCROLL

var xMax, yMax, xNeg=0, yNeg=1;

function Walk_the_Distance(){
    window.scrollBy(5 * xNeg, 5 * yNeg);
    if(xMax == window.scrollX)xNeg = xNeg * 1;
    if(yMax == window.scrollY)yNeg = xNeg * -1;
    scrolldelay = setTimeout(Walk_the_Distance,60);
    console.log(window.scrollY);
    xMax = window.scrollX;
    yMax = window.scrollY;
}
// clearTimeout(scrolldelay)

//My dance is my walking.

window.scroll(0, 1000);
window.scrollByLines(15); 

document.querySelector("body").style.position="absolute";
document.querySelector("body").style.display="flex";
document.querySelector("body").style.justifyContent="space-around";
document.querySelector("body").style.alignItems="flex-start";
document.querySelector("#ires").style.transform="rotateZ(10deg)";
document.querySelector("body").style.backgroundImage="url(https://upload.wikimedia.org/wikipedia/commons/c/c0/Computer_Workstation_Variables_cleanup.png)";
document.querySelector("#main").style.backgroundBlendMode="multiply";
document.querySelector("body").style.backgroundRepeat="repeat space";
document.querySelector("body").style.backgroundRepeat="round space";
document.querySelector(".LC20lb").removeAttribute("href"); 
