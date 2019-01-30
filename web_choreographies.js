// https://github.com/JoBCB/choreo-graphic_code-assemblage-1-


// New vocabulary: 
// Auxologic; Weight; Height; Proportions; Units; Body Index; Spacing
// Geometrised; Geometric_bias; Topographical_uncertainty;
// Configure /Figuring / 

// Anthropometry (from Greek ἄνθρωπος anthropos, 'human', and μέτρον metron, 'measure') 
// refers to the measurement of the human individual.

// revise units;
// "which is more than one, and more than two, but less than infinity.
// modulor; body measurement and proportions;

// sound options: 
// metronome: https://github.com/scottwhudson/metronome
// downloaded file: https://dchaplinsky.github.io/metronome/
// http://bl.ocks.org/wilson428/5471336
// https://codepen.io/div/pen/HwIvk


// notes on physical movement: BODY POSITIONS - my body. 

// start screen: 50% 50% chance of visiting a webpage? https://www.w3schools.com/js/tryit.asp?filename=tryjs_randomlink
// search term

// - - - - - - - - - - - - - - - - - - on google:


document.querySelector("body").style.filter="grayscale(100%)"; 

document.querySelector("#logo").style.transition= "4s left cubic-bezier(1,0,1,1)";
document.querySelector("#logo").style.left="calc(100% - 100px)";

document.getElementsByTagName("H1")[0].removeAttribute("class"); 
document.getElementById("myAnchor").removeAttribute("href"); 


document.querySelector("body").style.writingMode="vertical-lr";
document.querySelector("body").style.textOrientation="upright";
document.querySelector("body").style.lineHeight="150px";
document.querySelector("body").style.letterSpacing="150px";


document.querySelector("body").style.display="flex";
document.querySelector("body").style.justifyContent="space-around";
document.querySelector("body").style.alignItems="flex-start";

document.querySelector("#ires").style.transform="rotateZ(10deg)";


document.querySelector("html").style.background="conic-gradient(#fff 0%, #000 100%)";
document.querySelector("body").style.backgroundBlendMode="screen";

document.querySelector("#body").style.backgroundImage="url(https://upload.wikimedia.org/wikipedia/commons/c/c0/Computer_Workstation_Variables_cleanup.png)";
document.querySelector("#main").style.backgroundBlendMode="multiply";

document.querySelector("#body").style.backgroundRepeat="repeat";
document.querySelector("#body").style.backgroundRepeat="repeat space";
document.querySelector("#body").style.backgroundRepeat="round space";

document.querySelector("body").style.opacity="0.1";

document.querySelector("#body").style.transform="skewX(20deg)";
document.querySelector("#body").style.transform="matrix(1.0,2.0,3.0,4.0,5.0,6.0)";
document.querySelector("#gsr").style.transform= "matrix3d(1, 0, 0, 0, 1.02, 1.02, 0, 0.0019, 0, 0, 1, 0, 0, 0, 0, 1)";}


// augment scale of elements;

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


// translate;

function Moving () { 
    
    if (document.querySelector("body").style.transform=="translate(0)") {
        	(document.querySelector("body").style.transform="translate(100)")
        }
    else  { (document.querySelector("body").style.transform="translate(500)") 
        }
}

setInterval("moving()",800)


function  Neutral (x) {
    var str = document.getElementById(x).innerHTML; 
    var res = str.replace(/center/gi, "NEUTRALISING");
    document.getElementById(x).innerHTML = res;
}
//neutral ("ires")  // SCROLL



var delay="10"; 
var count='0';
var Texts=new Array();
//excercepts from choreographer Moriah Evans
Texts[0]="About the body";
Texts[1]="and about what dance can be or is.";
Texts[2]="";
Texts[4]="The boundaries of the body,";
Texts[5]="the edges of the limits of - inclusion - and - exclusion";
Texts[6]="before the binary of inside.";
Texts[7]="Contained, continuum. Corporeal.";
Texts[8]="Passed from body to body.";
Texts[9]="";
Texts[10]="Let’s move beyond identifiable dance forms.";
Texts[11]="Dance can invent what a body can do";
Texts[12]="Does your uterus move your pelvis versus your pelvis moving your uterus?";
Texts[13]="Movement passing through their spines, like a spiral.";
Texts[14]="Dancing bodies";
Texts[15]="Dancing bodies";
Texts[16]="Emergent bodies";
Texts[17]="or disobedient bodies.";
Texts[18]="The reactivation of the social body is a political project that begins with dancing."

function Topographical_Uncertainty(){
        document.querySelector('#').innerHTML = Texts[count]; //or: #searchboxinput
        count++;
        if(count==Texts.length){count='0';}
        setTimeout("centrifugal_or_other_forces()",delay*800);
} 


function Perimeter () {document.querySelector("body").style.background="radial-gradient(circle at 100%, #333, #333 50%, #eee 75%, #333 75%)"}


var xMax, yMax, xNeg=0, yNeg=1;

function Walk_the_Distance(){
    window.scrollBy(5 * xNeg, 5 * yNeg);
    if(xMax == window.scrollX)xNeg = xNeg * 1;
    if(yMax == window.scrollY)yNeg = xNeg * -1;
    scrolldelay = setTimeout(circulation_of_affects,100);
    console.log(window.scrollY);
    xMax = window.scrollX;
    yMax = window.scrollY;
}
// parar na console: clearTimeout(scrolldelay)

//My dance is my walking.

window.scroll(0, 1000);
window.scrollByLines(15); 

// - - - - - JS set interval = miliseconds
// - - - - - CSS Relative Lengths: 
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
// 1 m = 3779.5275590551 pixel --- 1 m = 3779.527559 px; 1 px = 0.000265 m 
// 5 m = 18897.637795276 pixel 
// 10 m = 37795.275590551 pixel --- 10 meter  =  37795.275593 pixel 
// 50 m = 188976.37795276 pixel --- 50 meter  =  188976.377967 pixel
// 100 m = 377952.75590551 pixel --- 100 meter  =  377952.755933 pixel
// 1000 m = 3779527.5590551 pixel 
// 1 meter [m] =39.370079 
// = inches / = 3.28084 
// 1m = 3ft 3.370079inches / 3.28083989501 feet / foot -- 196.850394 foot/ minute -- 11811.02364 foot/hour
// 0.001 meter/milisecond -- 59.999999 meter/minute
// = 2834.64576 points /= 9.842521 hand / = 8.748908 (cloth)
// = 4.97097 link (usually abbreviated as "l.", "li." or "lnk.")
// a unit of length formerly used in many English-speaking countries. 
// 1 link ≈ 201.167 652 millimetres (based on the pre-1959 imperial foot) 
// a link is exactly ​66⁄100 of a foot,[1] or exactly 7.92 inches or 20.1168 cm. 

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
r.style.border="2px solid";
r.style.borderColor = colors[colorIndex];
r.style.borderRadius="50%";
};  
//setInterval("Pulse(1)",1000)


var elements = document.getElementsByClassName("r");
function Random () {

for (i=0; i<elements.length; i++) {
    elements[i].style.width = Math.floor(Math.random() * 10) + '%';
    elements[i].style.borderWidth = Math.floor(Math.random() * 10) + 'px';
    }
}               
setInterval("Random ()", 600)


function Spacing(n) {
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
// Spacing(30)



// grid floor walking / pattern making

function Turn(n) {
var s =document.querySelector(".g:nth-child("+n+")"),
s = s.querySelector(".s");
s.style.transform="skew(10deg, 25deg)"
};
//turn(1)


function Re_turn(n) {
var t =document.querySelector(".g:nth-child("+n+")"),
t = t.querySelector(".s");
t.style.transform="skew(-10deg, -25deg)"
};
//re_turn(1)

// collumns and rows


function Off_Stage () {
    //document.querySelector("html").style.backgroundColor="black";   
	document.body.innerHTML = '';
	document.head.innerHTML = '';
}

// - - - - - - - - - - - - - - - - - - on maps:

// https://www.w3schools.com/graphics/google_maps_overlays.asp
// https://jobcb.github.io/choreography_edit_distances.html
