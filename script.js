const app = document.getElementById("app");

let tries = 0;



function effects(){

for(let i=0;i<15;i++){

let c=document.createElement("div");

c.className="confetti";

c.innerHTML="🎉";

c.style.left=Math.random()*100+"%";

document.body.appendChild(c);


setTimeout(()=>c.remove(),5000);

}


for(let i=0;i<6;i++){

let b=document.createElement("div");

b.className="balloon";

b.innerHTML="🎈";

b.style.left=Math.random()*100+"%";

b.style.animationDelay=Math.random()*5+"s";

document.body.appendChild(b);

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

let h=document.getElementById("heart");

if(!h)return;


h.style.left=Math.random()*(window.innerWidth-100)+"px";

h.style.top=Math.random()*(window.innerHeight-100)+"px";

}





function catchHeart(){

tries++;


if(tries<3){


let text=

tries===1

?

"😜 Too fast! Catch my heart ❤️"

:

"🤭 Almost! One more try 💖";



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
Now the real surprise begins 💖
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
Click the envelope
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


<input id="code" placeholder="DD.MM">


<button onclick="checkCode()">
Unlock 🔓
</button>


<p id="error"></p>

</div>

`;

}





function checkCode(){

let value=document.getElementById("code").value;


if(value==="09.08" || value==="0908"){

firstLetter();

}

else{

document.getElementById("error").innerHTML=
"Try again ❤️";

}

}





function firstLetter(){

effects();


app.innerHTML=`

<div class="card">


<div class="characters">


<img src="dudu.gif">


<div>


<h1>
💖 Happy Birthday My Duduzilla 💖
</h1>


<p>

Happy Birthday! 🎂

<br><br>

I created this little adventure especially for you. I RLLY TRYIED TO DO THIS and i hope it works...

<br><br>

ME BOMBOCLAAAAAAT ❤️

</p>


<button onclick="minions()">
Continue 💕
</button>


</div>


<img src="bubu.gif">


</div>


</div>

`;

}





function minions(){


app.innerHTML=`

<div class="card">

<h1>
🍌 Minions have something to say
</h1>


<img class="bigImage" src="minions.png">


<p>
PAPOIIII 🍌❤️
<br>
STOPAAAAH!
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
🐾 Little paws and hugs
</h1>


<img class="bigImage" src="mew2.png">


<p>
Sending you warm hugs, love and endless cuddles ❤️
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


<img src="dudububu2.gif" class="bigImage">


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


effects();


app.innerHTML=`

<div class="card">


<h1>
🎂 Happy Birthday Duduzilla 🎂
</h1>


<div class="cakePhoto">

<img src="cake.gif">

</div>


<p>
Make a wish ✨
</p>


<button onclick="finalLetter()">
Open my final letter 💌
</button>


</div>

`;

}





function finalLetter(){


app.innerHTML=`

<div class="card finalLetter">


<h1>
💌 My final message ❤️
</h1>


<p id="typing"></p>


</div>

`;


let text=

"Happy Birthday my Georgiiii ❤️ Thank you for being such a wonderful person. I hope your day is full of happiness, smiles and beautiful moments. I LUB YOU SO MUUUUCH MEOWIE WOOOWIEE <333. Never forget how special you are 💖";


let i=0;


let timer=setInterval(()=>{

document.getElementById("typing").innerHTML+=text[i];

i++;


if(i>=text.length){

clearInterval(timer);

}

},50);


effects();


}



start();
