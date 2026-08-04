const app = document.getElementById("app");


function hearts(){

for(let i=0;i<8;i++){

let h=document.createElement("div");

h.className="falling-heart";
h.innerHTML="❤️";

h.style.left=Math.random()*100+"%";
h.style.animationDelay=Math.random()*5+"s";

document.body.appendChild(h);

}

}


let heartClicks = 0;


function start(){

app.innerHTML=`

<div class="card">

<h1>
💌 Birthday Adventure 💌
</h1>

<p>
Find the magic heart ❤️
</p>

<div id="movingHeart" class="heart" onclick="findHeart()">
❤️
</div>

</div>

`;

moveHeart();

}


function moveHeart(){

let heart=document.getElementById("movingHeart");

if(!heart) return;


heart.style.position="fixed";


let x = Math.random() * (window.innerWidth - 120);

let y = Math.random() * (window.innerHeight - 120);


heart.style.left = x + "px";

heart.style.top = y + "px";


heart.style.transition="0.4s";

}




function findHeart(){

heartClicks++;


if(heartClicks < 3){

moveHeart();

return;

}


app.innerHTML=`

<div class="card">

<h1>
✨ You found it! ✨
</h1>


<p>
The adventure begins ❤️
</p>


<button onclick="envelope()">
Open the envelope 💌
</button>


</div>

`;

}



function envelope(){

app.innerHTML=`

<div class="card">

<h1>
💌 A mysterious letter
</h1>


<div class="envelope" onclick="password()">

<div class="paper">
❤️
</div>

</div>


<p>
Click the envelope
</p>


</div>

`;

}



function password(){

app.innerHTML=`

<div class="card">

<h1>
🔒 Secret Code
</h1>


<p>
Only Duduzilla knows this special date ❤️
<br>
Hint: DD.MM 🎂
</p>


<input id="code"
placeholder="DD.MM"
style="
padding:12px;
font-size:20px;
border-radius:20px;
text-align:center;
border:2px solid pink;
">


<button onclick="checkCode()">
Unlock 🔓
</button>


<p id="error"></p>


</div>

`;

}



function checkCode(){

let c=document.getElementById("code").value;


if(c=="09.08" || c=="0908"){

firstLetter();

}

else{

document.getElementById("error").innerHTML=
"❌ Try again ❤️";

}

}



function firstLetter(){

hearts();


app.innerHTML=`

<div class="card">

<div class="characters">

<img src="dudu.png">


<div>

<h1>
💖 Happy Birthday My Duduzilla 💖
</h1>


<p>

Happy Birthday! 🎂

<br><br>

I created this little adventure only for you.

<br><br>

You are a very special person ❤️

<br><br>

More surprises are waiting...

</p>


<button onclick="minions()">
Continue 💕
</button>


</div>


<img src="bubu.png">


</div>

</div>

`;

}



function minions(){


app.innerHTML=`

<div class="card">

<h1>
🍌 Minions have a message!
</h1>


<img class="bigImage" src="minions.png">


<p>
Bananaaaa! 🍌
<br>
Happy Birthday! ❤️
</p>


<button onclick="cats()">
Next 🐱
</button>


</div>

`;

}




function cats(){


app.innerHTML=`

<div class="card">

<h1>
🐱 A little cat surprise
</h1>


<img class="bigImage" src="mew.png">


<p>
A cute little wish from a cute little friend ❤️
</p>


<button onclick="cats2()">
Next 🐾
</button>


</div>

`;

}




function cats2(){


app.innerHTML=`

<div class="card">

<h1>
🐱 Another surprise
</h1>


<img class="bigImage" src="mew2.png">


<p>
More love is coming ❤️
</p>


<button onclick="gift()">
Open gift 🎁
</button>


</div>

`;

}




function gift(){


app.innerHTML=`

<div class="card">

<h1>
🎁 A special gift
</h1>


<div style="font-size:100px">
🎁
</div>


<p>
Click for the final surprise...
</p>


<button onclick="cake()">
Open 🎂
</button>


</div>

`;

}




function cake(){


let music=document.getElementById("birthdayMusic");

if(music){
music.play();
}


hearts();


app.innerHTML=`

<div class="card">

<h1>
🎂 Happy Birthday! 🎂
</h1>


<div style="font-size:100px">
🧁
</div>


<p>
Make a wish ✨
</p>


<h1>
🎆❤️🎆
</h1>


<p>
You completed the adventure 💖
</p>


</div>

`;

}



start();
