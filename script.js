const app = document.getElementById("app");

let tries = 0;


function hearts(){

for(let i=0;i<20;i++){

let h=document.createElement("div");

h.className="fall";
h.innerHTML="❤️";

h.style.left=Math.random()*100+"%";

document.body.appendChild(h);


setTimeout(()=>{

h.remove();

},5000);

}

}




function start(){


app.innerHTML=`

<div class="card">

<h1>
💌 Birthday Adventure 💌
</h1>


<p>
Find my magic heart ❤️
</p>


<div id="heart" class="heart" onclick="catchHeart()">
❤️
</div>


</div>

`;


moveHeart();

}





function moveHeart(){

let heart=document.getElementById("heart");

if(!heart)return;


heart.style.left=
Math.random()*(window.innerWidth-100)+"px";


heart.style.top=
Math.random()*(window.innerHeight-100)+"px";


}





function catchHeart(){

tries++;


if(tries<3){

let text=
tries==1
?
"😜 Not so fast! Catch my heart!"
:
"🤭 Almost! One more try ❤️";


app.innerHTML=`

<div class="card">

<h1>
${text}
</h1>


<div id="heart" class="heart" onclick="catchHeart()">
❤️
</div>


</div>

`;


moveHeart();

return;

}



app.innerHTML=`

<div class="card">

<h1>
✨ You found my heart! ✨
</h1>


<p>
The adventure begins ❤️
</p>


<button onclick="openEnvelope()">
Open the envelope 💌
</button>


</div>

`;

}





function openEnvelope(){


app.innerHTML=`

<div class="card">

<h1>
💌 A secret letter
</h1>


<div class="envelope" onclick="openLetter(this)">

<div class="letterInside">
❤️
</div>

</div>


<p>
Click the envelope 💕
</p>


</div>

`;

}



function openLetter(el){

el.classList.add("open");


setTimeout(()=>{

password();

},1200);


}




function password(){


app.innerHTML=`

<div class="card">

<h1>
🔒 Secret Code
</h1>


<p>
Enter the special date ❤️
</p>


<input id="code"
placeholder="DD.MM"
style="
padding:15px;
font-size:20px;
border-radius:20px;
border:2px solid pink;
text-align:center;
">


<button onclick="check()">
Unlock 🔓
</button>


<p id="error"></p>


</div>

`;

}




function check(){


let code=document.getElementById("code").value;


if(code=="09.08" || code=="0908"){

letter();

}

else{

document.getElementById("error").innerHTML=
"Wrong date ❤️";

}


}





function letter(){


hearts();


app.innerHTML=`

<div class="card">


<div class="characters">


<img src="dudu.png">


<div class="letter">

<h1>
💖 Happy Birthday My Duduzilla 💖
</h1>


<p>

Happy Birthday! 🎂

<br><br>

I made this little adventure only for you.

<br><br>

You are very special ❤️

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
🍌 Minions message
</h1>


<img class="bigImage" src="minions.png">


<p>
PAPOIIII 🍌❤️
<br>
Happy Birthday!
</p>


<button onclick="catOne()">
Next 🐱
</button>


</div>

`;

}





function catOne(){


app.innerHTML=`

<div class="card">

<h1>
🐱 For my lovely kitty
</h1>


<img class="bigImage" src="mew.png">


<p>

A cute little wish for my lovely kitty 🐱❤️

</p>


<button onclick="catTwo()">
Next 🐾
</button>


</div>

`;

}




function catTwo(){


app.innerHTML=`

<div class="card">

<h1>
🐾 More cuddles
</h1>


<img class="bigImage" src="mew2.png">


<p>

Sending you endless hugs and warm paws ❤️

</p>


<button onclick="gift()">
Gift 🎁
</button>


</div>

`;

}





function gift(){


app.innerHTML=`

<div class="card">

<h1>
🎁 One last surprise
</h1>


<div style="font-size:100px">
🎁
</div>


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
🎂 Happy Birthday 🎂
</h1>


<div class="cakePhoto">

<img src="cake.gif">

</div>


<p>
Make a wish ✨
</p>


<p>
❤️🎉 You completed the adventure 🎉❤️
</p>


</div>

`;

}





start();
