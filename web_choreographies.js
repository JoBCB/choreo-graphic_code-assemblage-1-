//new vocabulary: 
//Auxologic; Weight; Height; Proportions; Units; Body Index; Spacing
//Geometrised; Geometric_bias; Topographical_uncertainty;

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

// start screen: 50% 50% chance of visiting a webpage? https://www.w3schools.com/js/tryit.asp?filename=tryjs_randomlink
// search term

// - - - - - - - - - - - - - - - - - - on google:


document.querySelector("body").style.filter=“grayscale(100%)”; 

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

// augment scale of elements;

function inhale() {
    document.querySelector("body").style.transform="scale(0.2)"};

function exhale() {
    document.querySelector("body").style.transform="scale(4)"}; 

function breathing () { 
    
    if (document.querySelector("body").style.transform=="scale(1)") {
        	(document.querySelector("body").style.transform="scale(4)")
        }
    else  { (document.querySelector("body").style.transform="scale(1)") 
        }
}

setInterval("breathin()",800)


// translate;

function moving () { 
    
    if (document.querySelector("body").style.transform=="translate(0)") {
        	(document.querySelector("body").style.transform="translate(100)")
        }
    else  { (document.querySelector("body").style.transform="translate(500)") 
        }
}

setInterval("moving()",800)


function  neutral (x) {
    var str = document.getElementById(x).innerHTML; 
    var res = str.replace(/center/gi, "NEUTRALISING");
    document.getElementById(x).innerHTML = res;
}
//neutral ("ires")  // SCROLL



var delay="10"; //how many seconds
var count='0';
var Texts=new Array();
Texts[0]="I dreamed that I was balancing on the edge of a pit.";
Texts[1]="In my dancing I was balancing from orbit to orbit.";
Texts[2]="Or, rather, in decentering and deconstructing the - us.";
Texts[4]="I dreamed that I was balancing in the edge of a pit";
Texts[5]="What if it takes sensing the abyss, the edges of the limits of - inclusion - and - exclusion - before the binary of inside — outside, inclusion — exclusion.";
Texts[6]="...the edges of the limits of";
Texts[7]="If the exclusivity of the bubble is a lyric motif, the inclusivity of the web is an epic one.";
Texts[8]="When I awoke it seemed that I could have simply lowered my centre of balance.";
Texts[9]="...my centre of — balance.";
Texts[10]="I dreamed that I was balancing on the edge of a...";
Texts[11]="De volta ao ponto de que partiu.";
Texts[12]="Cyclical";
Texts[13]="The private circle; the public sphere. Spheres.";
Texts[14]="Circulation of affects";
Texts[15]="Micro - macro circulation";
Texts[16]="Circular, correr de boca em boca.";
Texts[17]="Correr de boca em boca.";
Texts[18]="Que volta ao ponto de que partiu.";

function centrifugal_or_other_forces(){
        document.querySelector('#text01').innerHTML = Texts[count]; //or: #searchboxinput
        count++;
        if(count==Texts.length){count='0';}
        setTimeout("centrifugal_or_other_forces()",delay*800);
} 


function perimeter () {document.querySelector("body").style.background="radial-gradient(circle at 100%, #333, #333 50%, #eee 75%, #333 75%)"}


var xMax, yMax, xNeg=0, yNeg=1;

function circulation_of_affects () {
    window.scrollBy(5 * xNeg, 5 * yNeg);
    if(xMax == window.scrollX)xNeg = xNeg * 1;
    if(yMax == window.scrollY)yNeg = xNeg * -1;
    scrolldelay = setTimeout(circulation_of_affects,100);
    console.log(window.scrollY);
    xMax = window.scrollX;
    yMax = window.scrollY;
}
// parar na console: clearTimeout(scrolldelay)

window.scroll(0, 1000);
window.scrollByLines(15); 




//math random for line thickness

var elements = document.getElementsByClassName("r");
function random () {

for (i=0; i<elements.length; i++) {
    elements[i].style.width = Math.floor(Math.random() * 10) + '%';
	elements[i].style.borderWidth = Math.floor(Math.random() * 10) + 'px';
	}
}				
random ()


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


function walk_the_distance() { 
document.querySelector("#gsr").style.transform= "matrix3d(1, 0, 0, 0, 1.02, 1.02, 0, 0.0019, 0, 0, 1, 0, 0, 0, 0, 1)";}
walk_the_distance()

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


function offstage () {
    //document.querySelector("html").style.backgroundColor="black";   
	document.body.innerHTML = '';
	document.head.innerHTML = '';
}

// - - - - - - - - - - - - - - - - - - on maps:

// https://www.w3schools.com/graphics/google_maps_overlays.asp

