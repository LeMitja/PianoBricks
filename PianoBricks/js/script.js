var cmaj = new sound("Sounds/c.mp3");
var dmaj = new sound("Sounds/d.mp3");
var emaj = new sound("Sounds/e.mp3");
var fmaj = new sound("Sounds/f.mp3");
var gmaj = new sound("Sounds/g.mp3");
var amaj = new sound("Sounds/a.mp3");
var bmaj = new sound("Sounds/b.mp3");
var level = 1;
var intTimer;
var numofempty = 0;
var intDraw;
var start = true;
var WIDTH= 1000;
var intDrawChord;
var HEIGHT = 800;
var fullsize = 56;
var tocke = 0;
var canvas = document.getElementById("pl");
  var ctx = canvas.getContext("2d");
document.getElementById("next").disabled = true;
document.getElementById("next").style.opacity = "0";
document.getElementById("chord").style.opacity = "0";
about();

function star() {
  if (level==8)
  {completed();}
  else{
    document.getElementById("chord").style.opacity = "0";
    start = true
  drawIt();
  }
  
}


function completed(){
  clearInterval(intTimer);
  Swal.fire({
    title: "<h4>CONGRATULATIONS!</h4>",
    text: "You have completed the game. Now you know how to play the basic major chords on piano yay! If you want, you can rate your experience by clicking on the button below.",
    confirmButtonText: "RATE",
    confirmButtonColor: '#593c02'
}).then((result) => {
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
})
$(".swal2-confirm").css('font-family','Josefin Sans, sans-serif');
}

function about() {
  Swal.fire({
      title: "<h4>HOW AND WHY</h4>",
      text: "This website was created by Mitja Leban for a school project. In this game of Piano bricks you can have fun and learn basic chords on the piano. Enjoy :D",
      confirmButtonText: "START",
      confirmButtonColor: '#593c02'
  }).then((result) => {
      star();
  })
  $(".swal2-confirm").css('font-family','Josefin Sans, sans-serif');
}

function endLevel(){
  clearInterval(intDraw);
  clearInterval(intTimer);
  switch (level) {
    case 1:
        cmaj.play();
        break;
    case 2:
      dmaj.play();
        break;
    case 3:
      emaj.play();
        break;
    case 4:
      fmaj.play();
        break;
    case 5:
      gmaj.play();
        break;
    case 6:
      amaj.play();
        break;
        case 7:
      bmaj.play();
        break;
    default:
        break;
}
  document.getElementById("next").disabled = false;
  document.getElementById("next").style.opacity = "1";
  intDrawChord = setInterval(ch, 10);
}

function ch(){
  var chord = new Image();
  switch (level) {
    case 1:
      chord.src="img/Cmajor.png";
      ctx.beginPath();
      ctx.drawImage(chord,25, 50, 950, 650);
      ctx.fill();
      ctx.closePath();
        break;
    case 2:
      chord.src="img/Dmajor.png";
      ctx.beginPath();
      ctx.drawImage(chord,25, 50, 950, 650);
      ctx.fill();
      ctx.closePath();
        break;
    case 3:
      chord.src="img/Emajor.png";
      ctx.beginPath();
      ctx.drawImage(chord,25, 50, 950, 650);
      ctx.fill();
      ctx.closePath();
        break;
    case 4:
      chord.src="img/Fmajor.png";
      ctx.beginPath();
      ctx.drawImage(chord,250, 300, 550, 200);
      ctx.fill();
      ctx.closePath();
        break;
    case 5:
      chord.src="img/Gmajor.png";
      ctx.beginPath();
      ctx.drawImage(chord,250, 300, 550, 200);
      ctx.fill();
      ctx.closePath();
        break;
    case 6:
      chord.src="img/Amajor.png";
      ctx.beginPath();
      ctx.drawImage(chord,250, 300, 550, 200);
      ctx.fill();
      ctx.closePath();
        break;
        case 7:
          chord.src="img/Bmajor.png";
          ctx.beginPath();
          ctx.drawImage(chord,250, 300, 550, 200);
          ctx.fill();
          ctx.closePath();
        break;
    default:
        break;
}

}

function nextLevel(){
  clearInterval (intDrawChord);
  $("#chord").html("");
  document.getElementById("next").disabled = true;
  document.getElementById("next").style.opacity = "0";
  level=level+1;
  star();
}

function sotp(){
        start=false;
        clearInterval(intTimer);
        clearInterval(intDraw);
        lose();
}
function lose() {
  Swal.fire({
      title: "<h4>OH NO!</h4>",
      text: "Looks like you lost. But don't let this stop you! Be persistant and you will get better!",
      confirmButtonText: "TRY AGAIN",
      confirmButtonColor: '#593c02'
  }).then((result) => {
      restart();
  })
  $(".swal2-confirm").css('font-family','Josefin Sans, sans-serif');
}

function rect(x,y,w,h) {
  ctx.beginPath();
  ctx.rect(x,y,w,h);
  ctx.closePath();
  ctx.fill();
}

function restart(){
  start = true
  numofempty = 0;
  level = 1
  lives = 3
  $("#lives").html("LIVES: "+lives);
  drawIt();
}


      function drawIt() {
        numofempty = 0;
        var x = 150;
        var y = 250;
        var dx = 7;
        var dy = 7;
        var sekunde;
        var sekundeI;
        var minuteI;
        var izpisTimer;
        var paddlex;
        var paddleh;
        var canvasMinX;
        var canvasMaxX;
        var lives = 3;
        var paddlew;
        var r=10;
        var f = r/2;
        var rightDown = false;
        var leftDown = false;
        var paddle = new Image();
paddle.src="img/pianoKeys.png";

        var bricks;
        var NROWS;
        var NCOLS;
        var BRICKWIDTH;
        var BRICKHEIGHT;
        var PADDING;
        init();

        function timer(){
          if (start)
          {
          sekunde++;
          sekundeI = ((sekundeI = (sekunde % 60)) > 9) ? sekundeI : "0"+sekundeI;
          minuteI = ((minuteI = Math.floor(sekunde / 60)) > 9) ? minuteI : "0"+minuteI;
          izpisTimer = minuteI + ":" + sekundeI;
          $("#time").html(izpisTimer);
          }
          else{
            sekunde=0;
            izpisTimer = "00:00";
            $("#time").html(izpisTimer);
            }
          }
          

        function initbricksC() { //inicializacija opek za C akord - polnjenje v tabelo
          NROWS = 7;
          NCOLS = 8;
          BRICKWIDTH = (1000/NCOLS) ;
          BRICKHEIGHT = 25;
          PADDING = 1;
          bricks = new Array(NROWS);
          for (i=0; i < NROWS; i++) {
            bricks[i] = new Array(NCOLS);
            // for (j=0; j < NCOLS; j++) {
            //   bricks[i][j] = 1;
            // }
          }
          bricks[0][0] = 1;bricks[0][1] = 1;bricks[0][2] = 1;bricks[0][3] = 2;bricks[0][4] = 2;bricks[0][5] = 1;bricks[0][6] = 1;bricks[0][7] = 1;
          bricks[1][0] = 1;bricks[1][1] = 1;bricks[1][2] = 1;bricks[1][3] = 2;bricks[1][4] = 2;bricks[1][5] = 1;bricks[1][6] = 1;bricks[1][7] = 1;  // KONCAN
          bricks[2][0] = 1;bricks[2][1] = 1;bricks[2][2] = 1;bricks[2][3] = 2;bricks[2][4] = 1;bricks[2][5] = 1;bricks[2][6] = 1;bricks[2][7] = 1;
          bricks[3][0] = 1;bricks[3][1] = 1;bricks[3][2] = 1;bricks[3][3] = 2;bricks[3][4] = 1;bricks[3][5] = 1;bricks[3][6] = 1;bricks[3][7] = 1;
          bricks[4][0] = 1;bricks[4][1] = 1;bricks[4][2] = 1;bricks[4][3] = 2;bricks[4][4] = 1;bricks[4][5] = 1;bricks[4][6] = 1;bricks[4][7] = 1;
          bricks[5][0] = 1;bricks[5][1] = 1;bricks[5][2] = 1;bricks[5][3] = 2;bricks[5][4] = 2;bricks[5][5] = 1;bricks[5][6] = 1;bricks[5][7] = 1;
          bricks[6][0] = 1;bricks[6][1] = 1;bricks[6][2] = 1;bricks[6][3] = 2;bricks[6][4] = 2;bricks[6][5] = 1;bricks[6][6] = 1;bricks[6][7] = 1;

          
        }
        function initbricksD() { //inicializacija opek za D akord - polnjenje v tabelo
          NROWS = 7;
          NCOLS = 8;
          BRICKWIDTH = (1000/NCOLS) ;
          BRICKHEIGHT = 25;
          PADDING = 1;
          bricks = new Array(NROWS);
          for (i=0; i < NROWS; i++) {
            bricks[i] = new Array(NCOLS);
            // for (j=0; j < NCOLS; j++) {
            //   bricks[i][j] = 1;
            // }
          }
          bricks[0][0] = 1;bricks[0][1] = 1;bricks[0][2] = 1;bricks[0][3] = 2;bricks[0][4] = 2;bricks[0][5] = 1;bricks[0][6] = 1;bricks[0][7] = 1;
          bricks[1][0] = 1;bricks[1][1] = 1;bricks[1][2] = 1;bricks[1][3] = 2;bricks[1][4] = 2;bricks[1][5] = 2;bricks[1][6] = 1;bricks[1][7] = 1;  //KONCAN
          bricks[2][0] = 1;bricks[2][1] = 1;bricks[2][2] = 1;bricks[2][3] = 2;bricks[2][4] = 1;bricks[2][5] = 2;bricks[2][6] = 1;bricks[2][7] = 1;
          bricks[3][0] = 1;bricks[3][1] = 1;bricks[3][2] = 1;bricks[3][3] = 2;bricks[3][4] = 1;bricks[3][5] = 2;bricks[3][6] = 1;bricks[3][7] = 1;
          bricks[4][0] = 1;bricks[4][1] = 1;bricks[4][2] = 1;bricks[4][3] = 2;bricks[4][4] = 1;bricks[4][5] = 2;bricks[4][6] = 1;bricks[4][7] = 1;
          bricks[5][0] = 1;bricks[5][1] = 1;bricks[5][2] = 1;bricks[5][3] = 2;bricks[5][4] = 2;bricks[5][5] = 2;bricks[5][6] = 1;bricks[5][7] = 1;
          bricks[6][0] = 1;bricks[6][1] = 1;bricks[6][2] = 1;bricks[6][3] = 2;bricks[6][4] = 2;bricks[6][5] = 1;bricks[6][6] = 1;bricks[6][7] = 1;
          
        }
        function initbricksE() { //inicializacija opek za E akord - polnjenje v tabelo
          NROWS = 7;
          NCOLS = 8;
          BRICKWIDTH = (1000/NCOLS) ;
          BRICKHEIGHT = 25;
          PADDING = 1;
          bricks = new Array(NROWS);
          for (i=0; i < NROWS; i++) {
            bricks[i] = new Array(NCOLS);
            // for (j=0; j < NCOLS; j++) {
            //   bricks[i][j] = 1;
            // }
          }
          bricks[0][0] = 1;bricks[0][1] = 1;bricks[0][2] = 1;bricks[0][3] = 2;bricks[0][4] = 2;bricks[0][5] = 2;bricks[0][6] = 1;bricks[0][7] = 1;
          bricks[1][0] = 1;bricks[1][1] = 1;bricks[1][2] = 1;bricks[1][3] = 2;bricks[1][4] = 2;bricks[1][5] = 2;bricks[1][6] = 1;bricks[1][7] = 1;
          bricks[2][0] = 1;bricks[2][1] = 1;bricks[2][2] = 1;bricks[2][3] = 2;bricks[2][4] = 1;bricks[2][5] = 1;bricks[2][6] = 1;bricks[2][7] = 1;
          bricks[3][0] = 1;bricks[3][1] = 1;bricks[3][2] = 1;bricks[3][3] = 2;bricks[3][4] = 2;bricks[3][5] = 1;bricks[3][6] = 1;bricks[3][7] = 1;
          bricks[4][0] = 1;bricks[4][1] = 1;bricks[4][2] = 1;bricks[4][3] = 2;bricks[4][4] = 1;bricks[4][5] = 1;bricks[4][6] = 1;bricks[4][7] = 1;   //KONCAN
          bricks[5][0] = 1;bricks[5][1] = 1;bricks[5][2] = 1;bricks[5][3] = 2;bricks[5][4] = 2;bricks[5][5] = 2;bricks[5][6] = 1;bricks[5][7] = 1;
          bricks[6][0] = 1;bricks[6][1] = 1;bricks[6][2] = 1;bricks[6][3] = 2;bricks[6][4] = 2;bricks[6][5] = 2;bricks[6][6] = 1;bricks[6][7] = 1;
          
        }
        function initbricksF() { //inicializacija opek za F akord - polnjenje v tabelo
          NROWS = 7;
          NCOLS = 8;
          BRICKWIDTH = (1000/NCOLS) ;
          BRICKHEIGHT = 25;
          PADDING = 1;
          bricks = new Array(NROWS);
          for (i=0; i < NROWS; i++) {
            bricks[i] = new Array(NCOLS);
            // for (j=0; j < NCOLS; j++) {
            //   bricks[i][j] = 1;
            // }
          }
          bricks[0][0] = 1;bricks[0][1] = 1;bricks[0][2] = 1;bricks[0][3] = 2;bricks[0][4] = 2;bricks[0][5] = 2;bricks[0][6] = 1;bricks[0][7] = 1;
          bricks[1][0] = 1;bricks[1][1] = 1;bricks[1][2] = 1;bricks[1][3] = 2;bricks[1][4] = 2;bricks[1][5] = 2;bricks[1][6] = 1;bricks[1][7] = 1;
          bricks[2][0] = 1;bricks[2][1] = 1;bricks[2][2] = 1;bricks[2][3] = 2;bricks[2][4] = 1;bricks[2][5] = 1;bricks[2][6] = 1;bricks[2][7] = 1;
          bricks[3][0] = 1;bricks[3][1] = 1;bricks[3][2] = 1;bricks[3][3] = 2;bricks[3][4] = 2;bricks[3][5] = 1;bricks[3][6] = 1;bricks[3][7] = 1;  //KONCAN
          bricks[4][0] = 1;bricks[4][1] = 1;bricks[4][2] = 1;bricks[4][3] = 2;bricks[4][4] = 2;bricks[4][5] = 1;bricks[4][6] = 1;bricks[4][7] = 1;
          bricks[5][0] = 1;bricks[5][1] = 1;bricks[5][2] = 1;bricks[5][3] = 2;bricks[5][4] = 1;bricks[5][5] = 1;bricks[5][6] = 1;bricks[5][7] = 1;
          bricks[6][0] = 1;bricks[6][1] = 1;bricks[6][2] = 1;bricks[6][3] = 2;bricks[6][4] = 1;bricks[6][5] = 1;bricks[6][6] = 1;bricks[6][7] = 1;
          
        }
        function initbricksG() { //inicializacija opek za G akord - polnjenje v tabelo
          NROWS = 7;
          NCOLS = 8;
          BRICKWIDTH = (1000/NCOLS) ;
          BRICKHEIGHT = 25;
          PADDING = 1;
          bricks = new Array(NROWS);
          for (i=0; i < NROWS; i++) {
            bricks[i] = new Array(NCOLS);
            // for (j=0; j < NCOLS; j++) {
            //   bricks[i][j] = 1;
            // }
          }
          bricks[0][0] = 1;bricks[0][1] = 1;bricks[0][2] = 2;bricks[0][3] = 2;bricks[0][4] = 2;bricks[0][5] = 2;bricks[0][6] = 1;bricks[0][7] = 1;
          bricks[1][0] = 1;bricks[1][1] = 1;bricks[1][2] = 2;bricks[1][3] = 2;bricks[1][4] = 2;bricks[1][5] = 2;bricks[1][6] = 1;bricks[1][7] = 1;
          bricks[2][0] = 1;bricks[2][1] = 1;bricks[2][2] = 2;bricks[2][3] = 1;bricks[2][4] = 1;bricks[2][5] = 1;bricks[2][6] = 1;bricks[2][7] = 1;
          bricks[3][0] = 1;bricks[3][1] = 1;bricks[3][2] = 2;bricks[3][3] = 1;bricks[3][4] = 1;bricks[3][5] = 1;bricks[3][6] = 1;bricks[3][7] = 1;  //KONCAN
          bricks[4][0] = 1;bricks[4][1] = 1;bricks[4][2] = 2;bricks[4][3] = 1;bricks[4][4] = 2;bricks[4][5] = 2;bricks[4][6] = 1;bricks[4][7] = 1;
          bricks[5][0] = 1;bricks[5][1] = 1;bricks[5][2] = 2;bricks[5][3] = 1;bricks[5][4] = 1;bricks[5][5] = 2;bricks[5][6] = 1;bricks[5][7] = 1;
          bricks[6][0] = 1;bricks[6][1] = 1;bricks[6][2] = 2;bricks[6][3] = 2;bricks[6][4] = 2;bricks[6][5] = 2;bricks[6][6] = 1;bricks[6][7] = 1;
          
        }
        function initbricksA() { //inicializacija opek za C akord - polnjenje v tabelo
          NROWS = 7;
          NCOLS = 8;
          BRICKWIDTH = (1000/NCOLS) ;
          BRICKHEIGHT = 25;
          PADDING = 1;
          bricks = new Array(NROWS);
          for (i=0; i < NROWS; i++) {
            bricks[i] = new Array(NCOLS);
            // for (j=0; j < NCOLS; j++) {
            //   bricks[i][j] = 1;
            // }
          }
          bricks[0][0] = 1;bricks[0][1] = 1;bricks[0][2] = 1;bricks[0][3] = 2;bricks[0][4] = 2;bricks[0][5] = 1;bricks[0][6] = 1;bricks[0][7] = 1;
          bricks[1][0] = 1;bricks[1][1] = 1;bricks[1][2] = 2;bricks[1][3] = 1;bricks[1][4] = 1;bricks[1][5] = 2;bricks[1][6] = 1;bricks[1][7] = 1;
          bricks[2][0] = 1;bricks[2][1] = 2;bricks[2][2] = 1;bricks[2][3] = 1;bricks[2][4] = 1;bricks[2][5] = 1;bricks[2][6] = 2;bricks[2][7] = 1;
          bricks[3][0] = 1;bricks[3][1] = 2;bricks[3][2] = 2;bricks[3][3] = 2;bricks[3][4] = 2;bricks[3][5] = 2;bricks[3][6] = 2;bricks[3][7] = 1;  //KONCAN
          bricks[4][0] = 1;bricks[4][1] = 2;bricks[4][2] = 1;bricks[4][3] = 1;bricks[4][4] = 1;bricks[4][5] = 1;bricks[4][6] = 2;bricks[4][7] = 1;
          bricks[5][0] = 1;bricks[5][1] = 2;bricks[5][2] = 1;bricks[5][3] = 1;bricks[5][4] = 1;bricks[5][5] = 1;bricks[5][6] = 2;bricks[5][7] = 1;
          bricks[6][0] = 2;bricks[6][1] = 1;bricks[6][2] = 1;bricks[6][3] = 1;bricks[6][4] = 1;bricks[6][5] = 1;bricks[6][6] = 1;bricks[6][7] = 2;
          
        }
        function initbricksB() { //inicializacija opek za B akord - polnjenje v tabelo
          NROWS = 7;
          NCOLS = 8;
          BRICKWIDTH = (1000/NCOLS) ;
          BRICKHEIGHT = 25;
          PADDING = 1;
          bricks = new Array(NROWS);
          for (i=0; i < NROWS; i++) {
            bricks[i] = new Array(NCOLS);
            // for (j=0; j < NCOLS; j++) {
            //   bricks[i][j] = 1;
            // }
          }
          bricks[0][0] = 1;bricks[0][1] = 1;bricks[0][2] = 2;bricks[0][3] = 2;bricks[0][4] = 2;bricks[0][5] = 1;bricks[0][6] = 1;bricks[0][7] = 1;
          bricks[1][0] = 1;bricks[1][1] = 1;bricks[1][2] = 2;bricks[1][3] = 1;bricks[1][4] = 2;bricks[1][5] = 1;bricks[1][6] = 1;bricks[1][7] = 1;
          bricks[2][0] = 1;bricks[2][1] = 1;bricks[2][2] = 2;bricks[2][3] = 1;bricks[2][4] = 2;bricks[2][5] = 1;bricks[2][6] = 1;bricks[2][7] = 1;  //KONCAN
          bricks[3][0] = 1;bricks[3][1] = 1;bricks[3][2] = 2;bricks[3][3] = 2;bricks[3][4] = 1;bricks[3][5] = 1;bricks[3][6] = 1;bricks[3][7] = 1;
          bricks[4][0] = 1;bricks[4][1] = 1;bricks[4][2] = 2;bricks[4][3] = 1;bricks[4][4] = 2;bricks[4][5] = 1;bricks[4][6] = 1;bricks[4][7] = 1;
          bricks[5][0] = 1;bricks[5][1] = 1;bricks[5][2] = 2;bricks[5][3] = 1;bricks[5][4] = 2;bricks[5][5] = 1;bricks[5][6] = 1;bricks[5][7] = 1;
          bricks[6][0] = 1;bricks[6][1] = 1;bricks[6][2] = 2;bricks[6][3] = 2;bricks[6][4] = 2;bricks[6][5] = 1;bricks[6][6] = 1;bricks[6][7] = 1;
          
        }

        function init_mouse() {
          //canvasMinX = $("#canvas").offset().left;
          canvasMinX = $("canvas").offset().left;
          canvasMaxX = canvasMinX + WIDTH/1.33;
        }
        init_mouse();
        function init_paddle() {
        paddlex = 1000 / 2;
        paddleh = 50;
        paddlew = 250;
      }
      init_paddle();
      

      function onMouseMove(evt) {
        if (evt.pageX > canvasMinX && evt.pageX < canvasMaxX) {
          paddlex = evt.pageX - canvasMinX;
        }
      }
      $(document).mousemove(onMouseMove);

      //nastavljanje leve in desne tipke
      function onKeyDown(evt) {
        if (evt.keyCode == 39)
      rightDown = true;
        else if (evt.keyCode == 37) leftDown = true;
      }
      function onKeyUp(evt) {
        if (evt.keyCode == 39)
      rightDown = false;
        else if (evt.keyCode == 37) leftDown = false;
      }
      $(document).keydown(onKeyDown);
      $(document).keyup(onKeyUp); 
                function init() {
                  switch (level) {
                    case 1:
                        initbricksC();
                        break;
                    case 2:
                      initbricksD();
                        break;
                    case 3:
                      initbricksE();
                        break;
                    case 4:
                      initbricksF();
                        break;
                    case 5:
                      initbricksG();
                        break;
                    case 6:
                      initbricksA();
                        break;
                        case 7:
                      initbricksB();
                        break;
                    default:
                        break;
                }
                  $("#points").html("POINTS: "+tocke);
                  sekunde = 0;
                  izpisTimer = "00:00";
                  intTimer = setInterval(timer, 1000);
                canvas=document.getElementById('pl');
                ctx = canvas.getContext('2d');
                ctx.strokeStyle = 'rgba(89, 60, 2, 0.945)';
                intDraw = setInterval(draw, 10); 
                }
                function draw() {
                  ctx.fillStyle = 'rgb(89, 60, 2)';
                        ctx.clearRect(0,0,1000,8000);
                        ctx.beginPath();
                        ctx.arc(x, y, r, 0, Math.PI*2, true);
                        //premik ploščice levo in desno
                        if (rightDown && paddlex<1000-paddlew) 
                                paddlex += 7;
                        else if (leftDown && paddlex>0) 
                                paddlex -= 7;
                        else
                        {
                          if(paddlex<0)
                          {
                            paddlex=0;
                          }
                          else if(paddlex+paddlew>WIDTH)
                          paddlex=WIDTH-paddlew;
                        }
                        ctx.drawImage(paddle,paddlex, 800-paddleh, paddlew, paddleh);
                        ctx.closePath();
                        ctx.fill();
                        ctx.beginPath();
                        
                        ctx.rect(paddlex, HEIGHT-paddleh, paddlew, paddleh);

                            //riši opeke
                              for (i=0; i < NROWS; i++) {
                                for (j=0; j < NCOLS; j++) {
                                  if (bricks[i][j] == 1) {
                                    ctx.fillStyle = 'rgb(89, 60, 2)';
                                    rect((j * (BRICKWIDTH + PADDING)) + PADDING,
                                        (i * (BRICKHEIGHT + PADDING)) + PADDING,
                                        BRICKWIDTH, BRICKHEIGHT);
                                        
                                  }
                                  else if (bricks[i][j] == 2)
                                  {
                                    ctx.fillStyle = 'rgb(219, 9, 9)';
                                    rect((j * (BRICKWIDTH + PADDING)) + PADDING,
                                  (i * (BRICKHEIGHT + PADDING)) + PADDING,
                                  BRICKWIDTH, BRICKHEIGHT);
                                  
                                }
                                  
                                }
                              }
                              // ctx.fill();
                              ctx.drawImage(paddle,paddlex, 800-paddleh, paddlew, paddleh);

                              rowheight = BRICKHEIGHT + PADDING + f/2; 
                              colwidth = BRICKWIDTH + PADDING + f/2;
                              row = Math.floor(y/rowheight);
                              col = Math.floor(x/colwidth);
                              if (y < NROWS * rowheight && row >= 0 && col >= 0 && bricks[row][col] != 0) {
                                dy = -dy;
                                bricks[row][col] = bricks[row][col]-1;
                                
                                tocke += 1; //v primeru, da imajo opeko večjo utež lahko prištevate tudi npr. 2 ali 3; pred tem bi bilo smiselno dodati še kakšen pogoj, ki bi signaliziral mesta opek, ki imajo višjo vrednost
                                $("#points").html("POINTS: "+tocke);
                                if (bricks[row][col] == 0)
                                     {numofempty = numofempty+1;}
                            }
                            if (numofempty == fullsize)
                            {
                              switch (level) {
                                case 1:
                                  $("#chord").html("Chord: Cmajor");
                                  
                                    break;
                                case 2:
                                  $("#chord").html("Chord: Dmajor");
                                    break;
                                case 3:
                                  $("#chord").html("Chord: Emajor");
                                    break;
                                case 4:
                                  $("#chord").html("Chord: Fmajor");
                                    break;
                                case 5:
                                  $("#chord").html("Chord: Gmajor");
                                    break;
                                case 6:
                                  $("#chord").html("Chord: Amajor");
                                    break;
                                    case 7:
                                      $("#chord").html("Chord: Bmajor");
                                    break;
                                default:
                                    break;
                            }
                            document.getElementById("chord").style.opacity = "1";
                             
                              ctx.clearRect(0, 0, WIDTH, HEIGHT);
                              endLevel();
                            }
                        
                        if (x + dx > 1000 -r|| x + dx < r)
                        
                        dx = -dx;
                        
                        if ( y + dy < r)
                        dy = -dy;

                        else if (y + dy > 800-(r+paddleh)) {
                          
                          lives = lives--;
                                if (x > paddlex && x < paddlex + paddlew)
                                  {
                                  dx = 8 * ((x-(paddlex+paddlew/2))/paddlew);
                                  dy = -dy;
                                  start=true;
                                  }
                                else if(y+dy>800-r && lives==0){
                                  //Kdr zgubiš use lajfe
                                  ctx.clearRect(0, 0, WIDTH, HEIGHT);
                                  sotp();
                                }
                                else if(y+dy>800-r){
                                  lives = lives-1;
                                  dy = -dy;
                                  $("#lives").html("LIVES: "+lives);
                                }
                                  
                                  
                              }
                            
                        x += dx;
                        y += dy;
                        
                        
                        
                        }
                
                
                
                      }
                      function sound(src) {
                        this.sound = document.createElement("audio");
                        this.sound.src = src;
                        this.sound.setAttribute("preload", "auto");
                        this.sound.setAttribute("controls", "none");
                        this.sound.style.display = "none";
                        document.body.appendChild(this.sound);
                        this.play = function(){
                            this.sound.play();
                        }
                        this.stop = function(){
                            this.sound.pause();
                        }    
                    }